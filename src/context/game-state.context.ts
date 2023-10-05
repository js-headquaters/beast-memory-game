import {createContext} from "preact";
import {GameStateService} from "@services/game-state.service";
import {GameStatisticService} from "@services/game-statistic.service";
import {GameThemeService} from "@services/game-theme.service";
import {GameLevelService} from "@services/game-level.service";
import {GameMenuService} from "@services/game-menu.service";


export const GameStateContext = createContext<GameStateService>(null);
export const GameStatisticContext = createContext<GameStatisticService>(null);
export const GameThemeContext = createContext<GameThemeService>(null);
export const GameLevelContext = createContext<GameLevelService>(null);
export const GameMenuContext = createContext<GameMenuService>(null);
