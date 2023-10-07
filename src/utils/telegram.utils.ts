import {
  BackButton,
  CloudStorage,
  HapticFeedback,
  MainButton,
  WebApp,
  WebAppUser,
} from "@twa-dev/types";

// TODO don't we want to output user somehow?
export function getWebAppUser(): WebAppUser | undefined {
  return window.Telegram.WebApp.initDataUnsafe?.user;
}

export function getMainButton(): MainButton {
  return window.Telegram.WebApp.MainButton;
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

export function hasStorageApi(): boolean {
  return (
    !!window.Telegram?.WebApp?.CloudStorage &&
    window.Telegram.WebApp.isVersionAtLeast("6.9")
  );
}

export function setItemToCloudStorage(
  ...args: Parameters<CloudStorage["setItem"]>
) {
  return window.Telegram.WebApp.CloudStorage.setItem(...args);
}

export function getItemFromCloudStorage(
  ...args: Parameters<CloudStorage["getItem"]>
) {
  return window.Telegram.WebApp.CloudStorage.getItem(...args);
}

export function getHapticFeedback(): HapticFeedback {
  return window.Telegram.WebApp.HapticFeedback;
}
