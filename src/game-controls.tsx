import { useSignal } from "@preact/signals";
import { useContext } from "preact/hooks";
import { GameStateContext } from "./game-state.service";
import { GameDifficulty } from "./types";

export function GameControlsComponent() {
  const gameState = useContext(GameStateContext);

  const gameDifficulty = useSignal<GameDifficulty>(3);

  const handleClick = () => {
    gameState.start(gameDifficulty.value);
  };

  const handleDifficultyChange = (event) => {
    gameDifficulty.value = Number(event.target.value) as GameDifficulty;
  };

  return (
    <div class="controls">
      <span>Difficulty: </span>
      <select value={gameDifficulty.value} onChange={handleDifficultyChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={handleClick}>new game</button>
    </div>
  );
}
