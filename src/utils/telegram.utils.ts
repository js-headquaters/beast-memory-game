import { BackButton, MainButton, WebApp, WebAppUser } from "@twa-dev/types";

export function getWebAppUser(): WebAppUser | undefined {
  return window.Telegram.WebApp.initDataUnsafe?.user;
}

export function getMainButton(): MainButton {
  return window.Telegram.WebApp.MainButton;
}

export function getBackButton(): BackButton {
  return window.Telegram.WebApp.BackButton;
}

export function getWebAppData(): string {
  return JSON.stringify(window.Telegram.WebApp, null, 2);
}

export function isRunningInTelegram(): boolean {
  return window.Telegram.WebApp.platform !== "unknown";
}

export function getWebApp(): WebApp {
  return window.Telegram.WebApp;
}

export function getWebAppTheme(): WebApp["colorScheme"] {
  return window.Telegram.WebApp.colorScheme;
}
