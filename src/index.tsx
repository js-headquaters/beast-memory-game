import { Fragment, createContext, render } from "preact";
import "./style.css";
import { GameStateService } from "./game-state.service";
import { GameFieldCard } from "./types";
import { GameFieldCardComponent } from "./game-field-card";

const gameStateService = new GameStateService();

export const GameState = createContext<GameStateService>(null);

export function App() {
  const handleClick = () => {
    gameStateService.start();
  };

  return (
    <GameState.Provider value={gameStateService}>
      <div class="controls">
        <button onClick={handleClick}>new game</button>
      </div>
      <div class="game-field">
        {gameStateService.gameField.value.cards.map((card) => {
          return <GameFieldCardComponent {...card} />;
        })}
      </div>
    </GameState.Provider>
  );
}

render(<App />, document.getElementById("app"));
