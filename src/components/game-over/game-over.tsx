import { CardComponent } from "@components/shared/card/card";
import { KeyValueComponent } from "@components/shared/key-value-list/key-value";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { ModalComponent } from "@components/shared/modal/modal";
import { getRandomCongratulation } from "@utils/text.utils";
import { useContext, useRef } from "preact/compat";
import { GameStateContext, StatisticContext } from "../../interfaces/context";
import "./game-over.css";

/**
 * GameOverComponent is presented to the user upon the completion of a game. It displays
 * a congratulatory message and provides statistics from the completed level. Additionally,
 * average values are shown, enabling the user to gauge their performance and assess their
 * achievements.
 */
export function GameOverComponent() {
  const { timeSpentInSeconds, cardsFlipCount } = useContext(GameStateContext);
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    useContext(StatisticContext);

  const headerMessage = useRef(getRandomCongratulation());

  return (
    <ModalComponent title={headerMessage.current} className="game-over">
      <CardComponent title="Time spent in second">
        <KeyValueListComponent>
          <KeyValueComponent
            name="This game:"
            value={timeSpentInSeconds.value}
          />
        </KeyValueListComponent>
        <KeyValueListComponent>
          <KeyValueComponent
            name="Your average:"
            value={averageTimeSpentInSeconds.value}
          />
        </KeyValueListComponent>
      </CardComponent>

      <CardComponent title="Card flips count">
        <KeyValueListComponent>
          <KeyValueComponent name="This game:" value={cardsFlipCount.value} />
        </KeyValueListComponent>
        <KeyValueListComponent>
          <KeyValueComponent
            name="Your average:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </CardComponent>
    </ModalComponent>
  );
}
