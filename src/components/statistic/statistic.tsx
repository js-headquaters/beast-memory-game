import { CardComponent } from "@components/shared/card/card";
import { KeyValueComponent } from "@components/shared/key-value-list/key-value";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { ModalComponent } from "@components/shared/modal/modal";
import { ValueSelectorComponent } from "@components/shared/value-selector/value-selector";
import { computed, signal } from "@preact/signals";
import { getWebAppData } from "@utils/telegram.utils";
import { Fragment, useContext } from "preact/compat";
import {
  GameStateContext,
  StatisticContext,
  ThemeContext,
} from "../../interfaces/context";
import "./statistic.css";

const debugClickCount = signal(0);
const isDebugActive = computed(() => {
  return debugClickCount.value > 3;
});

const incrementDebugClickCount = () => {
  debugClickCount.value += 1;
};

export function StatisticComponent() {
  const {
    averageCardFlipsCount,
    averageTimeSpentInSeconds,
    gameLevel,
    increaseStatisticLevel,
    degreesStatisticLevel,
    currentLevelStatistic,
  } = useContext(StatisticContext);
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <ModalComponent title="Statistic" className="statistic">
      {isDebugActive.value && (
        <CardComponent title="Settings">
          <KeyValueListComponent>
            <div>Theme:</div>
            <ValueSelectorComponent
              value={theme.value}
              increase={toggleTheme}
              degrees={toggleTheme}
            />
          </KeyValueListComponent>
        </CardComponent>
      )}

      <div onClick={incrementDebugClickCount}>Choose level for statistic</div>
      <ValueSelectorComponent
        className="statistic__level-selector"
        value={gameLevel.value}
        increase={increaseStatisticLevel}
        degrees={degreesStatisticLevel}
      />

      <CardComponent title="Game Statistic">
        <KeyValueListComponent>
          <KeyValueComponent
            name="Average Time:"
            value={averageTimeSpentInSeconds.value}
          />
          <KeyValueComponent
            name="Average Flips:"
            value={averageCardFlipsCount.value}
          />
        </KeyValueListComponent>
      </CardComponent>

      <CardComponent title="Game history">
        {currentLevelStatistic.value.length > 0 ? (
          <KeyValueListComponent>
            <div>Time</div>
            <div>Flips</div>
            {currentLevelStatistic.value?.map(
              ({ timeSpentInSeconds, cardFlipsCount }) => (
                <Fragment>
                  <div>{timeSpentInSeconds}</div>
                  <div>{cardFlipsCount}</div>
                </Fragment>
              )
            )}
          </KeyValueListComponent>
        ) : (
          <div>No data for this level</div>
        )}
      </CardComponent>

      {isDebugActive.value && (
        <CardComponent title="Debug Info">
          <div class="statistic__debug">{getWebAppData()}</div>
        </CardComponent>
      )}
    </ModalComponent>
  );
}
