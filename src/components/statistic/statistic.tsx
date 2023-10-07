import { CardComponent } from "@components/shared/card/card";
import { KeyValueComponent } from "@components/shared/key-value-list/key-value";
import { KeyValueListComponent } from "@components/shared/key-value-list/key-value-list";
import { ModalComponent } from "@components/shared/modal/modal";
import { ValueSelectorComponent } from "@components/shared/value-selector/value-selector";
import { computed, signal } from "@preact/signals";
import { getWebAppData } from "@utils/telegram.utils";
import { useContext } from "preact/compat";
import {
  GameStateContext,
  StatisticContext,
  ThemeContext,
} from "../../interfaces/context";
import { HistoryComponent } from "./history/history";
import "./statistic.css";

const debugClickCount = signal(0);
const isDebugActive = computed(() => {
  return debugClickCount.value > 3;
});

export function StatisticComponent() {
  const {
    averageCardFlipsCount,
    averageTimeSpentInSeconds,
    gameLevelForStatistic,
    increaseStatisticLevel,
    decreaseStatisticLevel,
    resetStatistics,
    currentLevelStatistic,
  } = useContext(StatisticContext);
  const { toggleTheme, theme } = useContext(ThemeContext);
  const {
    increaseLevel,
    decreaseLevel,
    gameLevel,
    showDebugInfo,
    toggleShowDebugInfo,
  } = useContext(GameStateContext);

  return (
    <ModalComponent
      title="Statistic"
      className="statistic"
      onTitleClick={() => {
        debugClickCount.value += 1;
      }}
    >
      {isDebugActive.value && (
        <CardComponent title="Settings">
          <KeyValueListComponent>
            <div>Current Level:</div>
            <ValueSelectorComponent
              value={gameLevel.value}
              increase={increaseLevel}
              decrease={decreaseLevel}
            />
            <div>Theme:</div>
            <ValueSelectorComponent
              value={theme.value}
              increase={toggleTheme}
              decrease={toggleTheme}
            />
            <div>Show debug info:</div>
            <ValueSelectorComponent
              value={showDebugInfo.value ? "Yes" : "No"}
              increase={toggleShowDebugInfo}
              decrease={toggleShowDebugInfo}
            />
            <button class="statistic__reset-button" onClick={resetStatistics}>
              Reset Statistic
            </button>
          </KeyValueListComponent>
        </CardComponent>
      )}

      <CardComponent title="Show data for level">
        <ValueSelectorComponent
          className="statistic__level-selector"
          value={gameLevelForStatistic.value}
          increase={increaseStatisticLevel}
          decrease={decreaseStatisticLevel}
        />
      </CardComponent>

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
        <HistoryComponent
          level={gameLevelForStatistic.value}
          gameStatistic={currentLevelStatistic.value}
        />
      </CardComponent>

      {showDebugInfo.value && (
        <CardComponent title="Debug Info">
          <div className="statistic__debug">{getWebAppData()}</div>
        </CardComponent>
      )}
    </ModalComponent>
  );
}