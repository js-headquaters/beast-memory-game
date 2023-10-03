import { GameStatistic } from "@interfaces/index";
import { computed, signal } from "@preact/signals";

export class GameStatisticService {
  readonly statistic = signal<GameStatistic[]>([]);

  readonly lastGameStatistic = computed(() => {
    const index =
      this.statistic.value.length > 0 ? this.statistic.value.length - 1 : 0;
    return this.statistic.value[index];
  });

  readonly averageTimeSpentInSeconds = computed(() => {
    const avg = this.statistic.value.reduce(
      (acc, value) => (acc += value.timeSpentInSeconds),
      0
    );

    return Math.floor(avg / this.statistic.value.length);
  });
  readonly averageCardFlipsCount = computed(() => {
    const avg = this.statistic.value.reduce(
      (acc, value) => (acc += value.cardFlipsCount),
      0
    );
    return Math.floor(avg / this.statistic.value.length);
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

  addGameStatistic = (statistic: GameStatistic) => {
    this.statistic.value = [...this.statistic.value, statistic];
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

export const gameStatisticService = new GameStatisticService();
