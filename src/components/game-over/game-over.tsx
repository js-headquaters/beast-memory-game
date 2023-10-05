import { useSignal } from "@preact/signals";
import { getRandomCongratulation } from "@utils/text.utils";
import "./game-over.css";
import { useContext } from "preact/compat";
import {
  GameLevelContext,
  GameStateContext,
  GameStatisticContext,
} from "../../context/game-state.context";
import { BlockComponent } from "@components/block/block";
import { KeyValueListComponent } from "@components/key-value-list/key-value-list";
import { KeyValueComponent } from "@components/key-value-list/key-value";

export function GameOverComponent() {
  const { increaseLevel, canIncreaseLevel } = useContext(GameLevelContext);
  const { start, timeSpentInSeconds, cardsFlipCount } =
    useContext(GameStateContext);
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    useContext(GameStatisticContext);

  const headerMessage = useSignal(getRandomCongratulation());

  const increaseLevelAndStart = () => {
    increaseLevel();
    start();
  };

  return (
    <div class="game-over modal">
      <div class="modal__header">{headerMessage.value}</div>

      <BlockComponent title="Time spent in second">
        <KeyValueListComponent>
          <KeyValueComponent
            name="This Game:"
            value={timeSpentInSeconds.value}
          />
        </KeyValueListComponent>
        <KeyValueListComponent>
          <KeyValueComponent
            name="You Average:"
            value={averageTimeSpentInSeconds.value}
          />
        </KeyValueListComponent>
      </BlockComponent>

      <BlockComponent title="Card Flips Count">
        <KeyValueListComponent>
          <KeyValueComponent name="This Game:" value={cardsFlipCount.value} />
        </KeyValueListComponent>
        <KeyValueListComponent>
          <KeyValueComponent
            name="You Average:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </BlockComponent>

      <div class="game-over__actions">
        <button class="game-over__action-button" onClick={start}>
          Play again
        </button>
        {canIncreaseLevel.value && (
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
