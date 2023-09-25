import { useContext } from "preact/hooks";
import { GameState } from ".";
import { GameFieldCard } from "./types";

export function GameFieldCardComponent(card: GameFieldCard) {
  const gameState = useContext(GameState);

  const handleClick = () => {
    gameState.openCard(card);
  };

  const getCardClasses = (card: GameFieldCard) => {
    return `game-field-card ${
      gameState.isCardOpen(card) && " game-field-card_open"
    }`;
  };

  const cardContent = (
    <div class="game-field-card__inner">
      <div class="game-field-card__front"></div>
      <div class="game-field-card__back">{card.value}</div>
    </div>
  );

  return (
    <div class={getCardClasses(card)} onClick={handleClick}>
      {card.isActive && cardContent}
    </div>
  );
}
