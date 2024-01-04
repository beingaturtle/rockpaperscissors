let playerScore = 0;
let computerScore = 0;
let winner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner = "tie";
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection == "paper")
  ) {
    playerScore++;
    winner = "player";
  } else if (
    (computerSelection === "rock" &&
      playerSelection.toLowerCase() === "scissors") ||
    (computerSelection === "paper" &&
      playerSelection.toLowerCase() == "rock") ||
    (computerSelection === "scissors" &&
      playerSelection.toLowerCase() === "paper")
  ) {
    computerScore++;
    winner = "computer";
  }
}

function computerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  switch (randomChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function gameOver() {
  return playerScore === 5 || computerScore === 5;
}

// DOM
const resultMessage = document.getElementById("result-message");
const resultScore = document.getElementById("result-score");
const playerChoiceSelect = document.querySelector("[data-player-choice]");
const computerChoiceSelect = document.querySelector("[data-opponent-choice]");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("opponent-score");
const rockButton = document.querySelector("[data-rock]");
const paperButton = document.querySelector("[data-paper]");
const scissorsButton = document.querySelector("[data-scissors]");
const modalWindow = document.querySelector(".modal-container");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const playAgainButton = document.getElementById("play-again");

rockButton.addEventListener("click", () => game("rock"));
paperButton.addEventListener("click", () => game("paper"));
scissorsButton.addEventListener("click", () => game("scissors"));
playAgainButton.addEventListener("click", () => restartGame());

function game(playerSelection) {
  if (gameOver()) {
    openModal();
    return;
  }
  const computerSelection = computerChoice();
  playRound(playerSelection, computerSelection);
  displayUpdate(playerSelection, computerSelection);
  displayScore();

  if (gameOver()) {
    openModal();
    endGameMessage();
  }
}

function displayUpdate(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      playerChoiceSelect.textContent = "🗿";
      break;
    case "paper":
      playerChoiceSelect.textContent = "🧻";
      break;
    case "scissors":
      playerChoiceSelect.textContent = "✂️";
      break;
  }
  switch (computerSelection) {
    case "rock":
      computerChoiceSelect.textContent = "🗿";
      break;
    case "paper":
      computerChoiceSelect.textContent = "🧻";
      break;
    case "scissors":
      computerChoiceSelect.textContent = "✂️";
      break;
  }
}

function displayScore() {
  if (winner === "tie") {
    resultScore.textContent = "It's a Tie!";
  } else if (winner === "player") {
    resultScore.textContent = "You Won!";
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
  } else if (winner === "computer") {
    resultScore.textContent = "You Lost!";
    computerScoreDisplay.textContent = `Opponent: ${computerScore}`;
  }
}

function endGameMessage() {
  if (playerScore === 5) {
    modal.textContent = "Congrats! You have won the game!";
  } else if (computerScore === 5) {
    modal.textContent = "Nice try! You have lost the game!";
  }
}

function openModal() {
  modalWindow.classList.add("active");
  overlay.classList.add("active");
}

function closeModal() {
  modalWindow.classList.remove("active");
  overlay.classList.remove("active");
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  winner = "";
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Opponent: ${computerScore}`;
  resultScore.textContent = "First to 5 points wins!";
  playerChoiceSelect.textContent = "~";
  computerChoiceSelect.textContent = "~";
  closeModal();
}
