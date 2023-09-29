import { GameControlsComponent } from "@components/game-gui/game-gui";
import { GameFieldComponent } from "@components/game-field/game-field";
import {
  GameStateContext,
  GameStateService,
} from "@services/game-state.service";
import "./game.css";

const gameStateService = new GameStateService();
gameStateService.start();

export function GameComponent() {
  return (
    <GameStateContext.Provider value={gameStateService}>
      <div class="game">
        <div class="game__spacer"></div>
        <div class="game__content">
          <GameControlsComponent />
          <GameFieldComponent />
        </div>
        <div class="game__spacer"></div>
      </div>
    </GameStateContext.Provider>
  );
}
