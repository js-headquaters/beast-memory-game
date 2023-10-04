import { useSignal } from "@preact/signals";
import { getRandomCongratulation } from "@utils/text.utils";
import "./game-over.css";
import {gameLevelService, gameStateService, gameStatisticService} from "@services/index";

export function GameOverComponent() {
  const { increaseLevel, isMaxLevel } = gameLevelService;
  const { start } = gameStateService;
  const isMaxLevelReached = isMaxLevel();

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
        <div class="game-over__statistic-message">{timeSpentMessage.value}</div>
        <div class="game-over__statistic-message">
          {cardFlipsCountMessage.value}
        </div>
      </div>
      <div class="game-over__level-settings">
        {!isMaxLevelReached && <div class="game-over__level-settings-message">
          Do you want to increase the game's difficulty?
        </div>}
        <div class="game-over__level-settings-actions">
          <button
            class="game-over__action-button"
            onClick={() => levelChooseHandler(false)}
          >
            Play again
          </button>
          {!isMaxLevelReached && <button
            class="game-over__action-button"
            onClick={() => levelChooseHandler(true)}
          >
            Increase difficulty
          </button>}
        </div>
      </div>
    </div>
  );
}
