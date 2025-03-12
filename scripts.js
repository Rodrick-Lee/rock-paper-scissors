function getComputerChoice() {
    const game = ["rock", "paper", "scissors"]
    let computerChoice = Math.floor((Math.random() * 3))
    return game[computerChoice]

}

function getHumanChoice() {
    let humanChoice = prompt("Choice rock-paper-scissors: ",)
    return humanChoice.toLocaleLowerCase().trim()
}

function playRound(computerScore, humanScore, humanChoice, computerChoice) {
    if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            console.log("You win! Paper beats Rock")
            humanScore++;
        } else if (humanChoice == "scissors") {
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        } else {
            console.log("It's a tie - Rock")
        }
    } else if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            console.log("You lose! Paper beats Rock")
            computerScore++;
        } else if (humanChoice == "scissors") {
            console.log("You win! Scissors beats Paper")
            humanScore++;
        } else {
            console.log("It's a tie - Paper")
        }
    }
    else {
        if (humanChoice == "paper") {
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        } else if (humanChoice == "rock") {
            console.log("You win! Rock beats Scissors")
            humanScore++;
        } else {
            console.log("It's a tie - Scissors")
        }
    }
    console.log(`Computer Score: ${computerScore} - You Score: ${humanScore}`)
    return {computerScore, humanScore}
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const scores = playRound(computerScore, humanScore, humanSelection, computerSelection);
        computerScore = scores.computerScore
        humanScore = scores.humanScore;
    }
    console.log(`Final Score - Computer: ${computerScore}, You: ${humanScore}`);
}

playGame()

