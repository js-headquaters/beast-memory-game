import { GameFieldComponent } from "@components/game-field/game-field";
import { GameMenuComponent } from "@components/game-menu/game-menu";
import { GameOverComponent } from "@components/game-over/game-over";
import { GameState } from "@interfaces/index";
import {
  MENU_BUTTON_CLOSED_TEXT,
  MENU_BUTTON_OPENED_TEXT,
  gameMenuService,
} from "@services/game-menu.service";
import { gameStateService } from "@services/game-state.service";
import { isRunningInTelegram } from "@utils/telegram.utils";
import "./game.css";
import { Fragment } from "preact/jsx-runtime";

type GameStateComponent = typeof GameFieldComponent | typeof GameOverComponent;

const statesComponents = new Map<GameState, GameStateComponent>([
  ["run", GameFieldComponent],
  ["game_over", GameOverComponent],
]);

export function GameComponent() {
  const { currentState, horizontalCardsCount, verticalCardsCount } =
    gameStateService;
  const { isMenuOpen, toggleMenu, isMenuButtonVisible } = gameMenuService;

  const StateComponent = statesComponents.get(currentState.value);

  let style = `--horizontal-cards-count: ${horizontalCardsCount.value};`;
  style += `--vertical-cards-count: ${verticalCardsCount.value};`;

  return (
    <div style={style} class="game">
      <div class="game__spacer"></div>
      <div class="game__content">
        {isMenuOpen.value ? <GameMenuComponent /> : <StateComponent />}

        {!isRunningInTelegram() && isMenuButtonVisible.value && (
          <Fragment>
            <div class="game__spacer"></div>
            <button class="game__fallback-menu" onClick={toggleMenu}>
              {isMenuOpen.value
                ? MENU_BUTTON_OPENED_TEXT
                : MENU_BUTTON_CLOSED_TEXT}
            </button>
          </Fragment>
        )}
      </div>
      <div class="game__spacer"></div>
    </div>
  );
}
