# 🎲 Pick Game

> A modern, interactive 2-player dice game built with Vanilla JavaScript and Tailwind CSS.

!["Pick Game" Demo](/public/assets/gameplay.gif)

## 🔗 Links

- **🔴 Live Demo:** [https://app.netlify.com/projects/pick-game-project/overview]
- **📂 Repository:** [https://github.com/StefanIacob14/pick-game-project]

# 🧐 Overview

**Pick Game** is a strategic browser-based game where two players compete to reach the maximum score. While this is based on the classic "Pig Game" mechanics, I re-engineered the project to focus on **MODERN DEVELOPMENT TOOLING** (Vite) and **ACCESSIBILITY**. I wanted to create a seamless local multiplayer experience, where players aren't fighting over the mouse, so I implemented **DUAL-INPUT CONTROLS (Keyboard & Mouse)**.

## 🛠 Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/) - Chosen for its lightning-fast HMR (Hot Module Replacement) and optimized build process, compared to standard CRA.
- **Core:** [Vanilla JavaScript (ES6+)](https://javascript.info/) - No framework, just pure logic and DOM Manipulation.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Used for rapid, utility-first styling to create a clean UI.
- **Markup:** [HTML5]

## ✨ Key Features

- **🕹 Dual Control Support:** Unique to this version, Player 1 and Player 2 can play simultaneously, using keyboard shortcuts (there's no need to pass the mouse anymore).
- **📖 Build-in Rules Modal:** A clean overlay explanation for new players.
- **🥇 Option to choose the winning score:** Players have the option to choose the maximum score for the round, before the game actually starts. They can choose from the options: 25, 50, 75 and 100 points.
- **🏆 Victory State:** A dedicated winning screen triggers visual cues and a specific state where players can't interact with the main buttons anymore.
- **⚡ Instant Reset:** The game state can be re-initialized immediately, without reloading the page.

## 🧠 Technical Challenges & Solutions

| Challenge | How I Solved It |

**Import Assets From the "src" Folder:**

- _The Problem:_ Images for this project are located in the "src" folder, for Vite to optimize them. Because the "src" folder is not the "root" directory, I had to find a way to use the images.
- _The Solution:_ I have used the `import.meta.glob` variable, with `eager` set to `true` and `import` set to `default`, where I have set the path to the images: `/src/assets/images/dice-*.png`.

**Import the Images Dynamically:**

- _The Problem:_ Import the images, where each image represent one dice's face, dynamically to the game UI, according to the generated number.
- _The Solution:_ I have used the **Dynamic Template Literals** to import the corresponding image to the game (ex: "dice.src = diceImages[`/src/assets/images/dice-${secretNumber}.png`]").

**Active Player Switching:**

- _The Problem:_ Switching the players's access to the game, visual indicator for the active player and ensuring points were added to the correct array.
- _The Solution:_ I used a **Ternary Operator** to toggle a `activePlayer` vatiable (0 or 1). I then used **Dynamic Template Literals** (ex: `current--${activePlayer}`) to target the correct DOM element dynamically, rather than writing separate logic for Player 1 and Player 2.

**State Management:**

- _The Problem:_ After the active player win the game, they shouldn't be able to play it anymore, just resetting it and start a new round.
- _The Solution:_ I have implemented a **State Variable** (ex: "let playing = true;") and used its `true` value for the game in an general **If / Else Statement** and changed the value to `false` and used it in the "Winning Scenario", to block the access to the main buttons.

**Resetting the Game:**

- _The Problem:_ Resetting the game initially required rewriting code to manually set every value back to 0 or to the default version from the HTML5 code.
- _The Solution:_ To implement the **DRY (Don't Repeat Yourself) Principle**, I have used the `window.location.reload()` method, which is more convenient and give the option to reload the page without pressing the browser's reload button or pressing the combination "CTRL + R".

# 🚀 Getting Started Locally

Since this project uses **Vite**, the setup is slightly different than a standard HTML file:

1. **Clone the repository:**
   `git clone [https://github.com/StefanIacob14/pick-game-project.git]`
2. **Navigate to the folder:**
   `cd pick-game-project`
3. **Install dependencies:**
   `npm install`
4. **Run the Development Server:**
   `npm run dev`

# 🔮 Future Improvements

- **Mobile Responsiveness:** Currently refactoring the game's design and optimizing the Tailwind CSS classes to implement the responsiveness for all device's screen sizes.

- **Sound Effects:** Adding audio cues for dice rolls ("Roll the dice") button and for winning screen.

# 👤 Contact

**Stefan-Bogdan IACOB** - [LinkedIn](https://www.linkedin.com/in/stefan-bogdan-iacob/) - 📧 Email: biacob973@gmail.com
