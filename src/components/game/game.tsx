import { GameFieldComponent } from "@components/game-field/game-field";
import { GameOverComponent } from "@components/game-over/game-over";
import { GameState } from "@interfaces/index";
import { DebugContext, DebugService } from "@services/debug.service";
import {
  GameStateContext,
  GameStateService,
} from "@services/game-state.service";
import "./game.css";

const gameStateService = new GameStateService();
const debugService = new DebugService();

type GameStateComponent = typeof GameFieldComponent | typeof GameOverComponent;

const statesComponents = new Map<GameState, GameStateComponent>([
  ["run", GameFieldComponent],
  ["game_over", GameOverComponent],
]);

export function GameComponent() {
  const { currentState } = gameStateService;

  const StateComponent = statesComponents.get(currentState.value);

  return (
    <GameStateContext.Provider value={gameStateService}>
      <DebugContext.Provider value={debugService}>
        <div class="game">
          <div class="game__spacer"></div>
          <div class="game__content">
            <StateComponent />
          </div>
          <div class="game__spacer"></div>
        </div>
      </DebugContext.Provider>
    </GameStateContext.Provider>
  );
}
