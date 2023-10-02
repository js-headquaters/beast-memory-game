import { GameFieldComponent } from "@components/game-field/game-field";
import { GameMenuComponent } from "@components/game-menu/game-menu";
import { GameOverComponent } from "@components/game-over/game-over";
import { GameState } from "@interfaces/index";
import { gameMenuService } from "@services/game-menu.service";
import { gameStateService } from "@services/game-state.service";
import { isRunningInTelegram } from "@utils/telegram.utils";
import "./game.css";

type GameStateComponent = typeof GameFieldComponent | typeof GameOverComponent;

const statesComponents = new Map<GameState, GameStateComponent>([
  ["run", GameFieldComponent],
  ["game_over", GameOverComponent],
]);

export function GameComponent() {
  const { currentState } = gameStateService;
  const { isMenuOpen, toggleMenu } = gameMenuService;

  const StateComponent = statesComponents.get(currentState.value);

  return (
    <div class="game">
      <div class="game__spacer"></div>
      <div class="game__content">
        {isMenuOpen.value ? <GameMenuComponent /> : <StateComponent />}

        {!isRunningInTelegram() && (
          <button onClick={toggleMenu}>
            {isMenuOpen.value ? "Close" : "Menu"}
          </button>
        )}
      </div>
      <div class="game__spacer"></div>
    </div>
  );
}
