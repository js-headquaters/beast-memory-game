import { MAX_GAME_LEVEL } from "@constants";
import { GameLevel, GameStatistic, GameStatisticMap } from "@interfaces/index";
import { computed, signal } from "@preact/signals";
import { Logger } from "@utils/logger.utils";
import {
  hasStorageApi,
  setItemToCloudStorage,
  getItemFromCloudStorage,
} from "@utils/telegram.utils";

const AMOUNT_OF_SAVED_RESULTS = 100;
const AMOUNT_OF_RESULTS_FOR_STATS = 5;

export class StatisticService {
  constructor() {
    this.loadGameStatistic();
  }

  readonly gameLevelForStatistic = signal<GameLevel>(1);
  readonly statistic = signal<GameStatisticMap>({} as GameStatisticMap);
  readonly currentLevelStatistic = computed(() => {
    return this.statistic.value[this.gameLevelForStatistic.value] ?? [];
  });
  readonly averageTimeSpentInSeconds = computed(() => {
    return this.getAverageTimeSpentInSeconds();
  });
  readonly averageCardFlipsCount = computed(() => {
    return this.getAverageCardFlipsCount();
  });

  private readonly logger = new Logger("StatisticService");

  increaseStatisticLevel = () => {
    const value = (this.gameLevelForStatistic.value + 1) as GameLevel;
    if (value <= MAX_GAME_LEVEL) {
      this.gameLevelForStatistic.value = value;
    }
  };

  decreaseStatisticLevel = () => {
    const value = (this.gameLevelForStatistic.value - 1) as GameLevel;
    if (value > 0) {
      this.gameLevelForStatistic.value = value;
    }
  };

  resetStatistics = async () => {
    this.statistic.value = {} as GameStatisticMap;
    try {
      await this.setItemToCloudStorage(
        "results",
        JSON.stringify(this.statistic.value)
      );
      this.logger.log("statistics was reset");
    } catch {
      this.logger.error("error during statistics reset");
    }
  };

  addGameStatistic = async (level: GameLevel, statistic: GameStatistic) => {
    this.statistic.value = {
      ...this.statistic.value,
      [level]: [statistic, ...(this.statistic.value?.[level] || [])].slice(
        0,
        AMOUNT_OF_SAVED_RESULTS
      ),
    };
    try {
      await this.setItemToCloudStorage(
        "results",
        JSON.stringify(this.statistic.value)
      );
      this.logger.log("added new game statistic", this.statistic.value);
    } catch {
      this.logger.error("error happened during adding new game statistic");
    }
  };

  loadGameStatistic = async () => {
    try {
      const localStorageResults = JSON.parse(
        (await this.getItemFromCloudStorage("results")) || "{}"
      );
      this.statistic.value = localStorageResults;
      this.logger.log(
        "loaded game statistic from cloud storage",
        localStorageResults
      );
    } catch {
      this.logger.error(
        "error happened during loading game statistic from cloud storage"
      );
    }
  };

  private getAverageTimeSpentInSeconds() {
    if (!this.gameLevelForStatistic.value) {
      return null;
    }
    const statsByLevel =
      this.statistic.value[this.gameLevelForStatistic.value] || [];

    if (statsByLevel.length === 0) {
      return null;
    }

    const total = statsByLevel
      .slice(0, AMOUNT_OF_RESULTS_FOR_STATS)
      .reduce((acc, value) => (acc += value.timeSpentInSeconds), 0);

    return Math.floor(total / statsByLevel.length);
  }

  private getAverageCardFlipsCount() {
    if (!this.gameLevelForStatistic.value) {
      return null;
    }
    const statsByLevel =
      this.statistic.value[this.gameLevelForStatistic.value] || [];

    if (statsByLevel.length === 0) {
      return null;
    }

    const total = statsByLevel
      .slice(0, AMOUNT_OF_RESULTS_FOR_STATS)
      .reduce((acc, value) => (acc += value.cardFlipsCount), 0);
    return Math.floor(total / statsByLevel.length);
  }

  private async setItemToCloudStorage(key, value): Promise<boolean> {
    if (!hasStorageApi()) {
      localStorage.setItem(key, value);
      return;
    }

    return new Promise((resolve, reject) => {
      setItemToCloudStorage(key, value, (err, isStored) => {
        if (err) {
          this.logger.error(">> error happened during SET", err);
          reject(err);
          return;
        }
        resolve(isStored);
      });
    });
  }

  private async getItemFromCloudStorage(key): Promise<string | undefined> {
    if (!hasStorageApi()) {
      return localStorage.getItem(key);
    }

    return new Promise((resolve, reject) => {
      // this fallback is needed to prevent infinite loading (I got this issue on Telegram for macOS Beta)
      const timerId = setTimeout(() => {
        resolve(localStorage.getItem(key));
      }, 3000);

      getItemFromCloudStorage(key, (err, value) => {
        clearTimeout(timerId);
        if (err) {
          console.error(">> omg error happened during CloudStorage GET", err);
          reject(err);
          return;
        }
        resolve(value);
      });
    });
  }
}
