import { GameStateService } from "@services/game-state.service";
import { GameStatisticService } from "@services/game-statistic.service";
import { GameLevelService } from "@services/game-level.service";
import { GameThemeService } from "./game-theme.service";

export const gameThemeService = new GameThemeService();
export const gameLevelService = new GameLevelService();
export const gameStatisticService = new GameStatisticService(gameLevelService);

await Promise.all([
  await gameLevelService.loadLevel(),
  await gameStatisticService.loadGameStatistic(),
]);

export const gameStateService = new GameStateService(
  gameStatisticService,
  gameLevelService
);