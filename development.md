## Technology Stack

During the development of **BeastMemory**, we adhered to the following principles:

- **Developer-Friendly**: The development process should be convenient and understandable for most developers.
- **Easy Auto-Deploy**: Application should auto-deploy on push, without additional setup.
- **Fast Loading**: The application should load as quickly as possible to enhance the user experience.

### Framework: Preact

Given these principles, we chose [Preact](https://preactjs.com/) as the main framework for its notable advantages:

- **Small Size**: Ensures fast application loading and quick browser parsing.
- **Reactive System**: Allows easy description of complex interactions.
- **Similarity to React**: Familiarity for most developers as React is an industry standard.
- **Fast Rebuilding with Vite**: Practically instantaneous, enhancing developer experience.

### Deployment: GitHub Pages

For deployment, we selected [GitHub Pages](https://pages.github.com/) since our game does not require server interactions. GitHub Pages offers us:

- **Effortless Deployment**: Avoid the hassle of VPS rental and HTTPS certificate setup.
- **Automatic Deployment**: On repository push, thanks to [GitHub Actions](https://github.com/features/actions), keeping the game updated is seamless.

The deployment script can be found [here](.github/workflows/deploy.yml).

By choosing these technologies and platforms, we ensure an efficient, enjoyable, and productive development and gaming experience with **BeastMemory**.

## Dive into Project Details

### Let's Get Started: Simple Steps

If you're just diving in, here’s the quick path:

1. **Understand the Game Mechanics**: Start with [`GameStateService`](src/services/game-state.service.ts).
2. **See the Game**: Jump to [`GameFieldComponent`](src/components/game-field/game-field.tsx) and see how it comes alive.
3. **Explore Individual Elements**: Visit [`GameCardComponent`](src/components/game-field/game-card/game-card.tsx) to understand how each card flips and interacts.

### Services

Now, let's peel back the layers and see what makes our game tick in the background:

- **[`GameStateService`](src/services/game-state.service.ts)**: The maestro of our game, orchestrating everything that happens, from the shuffle of the cards to what happens when a pair is matched.
- **[`StatisticService`](src/services/statistic.service.ts)**: This service acts as the game's memory, storing data from previous games and calculating average statistics for overall performance.
- **[`ThemeService`](src/services/theme.service.ts)**: This service helps switch themes. It keeps the current theme's details and sets the right CSS for the whole game, making sure it looks good.

### Components

And now, let's have a closer look at our game's visible parts:

- **[`GameFieldComponent`](src/components/game-field/game-field.tsx)**: This component manages the main game layout. It organizes and adjusts the game field to display all cards optimally based on screen size.
- **[`GameCardComponent`](src/components/game-field/game-card/game-card.tsx)**: Represents an individual game card. Handles card flipping animation and displays the card's front and back designs.
- **[`GameOverComponent`](src/components/game-over/game-over.tsx)**: Displayed after the game ends. It presents the end-of-game statistics.
- **[`StatisticComponent`](src/components/statistic/statistic.tsx)**: Provides an overview of previous game results and displays average gameplay statistics.
