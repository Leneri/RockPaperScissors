function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getPlayerChoice(e) {
    if (e.target.matches('.r')) {
        return playerChoice = "Rock"
    } else if (e.target.matches('.p')) { 
        return playerChoice = "Paper"
    } else {
        return "Scissors"
    };
}

function getChoices(e) {
    const playerChoice = getPlayerChoice(e);
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}

function playRound(player, computer) {
    if (player == computer) {
        winnerText.textContent = `Draw! ${player} is equal to ${computer}!`;
    }
    else if ((player == "Rock" && computer == "Paper") || (player == "Paper" && computer == "Scissors") || (player == "Scissors" && computer == "Rock")) {
        winnerText.textContent = `You lose! ${player} loses against ${computer}!`;
        computerScore += 1;
        cScore.textContent = computerScore;

    } else {
        winnerText.textContent = `You win! ${player} beats ${computer}!`;
        playerScore += 1;
        pScore.textContent = playerScore;
    }

    if (playerScore == 5) {
        alert("You have won!");
    } else if (computerScore == 5) {
        alert("You have lost!");
    }
}

alert("Hello! Please click either on Rock, Paper or Scissors!");

const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const pScore = document.createElement('pScore');
const cScore = document.createElement('cScore');

player.appendChild(pScore);
computer.appendChild(cScore);

const forWinnerText = document.querySelector('.number');
const winnerText = document.createElement('winnerText');

forWinnerText.appendChild(winnerText);

let playerScore = 0;
let computerScore = 0;

const choice = document.querySelectorAll('button');

choice.forEach((button) => {
  button.addEventListener('click', (e) => getChoices(e))
});