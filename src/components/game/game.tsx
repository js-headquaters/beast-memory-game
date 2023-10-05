import { GameFieldComponent } from "@components/game-field/game-field";
import { GameMenuComponent } from "@components/game-menu/game-menu";
import { GameOverComponent } from "@components/game-over/game-over";
import { GameState } from "@interfaces/index";
import { effect, untracked } from "@preact/signals";
import { GameStateService } from "@services/game-state.service";
import { GameStatisticService } from "@services/game-statistic.service";
import { GameThemeService } from "@services/game-theme.service";
import { isRunningInTelegram } from "@utils/telegram.utils";
import {
  GameStateContext,
  GameStatisticContext,
  GameThemeContext,
} from "../../interfaces/context";
import "./game.css";

type GameStateComponent = typeof GameFieldComponent | typeof GameOverComponent;

const statesComponents = new Map<GameState, GameStateComponent>([
  ["init", GameFieldComponent],
  ["run", GameFieldComponent],
  ["game_over", GameOverComponent],
]);

const gameThemeService = new GameThemeService();
const gameStatisticService = new GameStatisticService();
const gameStateService = new GameStateService();

effect(() => {
  if (gameStateService.currentState.value === "game_over") {
    untracked(() => {
      const { gameLevel, timeSpentInSeconds, cardsFlipCount } =
        gameStateService;
      gameStatisticService.addGameStatistic(gameLevel.value, {
        timeSpentInSeconds: timeSpentInSeconds.value,
        cardFlipsCount: cardsFlipCount.value,
      });
    });
  }
});
gameStateService.start();

export function GameComponent() {
  const { isMenuOpen, currentState, menuButtonText, mainButtonClickHandler } =
    gameStateService;

  const StateComponent = statesComponents.get(currentState.value);

  return (
    <GameStateContext.Provider value={gameStateService}>
      <GameStatisticContext.Provider value={gameStatisticService}>
        <GameThemeContext.Provider value={gameThemeService}>
          <div class="game">
            <div class="game__spacer"></div>
            <div class="game__content">
              {isMenuOpen.value ? <GameMenuComponent /> : <StateComponent />}

              {!isRunningInTelegram() && (
                <button
                  class="game__fallback-menu"
                  onClick={mainButtonClickHandler}
                >
                  {menuButtonText.value}
                </button>
              )}
            </div>
            <div class="game__spacer"></div>
          </div>
        </GameThemeContext.Provider>
      </GameStatisticContext.Provider>
    </GameStateContext.Provider>
  );
}
