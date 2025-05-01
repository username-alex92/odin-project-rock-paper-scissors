# odin-project-rock-paper-scissors

This is a simple browser-based implementation of the classic **Rock, Paper, Scissors** game using HTML and JavaScript. The player competes against the computer over five rounds, with results shown in the browser console.

## 📁 Project Structure

- `index.html` — Main HTML file that loads the game in the browser.
- `script.js` — JavaScript file containing all game logic.

## 🎮 How to Play

1. Open `index.html` in your browser.
2. For each of the 5 rounds, the program will prompt you to enter one of the following: `rock`, `paper`, or `scissors` (via `prompt()`).
3. The computer randomly selects its choice.
4. The result of each round is displayed in the **browser console** (`Ctrl+Shift+J` or `F12` → Console tab).
5. After five rounds, the game ends and the final score is shown.

✅ **Note**: Input is **not case-sensitive**. All entries are automatically converted to lowercase using `.toLowerCase()`.

## ⚙️ Main Functions in `script.js`

1. **`getHumanChoice()`** — Prompts the user for input.
2. **`getComputerChoice()`** — Generates a random choice for the computer.
3. **`playRound(humanChoice, computerChoice)`** — Contains logic for one round.
4. **`displayFinalResult(humanScore, computerScore)`** — Displays the final outcome after all rounds.
5. **`playGame()`** — Runs the game loop for five rounds and keeps score.