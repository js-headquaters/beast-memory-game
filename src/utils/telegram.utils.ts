import { WebApp, WebAppInitData } from "@twa-dev/types";

export function getCurrentTheme(): WebApp["colorScheme"] {
  return window.Telegram.WebApp.colorScheme;
}

export function getCurrentPlatform(): WebApp["platform"] {
  return window.Telegram.WebApp.platform;
}

export function getCurrentUser(): WebAppInitData["user"] {
  return window.Telegram.WebApp.initDataUnsafe.user;
}

export function setReady() {
  return window.Telegram.WebApp.ready();
}
