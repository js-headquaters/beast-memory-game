import { GameStatistic } from "@interfaces/index";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { Fragment } from "preact/compat";

type Props = {
  gameStatistic: GameStatistic[];
};

export function HistoryComponent({ gameStatistic }: Props) {
  if (gameStatistic.length === 0) {
    return <div>No data for this level</div>;
  }

  return (
    <Fragment>
      <KeyValueListComponent>
        <div>Time</div>
        <div>Flips</div>
        {gameStatistic?.map(({ timeSpentInSeconds, cardFlipsCount }) => (
          <Fragment>
            <div>{timeSpentInSeconds}</div>
            <div>{cardFlipsCount}</div>
          </Fragment>
        ))}
      </KeyValueListComponent>
    </Fragment>
  );
}
