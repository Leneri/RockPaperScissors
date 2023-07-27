function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    const randomNumber = getRandomInt(3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getPlayerChoice(choice) {

    let lowerCaseChoice = choice.toLowerCase();

    switch (lowerCaseChoice) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
    }
}

function game(player, computer) {
    if (player == computer) {
        return `Draw! ${player} is equal to ${computer}!`;
    }
    if ((player == "Rock" && computer == "Paper") || (player == "Paper" && computer == "Scissors") || (player == "Scissors" && computer == "Rock")) {
        return `You lose! ${player} loses against ${computer}!`;
    } else {
        return `You win! ${player} beats ${computer}!`;
    }

}

let playerInput = prompt("Hello! Please choose between Rock, Paper and Scissors!");
const playerChoice = getPlayerChoice(playerInput);
const computerChoice = getComputerChoice();

console.log(game(playerChoice, computerChoice));