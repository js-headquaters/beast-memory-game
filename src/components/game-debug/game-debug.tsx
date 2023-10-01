import { DebugContext } from "@services/debug.service";
import { useContext } from "preact/hooks";
import "./game-debug.css";

export function GameDebugComponent() {
  const { isDebugModeActive, getTelegramData } = useContext(DebugContext);

  return (
    <div class="game-debug">{isDebugModeActive.value && getTelegramData()}</div>
  );
}
