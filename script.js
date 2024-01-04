let playerScore = 0;
let computerScore = 0;
let winner = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winner = "Tie!";
    console.log("tie");
  } else if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection == "paper")
  ) {
    playerScore++;
    winner = "You won!";
    console.log(winner);
  } else if (
    (computerSelection === "rock" &&
      playerSelection.toLowerCase() === "scissors") ||
    (computerSelection === "paper" &&
      playerSelection.toLowerCase() == "rock") ||
    (computerSelection === "scissors" &&
      playerSelection.toLowerCase() === "paper")
  ) {
    computerScore++;
    winner = "Opponent wins!";
    console.log(winner);
  }
}

// let playerSelection = prompt("Rock, Paper, or Scissors?");
let computerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));
