# BeastMemory

**Welcome to BeastMemory!** 🧠🐾

**BeastMemory** is a delightful memory card game with colorful and adorable animal characters, perfect for all ages and an excellent tool for enhancing memory skills.

**Key Features:**

- **Colorful and Adorable Animals 🐾**
  Immerse in the vibrant world of cute and diverse creatures.

- **Suitable for All Ages 🌟**
  Universal fun for everyone, perfect for family game time.

- **Enhances Memory 🧠**
  A joyful journey that improves concentration, focus, and cognitive function.

🎮 **Play Now**:

- [Telegram WebApp](https://t.me/BeastMemoryBot/game)
- [Website](https://js-headquaters.github.io/beast-memory-game/)

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

**BeastMemory** is a memory card game designed to effectively enhance memory skills. It meticulously combines captivating animal artwork with gameplay intricacies to ensure a delightful and mentally stimulating experience.

### 🃏 Gameplay

Players embark on a quest to match pairs of cards, with the game’s complexity adjustable by varying the number of card pairs.

### 🎨 Aesthetic Appeal

Utmost importance is placed on vibrant and appealing animal arts, ensuring sustained user engagement and enjoyment.

### 📊 Feedback and Encouragement

Post-game, players receive timely feedback, including the time taken to complete a level and an uplifting message if their performance improves. This immediate response fuels motivation and the ambition to advance.

### 📈 Performance Monitoring

Attention is also given to track the excess openings made by a user, indicating cards that have been previously revealed, aiding in self-assessment and improvement. However, maintaining a positive and encouraging environment is paramount. Thus, only the time taken is displayed in cases of lesser performance, avoiding any discouragement or negative feedback.

Through these thoughtfully implemented features and mechanisms, **BeastMemory** stands as a cherished tool for augmenting memory, while assuring an entertaining and positive gaming encounter.

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

## TODO

- clean code
- clean styles
- clean readme
- add more data to readme
- new design for game over screen
- new design for game statistic screen
- game history table for statistic screen

## Useful

- main button is always visible
- main button color is not support hex8
