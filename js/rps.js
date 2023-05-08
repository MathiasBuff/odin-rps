let computerScore = 0;
let playerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

for (key in choices) {
    let button = document.querySelector("body").appendChild(document.createElement("button"));
    button.setAttribute("class", "playerSelection");
    button.setAttribute("value", `${choices[key].toLowerCase()}`);
    button.textContent = choices[key];
}

let roundResultDisplay = document.querySelector("body").appendChild(document.createElement("div"));

let scoreDisplay = document.querySelector("body").appendChild(document.createElement("div"));
updateScoreDisplay();

let matchResultDisplay = document.querySelector("body").appendChild(document.createElement("div"));


const buttons = document.querySelectorAll(".playerSelection");
buttons.forEach((button) => {
    console.log(button.value);
    button.addEventListener("click", (event) => {playRound(event.target.value, getComputerChoice());});
})

function updateScoreDisplay() {
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    checkVictory();
}

function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)]
}

function checkVictory() {
    switch (true) {
        case (playerScore < 5 && computerScore < 5): break;
        case (playerScore == 5 && computerScore < 5): {
            matchResultDisplay.textContent = "You Win the Game! Congratulations!";
            break;
        }
        case (computerScore == 5 && playerScore < 5): {
            matchResultDisplay.textContent = "You Lose the Game... Try again?";
            break;
        }
        default: {
            matchResultDisplay.textContent = "Oi! You're supposed to reset and play another game!";
            break;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    const possibleValues = ["rock", "scissors", "paper"];
    playerSelection = playerSelection.toLowerCase();

    if (possibleValues.includes(playerSelection) == false) {
        roundResultDisplay.textContent = `Invalid value: ${playerSelection}. Round skipped.`;
        return null
    }

    let message, score;

    switch (computerSelection) {
        case possibleValues.at((possibleValues.indexOf(playerSelection) + 1) % 3): {
            message = `You Win! ${playerSelection} beats ${computerSelection}!`;
            playerScore += 1;
            break;
        }
        case playerSelection: {
            message = `It's a Tie! Both players chose ${computerSelection}!`;
            break;
        }
        case possibleValues.at((possibleValues.indexOf(playerSelection) - 1) % 3): {
            message = `You Lose! ${computerSelection} beats ${playerSelection}!`;
            computerScore += 1;
            break;
        }
        default: {
            message = "Unexpected error."
            score = null;
        }
    }
    roundResultDisplay.textContent =  message;
    updateScoreDisplay();
    return score;
}

// function getPlayerChoice() {
//     return prompt("What move would you like to play?")
// }

// function game(numberOfRounds) {
//     let message;
//     let totalScore = 0;

//     for (let i = 0; i < numberOfRounds; i++) {
//         totalScore += playRound(getPlayerChoice(), getComputerChoice());
//     }
//     console.log(totalScore);
//     switch (true) {
//         case totalScore > 0: {
//             message = "You Won the Game! Well Done!"
//             break;
//         }
//         case totalScore == 0: {
//             message = "It's a Tie! What a Riveting Match!"
//             break;
//         }
//         case totalScore < 0: {
//             message = "You Lost the Game, Try Again!"
//             break;
//         }
//     }
//     console.log(message);
// }
