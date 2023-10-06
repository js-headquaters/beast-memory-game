import { GameStateService } from "@services/game-state.service";
import { StatisticService } from "@services/statistic.service";
import { ThemeService } from "@services/theme.service";
import { createContext } from "preact";

export const GameStateContext = createContext<GameStateService>(null);
export const StatisticContext = createContext<StatisticService>(null);
export const ThemeContext = createContext<ThemeService>(null);
