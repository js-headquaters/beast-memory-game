import { computed, effect, signal } from "@preact/signals";
import { getMainButton } from "@utils/telegram.utils";

export class GameMenuService {
  readonly isMenuOpen = signal(false);
  readonly isMenuButtonVisible = signal(true);
  private readonly debugClickCount = signal(0);
  private readonly mainButton = getMainButton();

  readonly isDebugActive = computed(() => {
    return this.debugClickCount.value > 3;
  });

  readonly menuButtonText = computed(() => {
    return this.isMenuOpen.value ? "Close" : "Menu";
  });

  constructor() {
    this.mainButton.onClick(this.toggleMenu);

    effect(() => {
      this.mainButton.setText(this.menuButtonText.value);
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
