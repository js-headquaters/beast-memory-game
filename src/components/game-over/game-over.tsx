import { BlockComponent } from "@components/block/block";
import { KeyValueComponent } from "@components/key-value-list/key-value";
import { KeyValueListComponent } from "@components/key-value-list/key-value-list";
import { useSignal } from "@preact/signals";
import { getRandomCongratulation } from "@utils/text.utils";
import { useContext } from "preact/compat";
import {
  GameStateContext,
  GameStatisticContext,
} from "../../interfaces/context";
import "./game-over.css";

export function GameOverComponent() {
  const { timeSpentInSeconds, cardsFlipCount } = useContext(GameStateContext);
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    useContext(GameStatisticContext);

  const headerMessage = useSignal(getRandomCongratulation());

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
    </div>
  );
}
