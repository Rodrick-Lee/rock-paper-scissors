function getComputerChoice() {
    const game = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * 3);
    return game[computerChoice];
}

function playRound(e) {
    let computerChoice = getComputerChoice();
    const humanChoice = e.target.value;
    const result = document.querySelector(".result");
    const score = document.createElement("p");
    const message = document.createElement("p");

    if (computerScore === 5 || humanScore === 5) {
        return;
    }

    if (computerChoice === humanChoice) {
        message.textContent = `It's a tie - ${computerChoice}`;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        message.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    } else {
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }

    score.textContent = `Computer Score: ${computerScore} - You Score: ${humanScore}`;
    result.innerHTML = '';
    result.appendChild(message);
    result.appendChild(score);

    if (computerScore === 5) {
        message.textContent = "You lose the game!";
        result.appendChild(message);
        resetGame();
    } else if (humanScore === 5) {
        message.textContent = "You win the game!";
        result.appendChild(message);
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function playGame() {
    const buttons = document.querySelectorAll(".rock, .paper, .scissors");
    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    });
}

let humanScore = 0;
let computerScore = 0;
playGame();