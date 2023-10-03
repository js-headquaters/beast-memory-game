import { GameFieldComponent } from "@components/game-field/game-field";
import { GameMenuComponent } from "@components/game-menu/game-menu";
import { GameOverComponent } from "@components/game-over/game-over";
import { GameState } from "@interfaces/index";
import { gameMenuService } from "@services/game-menu.service";
import { gameStateService } from "@services/game-state.service";
import { isRunningInTelegram } from "@utils/telegram.utils";
import { Fragment } from "preact/jsx-runtime";
import "./game.css";

type GameStateComponent = typeof GameFieldComponent | typeof GameOverComponent;

const statesComponents = new Map<GameState, GameStateComponent>([
  ["run", GameFieldComponent],
  ["game_over", GameOverComponent],
]);

export function GameComponent() {
  const { currentState, horizontalCardsCount, verticalCardsCount } =
    gameStateService;
  const { isMenuOpen, toggleMenu, isMenuButtonVisible, menuButtonText } =
    gameMenuService;

  const StateComponent = statesComponents.get(currentState.value);

  let style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;
  style += `--vertical-cards-count: ${verticalCardsCount.value};`;

  const showFallbackMenuButton =
    !isRunningInTelegram() && isMenuButtonVisible.value;

  return (
    <div style={style} class="game">
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
  );
}
