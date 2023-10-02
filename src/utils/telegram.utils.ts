import { BackButton, MainButton, WebAppUser } from "@twa-dev/types";

export function getWebAppUser(): WebAppUser | undefined {
  return window.Telegram.WebApp.initDataUnsafe?.user;
}

export function getMainButton(): MainButton {
  return window.Telegram.WebApp.MainButton;
}

export function getBackButton(): BackButton {
  return window.Telegram.WebApp.BackButton;
}

export function getTelegramData(): string {
  return JSON.stringify(window.Telegram, null, 2);
}

export function isRunningInTelegram(): boolean {
  return window.Telegram.WebApp.platform !== "unknown";
}
