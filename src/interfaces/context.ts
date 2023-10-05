import { GameStateService } from "@services/game-state.service";
import { GameStatisticService } from "@services/game-statistic.service";
import { GameThemeService } from "@services/game-theme.service";
import { createContext } from "preact";

export const GameStateContext = createContext<GameStateService>(null);
export const GameStatisticContext = createContext<GameStatisticService>(null);
export const GameThemeContext = createContext<GameThemeService>(null);
