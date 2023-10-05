import { GameFieldComponent } from "@components/game-field/game-field";
import { GameMenuComponent } from "@components/game-menu/game-menu";
import { GameOverComponent } from "@components/game-over/game-over";
import { GameState } from "@interfaces/index";
import { GameMenuService } from "@services/game-menu.service";
import "./game.css";
import { isRunningInTelegram } from "@utils/telegram.utils";
import {
  GameLevelContext,
  GameMenuContext,
  GameStateContext,
  GameStatisticContext,
  GameThemeContext,
} from "../../context/game-state.context";
import { GameStateService } from "@services/game-state.service";
import { useEffect, useState } from "preact/compat";
import { GameStatisticService } from "@services/game-statistic.service";
import { GameThemeService } from "@services/game-theme.service";
import { GameLevelService } from "@services/game-level.service";

type GameStateComponent = typeof GameFieldComponent | typeof GameOverComponent;

const statesComponents = new Map<GameState, GameStateComponent>([
  ["run", GameFieldComponent],
  ["game_over", GameOverComponent],
]);

export function GameComponent() {
  const [gameStateService, setGameStateService] = useState(null);
  const [gameStatisticService, setGameStatisticService] = useState(null);
  const [gameThemeService, setGameThemeService] = useState(null);
  const [gameLevelService, setGameLevelService] = useState(null);
  const [gameMenuService, setGameMenuService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const gameLevelServiceInstance = new GameLevelService();
    const gameStatisticServiceInstance = new GameStatisticService(
      gameLevelServiceInstance,
    );
    const gameMenuServiceInstance = new GameMenuService();

    setGameStatisticService(gameStatisticServiceInstance);
    setGameThemeService(new GameThemeService());
    setGameLevelService(gameLevelServiceInstance);
    setGameMenuService(gameMenuServiceInstance);

    debugger
    Promise.all([
      gameStatisticServiceInstance.loadGameStatistic(),
      gameLevelServiceInstance.loadLevel(),
    ]).then(() => {
      debugger;
      setGameStateService(
        new GameStateService(
          gameStatisticServiceInstance,
          gameLevelServiceInstance,
          gameMenuServiceInstance,
        ),
      );

      setIsLoading(false);
    });

  }, []);

  if (isLoading || !gameStateService || !gameMenuService) {
    return <>Loading...</>;
  }

  const { currentState } = gameStateService;
  const { isMenuOpen, toggleMenu, isMenuButtonVisible, menuButtonText } =
    gameMenuService;

  const StateComponent = statesComponents.get(currentState.value);

  const showFallbackMenuButton =
    !isRunningInTelegram() && isMenuButtonVisible.value;

  return (
    <CombinedProvider
      gameStateService={gameStateService}
      gameStatisticService={gameStatisticService}
      gameThemeService={gameThemeService}
      gameLevelService={gameLevelService}
      gameMenuService={gameMenuService}
    >
      <div class="game">
        <div class="game__spacer"></div>
        <div class="game__content">
          {isMenuOpen.value ? <GameMenuComponent /> : <StateComponent />}

          {showFallbackMenuButton && (
            <button class="game__fallback-menu" onClick={toggleMenu}>
              {menuButtonText.value}
            </button>
          )}
        </div>
        <div class="game__spacer"></div>
      </div>
    </CombinedProvider>
  );
}

function CombinedProvider({
  children,
  gameStateService,
  gameStatisticService,
  gameThemeService,
  gameLevelService,
  gameMenuService,
}) {
  return (
    <GameStateContext.Provider value={gameStateService}>
      <GameStatisticContext.Provider value={gameStatisticService}>
        <GameThemeContext.Provider value={gameThemeService}>
          <GameLevelContext.Provider value={gameLevelService}>
            <GameMenuContext.Provider value={gameMenuService}>
              {children}
            </GameMenuContext.Provider>
          </GameLevelContext.Provider>
        </GameThemeContext.Provider>
      </GameStatisticContext.Provider>
    </GameStateContext.Provider>
  );
}
