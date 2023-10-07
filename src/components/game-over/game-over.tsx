import { PanelComponent } from "@components/shared/panel/panel";
import { KeyValueComponent } from "@components/shared/key-value-list/key-value";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { ModalComponent } from "@components/shared/modal/modal";
import { getRandomCongratulation } from "@utils/text.utils";
import { useContext, useRef } from "preact/compat";
import { GameStateContext, StatisticContext } from "@interfaces/context";
import "./game-over.css";
import { cardImageMap } from "@utils/card-image.utils";

/**
 * GameOverComponent is presented to the user upon the completion of a game. It displays
 * a congratulatory message and provides statistics from the completed level. Additionally,
 * average values are shown, enabling the user to gauge their performance and assess their
 * achievements.
 */
export function GameOverComponent() {
  const { timeSpentInSeconds, cardsFlipCount, lastOpenedCardType } =
    useContext(GameStateContext);
  const { averageCardFlipsCount, averageTimeSpentInSeconds } =
    useContext(StatisticContext);

  const headerMessage = useRef(getRandomCongratulation());
  const lastCardType = cardImageMap.get(lastOpenedCardType.value);

  return (
    <ModalComponent title={headerMessage.current} className="game-over">
      <div class="game-over__last-card">
        <img
          class="game-over__last-card-image"
          src={lastCardType}
          alt="animal card"
        />
      </div>

      <PanelComponent title="Time spent in seconds">
        <KeyValueListComponent>
          <KeyValueComponent
            name="This game:"
            value={timeSpentInSeconds.value}
          />
          <KeyValueComponent
            name="Your average:"
            value={averageTimeSpentInSeconds.value}
          />
        </KeyValueListComponent>
      </PanelComponent>

      <PanelComponent title="Card flips count">
        <KeyValueListComponent>
          <KeyValueComponent name="This game:" value={cardsFlipCount.value} />
          <KeyValueComponent
            name="Your average:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </PanelComponent>
    </ModalComponent>
  );
}
