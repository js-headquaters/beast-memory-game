import { GameFieldComponent } from "@components/game-field/game-field";
import { GameOverComponent } from "@components/game-over/game-over";
import { StatisticComponent } from "@components/statistic/statistic";
import { effect, untracked } from "@preact/signals";
import { GameStateService } from "@services/game-state.service";
import { StatisticService } from "@services/statistic.service";
import { ThemeService } from "@services/theme.service";
import { isRunningInTelegram } from "@utils/telegram.utils";
import {
  GameStateContext,
  StatisticContext,
  ThemeContext,
} from "../../interfaces/context";
import "./game.css";

const gameThemeService = new ThemeService();
const gameStatisticService = new StatisticService();
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

export function GameComponent() {
  const { currentState, menuButtonText, mainButtonClickHandler } =
    gameStateService;

  const state = currentState.value;

  return (
    <GameStateContext.Provider value={gameStateService}>
      <StatisticContext.Provider value={gameStatisticService}>
        <ThemeContext.Provider value={gameThemeService}>
          <div class="game">
            <div class="game__spacer"></div>
            <div class="game__content">
              {state === "menu" && <StatisticComponent />}
              {state === "game_over" && <GameOverComponent />}
              {(state === "init" || state === "run") && <GameFieldComponent />}

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
        </ThemeContext.Provider>
      </StatisticContext.Provider>
    </GameStateContext.Provider>
  );
}
