import { useSignal } from "@preact/signals";
import { gameStateService } from "@services/game-state.service";
import { gameStatisticService } from "@services/game-statistic.service";
import { getRandomCongratulation } from "@utils/text.utils";
import "./game-over.css";

export function GameOverComponent() {
  const { increaseLevel, start } = gameStateService;

  const { timeSpentMessage, cardFlipsCountMessage } = gameStatisticService;

  const headerMessage = useSignal(getRandomCongratulation());
  const levelChooseHandler = (shouldIncreaseLevel) => {
    if (shouldIncreaseLevel) {
      increaseLevel();
    }
    start();
  };

  return (
    <div class="game-over">
      <div class="game-over__header">{headerMessage.value}</div>
      <div class="game-over__statistic">
        {timeSpentMessage.value}

        {cardFlipsCountMessage.value}
      </div>
      <div class="game-over__controls">
        <div>Do you want to increase the game's difficulty?</div>
        <button onClick={() => levelChooseHandler(true)}>I'm in</button>
        <button onClick={() => levelChooseHandler(false)}>
          Let's keep it this way
        </button>
      </div>
    </div>
  );
}
