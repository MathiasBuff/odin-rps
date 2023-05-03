function getComputerChoice() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random()*3)]
}

console.log(getComputerChoice())