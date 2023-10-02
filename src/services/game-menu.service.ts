import { signal } from "@preact/signals";
import { getBackButton, getMainButton } from "@utils/telegram.utils";

export class GameMenuService {
  readonly isMenuOpen = signal(false);
  readonly mainButton = getMainButton();

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

  private openMenu() {
    this.isMenuOpen.value = true;
    this.mainButton.setText("Close");
  }

  private closeMenu() {
    this.isMenuOpen.value = false;
    this.mainButton.setText("Menu");
  }
}
