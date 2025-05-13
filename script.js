let humanScore = 0;
let computerScore = 0;
let result;

const rockSelection = document.createElement("button");
rockSelection.textContent = "Rock";
const paperSelection = document.createElement("button");
paperSelection.textContent = "Paper";
const scissorsSelection = document.createElement("button");
scissorsSelection.textContent = "Scissors";

const buttons = document.createElement("div");
const roundResult = document.createElement("div");

let runningScore = document.createElement("div");
runningScore.textContent = `Player ${humanScore} : ${computerScore} Computer`;

document.body.appendChild(buttons);
buttons.appendChild(rockSelection);
buttons.appendChild(paperSelection);
buttons.appendChild(scissorsSelection);
document.body.appendChild(roundResult);
document.body.appendChild(runningScore);

buttons.addEventListener("click", (event) => {
    let choice = event.target.textContent;
    result = playRound(choice, getComputerChoice());

    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    runningScore.textContent = `Player ${humanScore} : ${computerScore} Computer`;

    if (humanScore === 5 || computerScore === 5) {
        resetDisplay();
    }
});

// The function randomly returns “rock”, “paper” or “scissors”.
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// The function that takes the human and computer player choices as arguments, 
// plays a single round, increments the round winner’s score and logs a winner announcement.
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        roundResult.textContent = `You won, ${humanChoice} beats ${computerChoice}`;
        return "human";
    } else if (humanChoice === computerChoice) {
        roundResult.textContent = `Draw, your choice ${humanChoice}, computer choice ${computerChoice}`;
        return "draw";
    } else {
        roundResult.textContent = `You lose, ${computerChoice} beats ${humanChoice}.`;
        return "computer";
    }
}

function resetDisplay() {
    displayFinalResult(humanScore, computerScore);
    humanScore = 0;
    computerScore = 0;
}

function displayFinalResult(humanScore, computerScore) {
    if (humanScore > computerScore) {
        runningScore.textContent = `Game over! You won! ${humanScore} : ${computerScore}`;
    } else if (computerScore > humanScore) {
        runningScore.textContent = `Game over! You lose! ${humanScore} : ${computerScore}`;
    }
}