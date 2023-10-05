import { GameTheme, GameThemeProperties } from "@interfaces/index";
import { computed, effect, signal } from "@preact/signals";
import {
  getMainButton,
  getWebApp,
  getWebAppTheme,
} from "@utils/telegram.utils";

const lightTheme: GameThemeProperties = {
  themeBackground: "rgba(234, 231, 242, 1)",
  themeModalBackground: "rgba(255, 255, 255, 0.8)",
  themePrimaryColor: "rgba(110, 72, 170, 1)",
  themeAccentColor: "rgba(148, 0, 211, 0.48)",
  themeButtonBackground: "rgba(181, 161, 214, 1)",
  themeTextMainColor: "rgba(20, 12, 33, 1)",
  themeTextHighlightColor: "rgba(75, 0, 130, 1)",
  themeShadowColor: "rgba(148, 0, 211, 0.33)",
  themeBorderColor: "rgba(110, 72, 170, 0.53)",
};

const darkTheme: GameThemeProperties = {
  themeBackground: "rgba(20, 12, 33, 1)",
  themeModalBackground: "rgba(30, 0, 60, 1)",
  themePrimaryColor: "rgba(110, 72, 170, 1)",
  themeAccentColor: "rgba(148, 0, 211, 1)",
  themeButtonBackground: "rgba(75, 0, 130, 1)",
  themeTextMainColor: "rgba(224, 191, 254, 1)",
  themeTextHighlightColor: "rgba(255, 204, 255, 1)",
  themeShadowColor: "rgba(206, 2, 255, 0.67)",
  themeBorderColor: "rgba(206, 2, 255, 0.67)",
};

export class GameThemeService {
  readonly theme = signal<GameTheme>(getWebAppTheme());
  readonly themeProperties = computed(() => {
    return this.theme.value === "light" ? lightTheme : darkTheme;
  });
  private readonly mainButton = getMainButton();
  private readonly webApp = getWebApp();

  constructor() {
    effect(() => {
      const { themeAccentColor, themeTextMainColor } =
        this.themeProperties.value;

      this.mainButton.setParams({
        text_color: themeTextMainColor,
        color: themeAccentColor,
      });
      this.applyTheme(this.themeProperties.value);
    });

    this.webApp.onEvent("themeChanged", () => {
      this.setTheme(getWebAppTheme());
    });
  }

  setTheme = (theme: GameTheme) => {
    this.theme.value = theme;
  };

  toggleTheme = () => {
    this.theme.value = this.theme.value === "light" ? "dark" : "light";
  };

  private applyTheme(themeProperties: GameThemeProperties) {
    const root = document.documentElement;
    for (const [key, value] of Object.entries(themeProperties)) {
      const cssVarName = `--${this.camelToKebab(key)}`;
      root.style.setProperty(cssVarName, value);
    }
  }

  private camelToKebab(str: string): string {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
  }
}
