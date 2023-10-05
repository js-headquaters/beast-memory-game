import darkBackImage from "@assets/back-dark.jpg";
import lightBackImage from "@assets/back-light.jpg";
import { GameCard } from "@interfaces/index";
import { cardImageMap } from "@utils/card-image.utils";
import "./game-card.css";
import { GameStateContext, GameThemeContext } from "../../interfaces/context";
import { useContext } from "preact/compat";

export function GameCardComponent(card: GameCard) {
  const { openCard, isCardOpen } = useContext(GameStateContext);
  const { theme } = useContext(GameThemeContext);

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
            src={theme.value === "dark" ? darkBackImage : lightBackImage}
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
