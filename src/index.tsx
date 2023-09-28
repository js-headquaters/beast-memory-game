import { GameControlsComponent } from "@components/game-controls";
import { GameFieldComponent } from "@components/game-field";
import {
  GameStateContext,
  GameStateService,
} from "@services/game-state.service";
import { render } from "preact";
import "./style.css";
import { GameGUIComponent } from "@components/game-gui";
import { setReady } from "@utils/telegram.utils";

const gameStateService = new GameStateService();
gameStateService.start(3);
setReady();

export function App() {
  return (
    <GameStateContext.Provider value={gameStateService}>
      <GameGUIComponent />
      <GameFieldComponent />
      <GameControlsComponent />
    </GameStateContext.Provider>
  );
}

render(<App />, document.getElementById("app"));
