import { computed, effect, signal } from "@preact/signals";
import { getMainButton } from "@utils/telegram.utils";

export const MENU_BUTTON_CLOSED_TEXT = "Menu";
export const MENU_BUTTON_OPENED_TEXT = "Close";

export class GameMenuService {
  readonly isMenuOpen = signal(false);
  readonly isMenuButtonVisible = signal(true);
  private readonly debugClickCount = signal(0);
  private readonly mainButton = getMainButton();

  readonly isDebugActive = computed(() => {
    return this.debugClickCount.value > 3;
  });

  constructor() {
    this.mainButton.onClick(this.toggleMenu);

    effect(() => {
      const text = this.isMenuOpen.value
        ? MENU_BUTTON_CLOSED_TEXT
        : MENU_BUTTON_OPENED_TEXT;
      this.mainButton.setText(text);
    });

    effect(() => {
      if (this.isMenuButtonVisible.value) {
        this.mainButton.show();
      } else {
        this.mainButton.hide();
      }
    });
  }

  toggleMenu = () => {
    this.isMenuOpen.value = !this.isMenuOpen.value;
  };

  hideMenu = () => {
    this.isMenuButtonVisible.value = false;
  };

  showMenu = () => {
    this.isMenuButtonVisible.value = true;
  };

  incrementDebugClickCount = () => {
    this.debugClickCount.value += 1;
  };
}

export const gameMenuService = new GameMenuService();
