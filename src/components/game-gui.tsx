import {
  getCurrentPlatform,
  getCurrentTheme,
  getCurrentUser,
} from "@utils/telegram.utils";

export function GameGUIComponent() {
  return (
    <div class="controls">
      <span>p:</span>
      <span>{getCurrentPlatform()}</span>
      <span>t:</span>
      <span>{getCurrentTheme()}</span>
      <span>u:</span>
      <span>{getCurrentUser()}</span>
    </div>
  );
}
