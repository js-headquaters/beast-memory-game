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

- [Telegram WebApp](t.me/BeastMemoryBot/gamee)
- [Website](https://js-headquaters.github.io/beast-memory-game/)

Embark on your journey of fun and cognitive enhancement with BeastMemory today!

## Running BeastMemory Locally 🏠

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

## Technology Stack 🛠️

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

- [ ] Create game GUI prototype
- [ ] Add game config
- [ ] Add telegram theme support. Not sure if better to use css vars or data from https://core.telegram.org/bots/webapps#themeparams . Not sure if data is always available. Also, better to have some theme if app open by link (not in webapp context)
- [ ] Use cloud storage and save user statistic here
- [ ] Explore methods to increase difficulty levels
- [ ] Add new high quality assets
- [ ] Make responsive design for game field
- [ ] Make better card design
- [ ] Add menu button that opens popup with statistic, setting and etc
- [ ] Add game time and errors count (user already knows where pair card located but open other card)
- [ ] Add game over screen with game time, error counts, and buttons: play again, raise difficulty
