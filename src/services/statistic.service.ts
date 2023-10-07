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
const STORAGE_KEY_FOR_RESULT = "results";

const DEFAULT_STATISTIC: GameStatisticMap = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
};

export class StatisticService {
  private canUseCloud = hasStorageApi();

  constructor() {
    this.loadStatisticFromStorage();
  }

  readonly gameLevelForStatistic = signal<GameLevel>(1);
  readonly statistic = signal<GameStatisticMap>({ ...DEFAULT_STATISTIC });

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
    this.statistic.value = { ...DEFAULT_STATISTIC };
    this.logger.log("reset game statistic", this.statistic.value);
    this.saveStatisticToStorage();
  };

  addGameStatistic = (level: GameLevel, statistic: GameStatistic) => {
    const savedStatistic = this.statistic.value?.[level] || [];

    this.statistic.value = {
      ...this.statistic.value,
      [level]: [statistic, ...savedStatistic].slice(0, AMOUNT_OF_SAVED_RESULTS),
    };

    this.logger.log("added new game statistic", this.statistic.value);
    this.saveStatisticToStorage();
  };

  private saveStatisticToStorage() {
    const json = JSON.stringify(this.statistic.value);

    localStorage.setItem(STORAGE_KEY_FOR_RESULT, json);
    this.logger.log("saved game statistic to local storage");

    if (!this.canUseCloud) {
      this.logger.log(
        "cloud storage is not available, so we cant save data to it"
      );

      return;
    }

    setItemToCloudStorage(STORAGE_KEY_FOR_RESULT, json, (error, isStored) => {
      if (error) {
        this.logger.error("cannot save to cloud storage", error);
        return;
      }

      this.logger.log("saved game statistic to cloud storage", isStored);
    });
  }

  private loadStatisticFromStorage() {
    const json = localStorage.getItem(STORAGE_KEY_FOR_RESULT);
    const statistic = json ? JSON.parse(json) : [];
    this.statistic.value = statistic;

    this.logger.log("loaded game statistic from local storage", statistic);

    if (!this.canUseCloud) {
      this.logger.log(
        "cloud storage is not available, so we cant load data from it"
      );
      return;
    }

    getItemFromCloudStorage(STORAGE_KEY_FOR_RESULT, (error, value) => {
      if (error) {
        this.logger.error("cannot load statistic from cloud storage", error);
      }

      const cloudStatistic = value ? JSON.parse(value) : [];
      this.logger.log("loaded statistic from cloud storage", cloudStatistic);

      const isCloudHasMoreData = Object.entries(this.statistic.value).every(
        ([level, data]) => {
          return data.length < cloudStatistic[level].length;
        }
      );
      if (isCloudHasMoreData) {
        this.statistic.value = cloudStatistic;
        this.logger.log("cloud storage has more data used it", cloudStatistic);
      } else {
        this.logger.log(
          "cloud storage has less data so using local data",
          cloudStatistic
        );
      }
    });
  }

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
}