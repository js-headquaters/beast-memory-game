import { MAX_GAME_LEVEL } from "@constants";
import { GameLevel, GameStatistic, GameStatisticMap } from "@interfaces/index";
import { computed, signal } from "@preact/signals";
import { Logger } from "@utils/logger.utils";
import { Storage } from "@utils/telegram.utils";

const AMOUNT_OF_SAVED_RESULTS = 5;

export class StatisticService {
  readonly gameLevel = signal<GameLevel>(1);
  readonly statistic = signal<GameStatisticMap>({} as GameStatisticMap);
  readonly lastGameStatistic = signal<GameStatistic | null>(null);

  readonly currentLevelStatistic = computed(() => {
    return this.statistic.value[this.gameLevel.value] ?? [];
  });

  // TODO too big, move to function
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

  // TODO too big, move to function
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

  private readonly logger = new Logger("StatisticService");

  increaseStatisticLevel = () => {
    const value = (this.gameLevel.value + 1) as GameLevel;
    if (value <= MAX_GAME_LEVEL) {
      this.gameLevel.value = value;
    }
  };

  degreesStatisticLevel = () => {
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
    this.logger.log("added new game statistic", this.statistic.value);
  };

  loadGameStatistic = async () => {
    const results = JSON.parse((await Storage.getItem("results")) || "{}");
    this.statistic.value = results;
    this.logger.log("loaded game statistic", results);
  };
}
