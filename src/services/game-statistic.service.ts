import { MAX_GAME_LEVEL } from "@constants";
import {
  GameLevel,
  GameStatistic,
  GameStatisticWithLevel,
} from "@interfaces/index";
import { computed, signal } from "@preact/signals";
import { Storage } from "@utils/telegram.utils";

const AMOUNT_OF_SAVED_RESULTS = 5;

export class GameStatisticService {
  readonly gameLevel = signal<GameLevel>(1);

  readonly statistic = signal<GameStatisticWithLevel>(
    {} as GameStatisticWithLevel
  );

  readonly lastGameStatistic = signal<GameStatistic | null>(null);

  readonly currentLevelStatistic = computed(() => {
    return this.statistic.value[this.gameLevel.value] ?? [];
  });

  readonly averageTimeSpentInSeconds = computed(() => {
    if (!this.gameLevel.value) {
      return null;
    }
    const statsByLevel = this.statistic.value[this.gameLevel.value] || [];

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
    if (!this.gameLevel.value) {
      return null;
    }
    const statsByLevel = this.statistic.value[this.gameLevel.value] || [];

    if (statsByLevel.length === 0) {
      return null;
    }

    const total = statsByLevel.reduce(
      (acc, value) => (acc += value.cardFlipsCount),
      0
    );
    return Math.floor(total / statsByLevel.length);
  });

  increaseLevel = () => {
    const value = (this.gameLevel.value + 1) as GameLevel;
    if (value <= MAX_GAME_LEVEL) {
      this.gameLevel.value = value;
    }
  };

  degreesLevel = () => {
    const value = (this.gameLevel.value - 1) as GameLevel;
    if (value > 0) {
      this.gameLevel.value = value;
    }
  };

  addGameStatistic = async (level: GameLevel, statistic: GameStatistic) => {
    this.lastGameStatistic.value = statistic;
    this.statistic.value = {
      ...this.statistic.value,
      [level]: [statistic, ...(this.statistic.value?.[level] || [])].slice(
        0,
        AMOUNT_OF_SAVED_RESULTS
      ),
    };
    await Storage.setItem("results", JSON.stringify(this.statistic.value));
    console.log(">> addGameStatistic", JSON.stringify(this.statistic.value));
  };

  loadGameStatistic = async () => {
    const results = JSON.parse((await Storage.getItem("results")) || "{}");
    this.statistic.value = results;
    console.log(">> loadGameStatistic", results);
  };
}
