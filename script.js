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


// The function takes the user choice and returns it.
function getHumanChoice() {
    return prompt("Let's play Rock, Paper, Scissors! Type your choice: rock, paper, or scissors.");
}


// The function that takes the human and computer player choices as arguments, 
// plays a single round, increments the round winner’s score and logs a winner announcement.
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        return "human";
    } else if (humanChoice === computerChoice) {
        console.log(`Draw! Your choice ${humanChoice}, computer choice ${computerChoice}`);
        return;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "computer";
    }
}


function displayFinalResult(humanScore, computerScore) {
    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log(`You won! ${humanScore} : ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose! ${computerScore} : ${humanScore}`);
    } else {
        console.log(`Draw! ${humanScore} : ${computerScore}`);
    }
}


// The function calls playRound() to play 5 rounds, keeps track of the scores and declares 
// a winner at the end.
function playGame() {
    // Player score variables.
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log(`Match score: ${humanScore} : ${computerScore}`);
    }

    displayFinalResult(humanScore, computerScore);
}

playGame();