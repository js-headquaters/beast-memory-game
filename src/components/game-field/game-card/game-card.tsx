import darkBackImage from "@assets/back-dark.jpg";
import lightBackImage from "@assets/back-light.jpg";
import { CARD_FLIP_ANIMATION_TIME, MILLISECONDS_IN_SECOND } from "@constants";
import { GameCard } from "@interfaces/index";
import { cardImageMap } from "@utils/card-image.utils";
import { useContext } from "preact/compat";
import { GameStateContext, ThemeContext } from "../../../interfaces/context";
import "./game-card.css";

type Props = {
  card: GameCard;
};

const cardFlipAnimationTime = `${
  CARD_FLIP_ANIMATION_TIME / MILLISECONDS_IN_SECOND
}s`;

export function GameCardComponent({ card }: Props) {
  const {
    openCard,
    isCardOpen,
    showDebugInfo: isAnimalTypeVisible,
  } = useContext(GameStateContext);
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    openCard(card);
  };

  const getCardClasses = (card: GameCard) => {
    return `game-card ${isCardOpen(card) && "game-card_open"} ${
      card.isActive && "game-card_active"
    }`;
  };

  const style = `--card-flip-animation-time: ${cardFlipAnimationTime}`;

  return (
    <div style={style} class={getCardClasses(card)} onClick={handleClick}>
      {isAnimalTypeVisible.value && (
        <div class="game-card__animal-type">{card.animalType}</div>
      )}
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
