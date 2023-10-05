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
    await Storage.setItem("results", JSON.stringify(this.statistic.value));
    console.log(
        ">> addGameStatistic",
        JSON.stringify(this.statistic.value)
    );
  };

  loadGameStatistic = async () => {
    const results = JSON.parse((await Storage.getItem("results")) || "{}");
    this.statistic.value = results;
    console.log(">> loadGameStatistic", results);
  };
}
