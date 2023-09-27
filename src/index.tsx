import { GameControlsComponent } from "@components/game-controls";
import { GameFieldComponent } from "@components/game-field";
import {
  GameStateContext,
  GameStateService,
} from "@services/game-state.service";
import { render } from "preact";
import "./style.css";

const gameStateService = new GameStateService();
gameStateService.start(3);

export function App() {
  return (
    <GameStateContext.Provider value={gameStateService}>
      <GameControlsComponent />
      <GameFieldComponent />
    </GameStateContext.Provider>
  );
}

render(<App />, document.getElementById("app"));
