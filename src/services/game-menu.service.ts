import { signal } from "@preact/signals";
import { getBackButton, getMainButton } from "@utils/telegram.utils";

export class GameMenuService {
  readonly isMenuOpen = signal(false);

  constructor() {
    const mainButton = getMainButton();
    mainButton.setText("Menu");
    mainButton.onClick(this.mainButtonClickHandler);

    const backButton = getBackButton();
    backButton.onClick(this.backButtonClickHandler);
  }

  private mainButtonClickHandler = () => {
    this.isMenuOpen.value = true;
    getBackButton().show();
  };

  private backButtonClickHandler = () => {
    this.isMenuOpen.value = false;
    getBackButton().hide();
  };
}
