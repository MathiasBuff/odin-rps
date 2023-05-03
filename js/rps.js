function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random()*3)]
}

function getPlayerChoice() {
    return prompt("What move would you like to play?")
}

function playRound(playerSelection, computerSelection) {
    const possibleValues = ["rock", "scissors", "paper"];
    playerSelection = playerSelection.toLowerCase();

    if (possibleValues.includes(playerSelection) == false) {
        console.log(`Invalid value: ${playerSelection}. Round skipped.`)
        return null
    }

    let message, score;

    switch (computerSelection) {
        case possibleValues.at((possibleValues.indexOf(playerSelection) + 1) % 3): {
            message = `You Win! ${playerSelection} beats ${computerSelection}!`
            score = 1
            break;
        }
        case playerSelection: {
            message = `It's a Tie! Both players chose ${computerSelection}!`
            score = 0
            break;
        }
        case possibleValues.at((possibleValues.indexOf(playerSelection) - 1) % 3): {
            message = `You Lose! ${computerSelection} beats ${playerSelection}!`
            score = -1
            break;
        }
        default: {
            message = "Unexpected error."
            score = null
        }
    }
    console.log(message);
    return score
}

function game(numberOfRounds) {
    let message;
    let totalScore = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        totalScore += playRound(getPlayerChoice(), getComputerChoice());
    }
    console.log(totalScore);
    switch (true) {
        case totalScore > 0: {
            message = "You Won the Game! Well Done!"
            break;
        }
        case totalScore == 0: {
            message = "It's a Tie! What a Riveting Match!"
            break;
        }
        case totalScore < 0: {
            message = "You Lost the Game, Try Again!"
            break;
        }
    }
    console.log(message);
}

game(3)