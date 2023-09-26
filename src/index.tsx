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

  const handleCardClick = (card: GameFieldCard) => {
    gameStateService.openCard(card);
  };

  const getCardClasses = (card: GameFieldCard) => {
    let className = "game-field-card";

    if (!card.isActive) {
      className += " game-field-card_success";
    }

    return className;
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
