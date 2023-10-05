import { GameTheme, GameThemeProperties } from "@interfaces/index";
import { computed, effect, signal } from "@preact/signals";
import {
  getMainButton,
  getWebApp,
  getWebAppTheme,
} from "@utils/telegram.utils";

const lightTheme: GameThemeProperties = {
  themeBackground: "rgba(228, 223, 249, 1)",
  themeModalBackground: "rgba(255, 255, 255, 0.8)",
  themeButtonTextColor: "rgba(255, 255, 255, 1)",
  themeButtonBackground: "rgba(135, 0, 190, 0.5)",
  themeTextMainColor: "rgba(25, 17, 45, 1)",
  themeTextHighlightColor: "rgba(60, 0, 120, 1)",
  themeShadowColor: "rgba(100, 65, 165, 0.6)",
  themeBorderColor: "rgba(100, 65, 165, 0.6)",
};

const darkTheme: GameThemeProperties = {
  themeBackground: "rgba(45, 20, 70, 1)",
  themeModalBackground: "rgba(35, 25, 55, 1)",
  themeButtonTextColor: "rgba(245, 230, 255, 1)",
  themeButtonBackground: "rgba(190, 0, 255, 0.85)",
  themeTextMainColor: "rgba(245, 230, 255, 1)",
  themeTextHighlightColor: "rgba(255, 205, 255, 1)",
  themeShadowColor: "rgba(190, 150, 255, 0.6)",
  themeBorderColor: "rgba(193, 113, 229, 0.5)",
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
      const { themeButtonTextColor, themeButtonBackground } =
        this.themeProperties.value;

      this.mainButton.setParams({
        text_color: themeButtonTextColor,
        color: themeButtonBackground,
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
