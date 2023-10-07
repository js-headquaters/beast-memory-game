import { GameLevel, GameStatistic } from "@interfaces/index";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { Fragment } from "preact/compat";
import "./history.css";

type Props = {
  gameStatistic: GameStatistic[];
  level: GameLevel;
};

export function HistoryComponent({ gameStatistic, level }: Props) {
  const length = gameStatistic.length;

  if (length === 0) {
    return (
      <div>No data for {level} level, play more games to see game history </div>
    );
  }

  return (
    <div class="history">
      <div class="history__cell">№</div>
      <div class="history__cell">Time</div>
      <div class="history__cell">Flips</div>
      {gameStatistic?.map(({ timeSpentInSeconds, cardFlipsCount }, index) => (
        <Fragment>
          <div class="history__cell">{length - index}</div>
          <div class="history__cell">{timeSpentInSeconds}</div>
          <div class="history__cell">{cardFlipsCount}</div>
        </Fragment>
      ))}
    </div>
  );
}
