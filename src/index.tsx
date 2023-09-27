import { render } from "preact";
import "./style.css";
import { GameStateContext, GameStateService } from "./game-state.service";
import { GameFieldComponent } from "./game-field";
import { useSignal } from "@preact/signals";
import { GameControlsComponent } from "./game-controls";

const gameStateService = new GameStateService();

export function App() {
  return (
    <GameStateContext.Provider value={gameStateService}>
      <GameControlsComponent />
      <GameFieldComponent />
    </GameStateContext.Provider>
  );
}

render(<App />, document.getElementById("app"));
