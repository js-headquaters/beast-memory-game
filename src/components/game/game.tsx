import { GameControlsComponent } from "@components/game-gui/game-gui";
import { GameFieldComponent } from "@components/game-field/game-field";
import {
  GameStateContext,
  GameStateService,
} from "@services/game-state.service";
import "./game.css";
import { DebugContext, DebugService } from "@services/debug.service";
import { GameDebugComponent } from "@components/game-debug/game-debug";

const gameStateService = new GameStateService();
const debugService = new DebugService();
gameStateService.start();

export function GameComponent() {
  return (
    <GameStateContext.Provider value={gameStateService}>
      <DebugContext.Provider value={debugService}>
        <div class="game">
          <div class="game__spacer"></div>
          <div class="game__content">
            <GameControlsComponent />
            <GameFieldComponent />
            {/* TODO move to menu */}
            <GameDebugComponent />
          </div>
          <div class="game__spacer"></div>
        </div>
      </DebugContext.Provider>
    </GameStateContext.Provider>
  );
}
