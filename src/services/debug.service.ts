import { signal } from "@preact/signals";
import { createContext } from "preact";

export class DebugService {
  readonly isDebugModeActive = signal(false);

  getTelegramData(): string {
    return JSON.stringify(window.Telegram, null, 2);
  }

  toggleDebugMode = () => {
    this.isDebugModeActive.value = !this.isDebugModeActive.value;
  };
}

export const DebugContext = createContext<DebugService>(null);
