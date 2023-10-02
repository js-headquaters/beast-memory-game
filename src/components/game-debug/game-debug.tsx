import { getTelegramData } from "@utils/telegram.utils";
import "./game-debug.css";

export function GameDebugComponent() {
  return <div class="game-debug">{getTelegramData()}</div>;
}
