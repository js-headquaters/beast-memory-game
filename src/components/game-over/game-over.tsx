import { useSignal } from "@preact/signals";
import { CardComponent } from "@components/shared/card/card";
import { KeyValueComponent } from "@components/shared/key-value-list/key-value";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { getRandomCongratulation } from "@utils/text.utils";
import { useContext, useRef, useState } from "preact/compat";
import { GameStateContext, StatisticContext } from "../../interfaces/context";
import "./game-over.css";
import { ModalComponent } from "@components/shared/modal/modal";

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
      </CardComponent>

      <CardComponent title="Card Flips Count">
        <KeyValueListComponent>
          <KeyValueComponent name="This Game:" value={cardsFlipCount.value} />
        </KeyValueListComponent>
        <KeyValueListComponent>
          <KeyValueComponent
            name="You Average:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </CardComponent>
    </ModalComponent>
  );
}
