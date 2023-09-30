import { GameCard } from "@interfaces/index";
import { GameStateContext } from "@services/game-state.service";
import { cardImageMap } from "@utils/card-image.utils";
import { useContext } from "preact/hooks";
import "./game-card.css";
import cardBackingImage from "@assets/backing.jpg";

export function GameCardComponent(card: GameCard) {
  const { openCard, isCardOpen } = useContext(GameStateContext);

  const handleClick = () => {
    openCard(card);
  };

  const getCardClasses = (card: GameCard) => {
    return `game-card ${isCardOpen(card) && " game-card_open"} `;
  };

  const cardContent = (
    <div class="game-card__inner">
      <div class="game-card__backing">
        <img
          class="game-card__backing-image"
          src={cardBackingImage}
          alt="card backing"
          loading="eager"
        />
      </div>
      <div class="game-card__animal">
        <img
          class="game-card__animal-image"
          src={cardImageMap.get(card.animalType)}
          alt={card.animalType}
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
