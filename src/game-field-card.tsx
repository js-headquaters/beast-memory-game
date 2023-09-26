import { useContext } from "preact/hooks";
import { GameState } from ".";
import { GameFieldCard } from "./types";
import { cardImageMap } from "./image-helper";

export function GameFieldCardComponent(card: GameFieldCard) {
  const gameState = useContext(GameState);

  const handleClick = () => {
    gameState.openCard(card);
  };

  const getCardClasses = (card: GameFieldCard) => {
    return `game-field-card ${
      gameState.isCardOpen(card) && " game-field-card_open"
    } `;
  };

  const cardContent = (
    <div class="game-field-card__inner">
      <div class="game-field-card__front"></div>
      <div class="game-field-card__back">
        <img
          class="game-field-card__image"
          src={cardImageMap.get(card.value)}
          alt={card.value}
        />
      </div>
    </div>
  );

  return (
    <div class={getCardClasses(card)} onClick={handleClick}>
      {card.isActive && cardContent}
    </div>
  );
}
