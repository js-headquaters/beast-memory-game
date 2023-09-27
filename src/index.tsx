import { render } from "preact";
import "./style.css";
import { GameStateContext, GameStateService } from "./game-state.service";
import { GameFieldComponent } from "./game-field";
import { useSignal } from "@preact/signals";

const gameStateService = new GameStateService();

export function App() {
  const horizontalCardsCount = useSignal(4);
  const verticalCardsCount = useSignal(4);

  const handleHorizontalCardsCountChange = (event) => {
    horizontalCardsCount.value = event.target.value;
  };

  const handleVerticalCardsCountChange = (event) => {
    verticalCardsCount.value = event.target.value;
  };

  const handleClick = () => {
    gameStateService.start(
      horizontalCardsCount.value,
      verticalCardsCount.value
    );
  };

  return (
    <GameStateContext.Provider value={gameStateService}>
      <div class="controls">
        <input
          style="width: 30px"
          type="number"
          value={horizontalCardsCount.value}
          onInput={handleHorizontalCardsCountChange}
        ></input>
        <span>X</span>
        <input
          style="width: 30px"
          type="number"
          value={verticalCardsCount.value}
          onInput={handleVerticalCardsCountChange}
        ></input>
        <button onClick={handleClick}>new game</button>
      </div>
      <GameFieldComponent />
    </GameStateContext.Provider>
  );
}

render(<App />, document.getElementById("app"));
