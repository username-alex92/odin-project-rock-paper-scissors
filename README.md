# odin-project-rock-paper-scissors

This is a simple browser-based implementation of the classic **Rock, Paper, Scissors** game using HTML and JavaScript. The player competes against the computer until one reaches 5 wins, with all results displayed on the screen.

## 📁 Project Structure

- `index.html` — Main HTML file that loads the game in the browser.
- `script.js` — JavaScript file containing all game logic.

## 🎮 How to Play

1. Open `index.html` in your browser.
2. Choose rock, paper, or scissors by clicking the corresponding button on the screen..
3. The computer randomly selects its choice.
4. The result of each round is displayed on the screen.
5. The game continues until either the player or the computer achieves 5 wins. The final score is then displayed.

## ⚙️ Main Functions in `script.js`

2. **`getComputerChoice()`** — Generates a random choice for the computer.
3. **`playRound(humanChoice, computerChoice)`** — Contains logic for one round.
4. **`displayFinalResult(humanScore, computerScore)`** — Displays the final outcome after all rounds.
5. **`resetGame()`** — Resets the game state and scores to start a new match.