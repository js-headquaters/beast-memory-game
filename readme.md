# BeastMemory

**Welcome to BeastMemory!** 🧠🐾

There are two readme files: README.md & DEVELOPMENT.md. The README.md one contains all the info about the game, and the DEVELOPMENT.md is a deep dive into the technical details.

**BeastMemory** is a mysterious memory card game adorned with enigmatic and otherworldly animal spirits, perfect for all ages and an excellent tool for enhancing memory skills.

**Key Features:**

- **Enchanting and Otherworldly Beasts 🐾**
  Delve into a realm filled with mystical and captivating creatures that are shrouded in an aura of magic.
- **Bewitching Experience for All Ages 🌟**
  An ethereal adventure that binds both young and old, making it the perfect activity for gatherings under the moonlit night.
- **Enhances Memory 🧠**
  Traverse this spectral journey, refining concentration, focus, and the ability to recollect ancient incantations and spells.

🎮 **Play Now**:

- [Telegram WebApp](https://t.me/BeastMemoryBot/game), click on the link or find our bot in Telegram `@BeastMemoryBot`
- [Web](https://js-headquaters.github.io/beast-memory-game/), remember that the application was developed for mobile devices and to operate within the context of Telegram

Embark on your journey of fun and cognitive enhancement with BeastMemory today!

## Table of Contents

1. [Running BeastMemory Locally](#running-beastmemory-locally)
2. [Game Concept](#game-concept)
3. [Feedback on Developing Telegram's WebApp](#feedback-on-developing-telegrams-webapp)

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

## Feedback on Developing Telegram's WebApp

### What We Appreciated

- Telegram's client uses modern webViews, which lets developers use the newest JS features without worries about compatibility.
- The "@twa-dev/types" package is very useful. It gives types for WebApp features and acts like a guide or reference.
- The WebApp API is easy to understand and use.
- The Telegram beta version has dev tools, making it easier to find and fix problems.
- Working with the WebApp was free of big problems. It felt like building a regular web site.

### Challenges Encountered

- We had some issues with cloud storage speed in the Telegram beta for macOS.
- Changing the style of the main and back buttons mainly uses JS, so we couldn't fully use CSS variables for theming
- The main button doesn't know HEX8 colors. We had to think of other ways to choose colors.
- To make sure everything works, we checked our designs in Safari. Looks like the macOS Telegram client uses Safari's engine.
- From tests with friends, we found that the Haptic Feedback doesn't always work. Some said they didn't feel any vibration.
