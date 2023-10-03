import { computed, signal } from "@preact/signals";
import { getMainButton } from "@utils/telegram.utils";

export const MENU_BUTTON_CLOSED_TEXT = "Menu";
export const MENU_BUTTON_OPENED_TEXT = "Close";

export class GameMenuService {
  readonly isMenuOpen = signal(false);
  private readonly debugClickCount = signal(0);
  private readonly mainButton = getMainButton();

  readonly isDebugActive = computed(() => {
    return this.debugClickCount.value > 3;
  });

  constructor() {
    this.mainButton.setText("Menu");
    this.mainButton.onClick(this.toggleMenu);
    this.mainButton.show();
  }

  toggleMenu = () => {
    if (this.isMenuOpen.value) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  incrementDebugClickCount = () => {
    this.debugClickCount.value += 1;
  };

  private openMenu() {
    this.isMenuOpen.value = true;
    this.mainButton.setText(MENU_BUTTON_CLOSED_TEXT);
  }

  private closeMenu() {
    this.isMenuOpen.value = false;
    this.mainButton.setText(MENU_BUTTON_OPENED_TEXT);
  }
}

export const gameMenuService = new GameMenuService();
