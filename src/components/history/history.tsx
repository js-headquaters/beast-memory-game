import {GameStatistic} from "@interfaces/index";
import {KeyValueListComponent} from "@components/shared/key-value-list/key-value-list";
import {Fragment} from "preact/compat";

type Props = {
    gameStatistic: GameStatistic[];
};

export function HistoryComponent({ gameStatistic }: Props) {
    return (
        <>
            {gameStatistic.length > 0 ? (
                <KeyValueListComponent>
                    <div>Time</div>
                    <div>Flips</div>
                    {gameStatistic?.map(
                        ({ timeSpentInSeconds, cardFlipsCount }) => (
                            <Fragment>
                                <div>{timeSpentInSeconds}</div>
                                <div>{cardFlipsCount}</div>
                            </Fragment>
                        ),
                    )}
                </KeyValueListComponent>
            ) : (
                <div>No data for this level</div>
            )}
        </>
    );
}
