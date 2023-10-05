import { useSignal } from "@preact/signals";
import { getRandomCongratulation } from "@utils/text.utils";
import "./game-over.css";
import {useContext} from "preact/compat";
import {GameLevelContext, GameStateContext, GameStatisticContext} from "../../context/game-state.context";

export function GameOverComponent() {
  const { increaseLevel, isMaxLevel } = useContext(GameLevelContext);
  const { start, timeSpentInSeconds, cardsFlipCount } = useContext(GameStateContext);
  const isMaxLevelReached = isMaxLevel();

  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
      useContext(GameStatisticContext);

  const headerMessage = useSignal(getRandomCongratulation());

  const increaseLevelAndStart = () => {
    increaseLevel();
    start();
  };

  return (
    <div class="game-over menu">
      <div class="game-over__header">{headerMessage.value}</div>
      <div class="game-over__statistic">
        <div class="game-over__statistic-title">Time spent in second</div>
        <div class="game-over__statistic-data">
          <div class="game-over__statistic-key">This Game:</div>
          <div class="game-over__statistic-value">
            {timeSpentInSeconds.value}
          </div>
          <div class="game-over__statistic-key">You Average:</div>
          <div class="game-over__statistic-value">
            {averageTimeSpentInSeconds.value}
          </div>
        </div>
      </div>
      <div class="game-over__statistic">
        <div class="game-over__statistic-title">Card Flips Count</div>
        <div class="game-over__statistic-data">
          <div class="game-over__statistic-key">This Game:</div>
          <div class="game-over__statistic-value">{cardsFlipCount.value}</div>
          <div class="game-over__statistic-key">You Average:</div>
          <div class="game-over__statistic-value">
            {averageCardFlipsCount.value}
          </div>
        </div>
      </div>

      <div class="game-over__actions">
        <button class="game-over__action-button" onClick={start}>
          Play again
        </button>
        {!isMaxLevelReached && (
          <button
            class="game-over__action-button"
            onClick={increaseLevelAndStart}
          >
            Go next level
          </button>
        )}
      </div>
    </div>
  );
}
