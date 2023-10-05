import {BackButton, MainButton, WebApp, WebAppUser} from "@twa-dev/types";

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

export class Storage {
  static hasTelegramAPI() {
    return !!window.Telegram?.WebApp?.CloudStorage && window.Telegram.WebApp.isVersionAtLeast('6.9');
  }

  static async setItem(key, value): Promise<boolean> {
    if (!Storage.hasTelegramAPI()) {
      localStorage.setItem(key, value)
      return;
    }

    return new Promise((resolve, reject) => {
      window.Telegram.WebApp.CloudStorage.setItem(key, value, (err, isStored) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(isStored);
      });
    })
  }

  static async getItem(key): Promise<string | undefined> {
    if (!Storage.hasTelegramAPI()) {
      return localStorage.getItem(key);
    }

    return new Promise((resolve, reject) => {
      window.Telegram.WebApp.CloudStorage.getItem(key, (err, value) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(value)
      })
    });
  }
}
