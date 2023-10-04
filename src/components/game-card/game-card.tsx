import cardBackingImage from "@assets/backing.jpg";
import { GameCard } from "@interfaces/index";
import { cardImageMap } from "@utils/card-image.utils";
import "./game-card.css";
import {gameStateService} from "@services/index";

export function GameCardComponent(card: GameCard) {
  const { openCard, isCardOpen } = gameStateService;

  const handleClick = () => {
    openCard(card);
  };

  const getCardClasses = (card: GameCard) => {
    return `game-card ${isCardOpen(card) && "game-card_open"} ${
      card.isActive && "game-card_active"
    }`;
  };

  return (
    <div class={getCardClasses(card)} onClick={handleClick}>
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
    </div>
  );
}
