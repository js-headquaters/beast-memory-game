# BeastMemory

**Welcome to BeastMemory!** 🧠🐾

**BeastMemory** is a mysterious memory card game adorned with enigmatic and otherworldly animal spirits, perfect for all ages and an excellent tool for enhancing memory skills.

**Key Features:**

- **Enchanting and Otherworldly Beasts 🐾**
  Delve into a realm filled with mystical and captivating creatures that are shrouded in an aura of magic.
- **Bewitching Experience for All Ages 🌟**
  An ethereal adventure that binds both young and old, making it the perfect activity for gatherings under the moonlit night.
- **Enhances Memory 🧠**
  Traverse this spectral journey, refining concentration, focus, and the ability to recollect ancient incantations and spells.

🎮 **Play Now**:

- [Telegram WebApp](https://t.me/BeastMemoryBot/game)
- [Web](https://js-headquaters.github.io/beast-memory-game/)

Embark on your journey of fun and cognitive enhancement with BeastMemory today!

## Table of Contents

1. [Running BeastMemory Locally](#running-beastmemory-locally)
2. [Game Concept](#game-concept)
3. [Technology Stack](#technology-stack)
4. [TODO](#todo)

## Running BeastMemory Locally

Before starting, ensure you have `git` and `Node.js` installed on your machine. If not, you can download and install them from the following links:

- [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Install Node.js](https://nodejs.org/en/)

Follow these simple steps to run BeastMemory on your local machine:

1. **Clone the Repository**
   Start by cloning the project repository by running the following command:

   ```bash
   git clone https://github.com/js-headquaters/beast-memory-game.git
   ```

2. **Install the Dependencies**
   After cloning the repo, navigate to the project directory and install the necessary dependencies with:

   ```bash
   npm ci
   ```

3. **Run the Project**
   Launch the project in development mode with:

   ```bash
   npm run dev
   ```

4. **Access the Project**
   The project will be available at [http://localhost:5173/](http://localhost:5173/).

Enjoy exploring and playing with BeastMemory on your local machine!

## Game Concept

The Memory Card Game is a top-notch tool designed to enhance memory retention. It's a recommended tool for both children and adults, especially those recovering from cognitive impairments such as post-stroke conditions. We realized the gap in the market for a simple, free application of this nature, which inspired us to create this game for the Telegram contest.

**Key Features:**

1. **Daily Trainer:** Designed to be a daily cognitive exercise, the game gradually increases in complexity to challenge and improve your memory.
2. **Progressive Levels:** Start at a beginner's level with 6 cards, and watch the number of cards increase as you advance through the game.
3. **Performance Tracking:** Our game keeps track of your performance statistics, allowing users to monitor and witness their improvement over time.

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

## Project structure

- лучше начать изучение с game state service

## TODO

- clean readme
- add more data to readme

## Useful

- main button is always visible
- main button color is not support hex8
- telegram client on macos uses safari, so better to check layout in safari
