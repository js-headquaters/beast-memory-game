import { GameStatistic, GameStatisticWithLevel } from "@interfaces/index";
import { computed, effect, signal, untracked } from "@preact/signals";
import { GameLevelService } from "@services/game-level.service";

import {Storage} from "@utils/telegram.utils";

const AMOUNT_OF_SAVED_RESULTS = 5;

export class GameStatisticService {
  constructor(private gameLevelService: GameLevelService) {}

  readonly statistic = signal<GameStatisticWithLevel>(
    {} as GameStatisticWithLevel
  );

  readonly lastGameStatistic = signal<GameStatistic | null>(null);

  readonly averageTimeSpentInSeconds = computed(() => {
    if (!this.gameLevelService.gameLevel.value) {
      return null;
    }
    const statsByLevel =
      this.statistic.value[this.gameLevelService.gameLevel.value] || [];

    if (statsByLevel.length === 0) {
      return null;
    }

    const total = statsByLevel.reduce(
      (acc, value) => (acc += value.timeSpentInSeconds),
      0
    );

    return Math.floor(total / statsByLevel.length);
  });

  readonly averageCardFlipsCount = computed(() => {
    if (!this.gameLevelService.gameLevel.value) {
      return null;
    }
    const statsByLevel =
      this.statistic.value[this.gameLevelService.gameLevel.value] || [];

    if (statsByLevel.length === 0) {
      return null;
    }

    const total = statsByLevel.reduce(
      (acc, value) => (acc += value.cardFlipsCount),
      0
    );
    return Math.floor(total / statsByLevel.length);
  });

  readonly timeSpentMessage = computed(() => {
    const { timeSpentInSeconds } = this.lastGameStatistic.value;
    return this.getTimeSpentMessage(
      timeSpentInSeconds,
      this.averageTimeSpentInSeconds.value
    );
  });

  readonly cardFlipsCountMessage = computed(() => {
    const { cardFlipsCount } = this.lastGameStatistic.value;
    return this.getCardFlipsCountMessage(
      cardFlipsCount,
      this.averageCardFlipsCount.value
    );
  });

  addGameStatistic = async (statistic: GameStatistic) => {
    const level = this.gameLevelService.gameLevel.value;

    this.lastGameStatistic.value = statistic;
    this.statistic.value = {
      ...this.statistic.value,
      [level]: [statistic, ...(this.statistic.value?.[level] || [])].slice(
        0,
        AMOUNT_OF_SAVED_RESULTS
      ),
    };
    await persistGameStatisticsByLevel(this.statistic.value);
  };

  loadGameStatistic = async () => {
    this.statistic.value = await getResultsStorage();
    console.log('>> this statistic value', this.statistic.value);
  };

  private getTimeSpentMessage(
    timeSpentInSeconds: number,
    averageTimeSpentInSeconds: number
  ): string {
    let message = `You completed this round in ${timeSpentInSeconds} seconds.`;
    const diff = averageTimeSpentInSeconds - timeSpentInSeconds;

    if (diff > 0) {
      message += ` That's ${diff} seconds faster than your average time.`;
    } else if (diff < 0) {
      message += ` You're just a bit off from your average of ${averageTimeSpentInSeconds} seconds. Keep practicing and you'll surely beat it next time!`;
    }

    return message;
  }

  private getCardFlipsCountMessage(
    cardFlipsCount: number,
    averageCardFlipsCount: number
  ): string {
    let message = `You finished the level with ${cardFlipsCount} card flips`;
    const diff = averageCardFlipsCount - cardFlipsCount;

    if (diff > 0) {
      message += ` which is ${diff} less than your average`;
    } else if (diff < 0) {
      message += ` You're just a few flips away from your average of ${averageCardFlipsCount}. Keep going, and you'll hit it or even do better next time!`;
    }

    return message;
  }
}

export async function persistGameStatisticsByLevel(
  gameStatisticWithLevel: GameStatisticWithLevel
): Promise<void> {
  await Storage.setItem("results", JSON.stringify(gameStatisticWithLevel));
  console.log(
    ">> persistGameStatisticsByLevel",
    JSON.stringify(gameStatisticWithLevel)
  );
}

export async function getResultsStorage(): Promise<GameStatisticWithLevel> {
  const resultsAsString = (await Storage.getItem("results")) || "{}";
  console.log(">> getResultsStorage: resultsAsString", resultsAsString);
  return JSON.parse(resultsAsString);
}
