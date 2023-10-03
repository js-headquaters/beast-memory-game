import {GameStatistic, GameStatisticWithLevel} from "@interfaces/index";
import { computed, signal } from "@preact/signals";
import {getResultsStorage, persistGameStatisticsByLevel} from './results-storage.service';

const AMOUNT_OF_SAVED_RESULTS = 5;

export class GameStatisticService {
  readonly statistic = signal<GameStatisticWithLevel>({} as GameStatisticWithLevel);

  readonly lastGameStatistic = signal<GameStatistic | null>(null);
  readonly gameLevel = signal<number>(1);

  readonly averageTimeSpentInSeconds = computed(() => {
    if (!this.gameLevel.value) {
      return null;
    }
    const statsByLevel = this.statistic.value[this.gameLevel.value] || [];

    if (statsByLevel.length === 0) {
      return null;
    }

    const avg = statsByLevel.reduce(
      (acc, value, index) => (acc += index === 0 ? 0 : value.timeSpentInSeconds),
      0
    );

    return Math.floor(avg / statsByLevel.length);
  });

  readonly averageCardFlipsCount = computed(() => {
    if (!this.gameLevel.value) {
      return null;
    }
    const statsByLevel = this.statistic.value[this.gameLevel.value] || [];

    if (statsByLevel.length === 0) {
      return null;
    }

    const avg = statsByLevel.reduce(
      (acc, value, index) => (acc += index === 0 ? 0 : value.cardFlipsCount),
      0
    );
    return Math.floor(avg / statsByLevel.length);
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

  addGameStatistic = async (level: number, statistic: GameStatistic) => {
    this.lastGameStatistic.value = statistic;
    await this.loadGameStatistic();
    this.statistic.value[level] = [statistic, ...(this.statistic.value?.[level] || [])].slice(0, AMOUNT_OF_SAVED_RESULTS);
    debugger;
    await this.saveGameStatistic();
  };

  loadGameStatistic = async () => {
    debugger;
    const gameStatsWithLevels = await getResultsStorage();
    this.statistic.value = gameStatsWithLevels;
  };

  private saveGameStatistic = async () => {
    await persistGameStatisticsByLevel(this.statistic.value);
  }

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

export const gameStatisticService = new GameStatisticService();
