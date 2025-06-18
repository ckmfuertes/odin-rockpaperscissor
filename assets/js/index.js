// Function to get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get human choice and handle clicks
function getHumanChoice() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanChoice = button.id;
      playRound(humanChoice, getComputerChoice());
    });
  });
}

// Function to play a round of the game
function playRound(humanChoice, computerChoice) {
  // Declare DOM elements
  const resultDisplay = document.getElementById("result");
  const humanChoiceDisplay = document.getElementById("human-choice");
  const computerChoiceDisplay = document.getElementById("computer-choice");
  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  const currentRoundDisplay = document.getElementById("round-number");

  // Show current round
  currentRound++;
  currentRoundDisplay.textContent = `Round: ${currentRound}`;

  // Reset game if current round exceeds 5
  if (currentRound > 5) {
    resetGame();
  }

  // Display human choice
  switch (humanChoice) {
    case "rock":
      humanChoiceDisplay.className = "fa-solid fa-hand-fist";
      break;
    case "paper":
      humanChoiceDisplay.className = "fa-solid fa-hand";
      break;
    case "scissors":
      humanChoiceDisplay.className = "fa-solid fa-hand-scissors";
      break;
  }

  // Display computer choice
  switch (computerChoice) {
    case "rock":
      computerChoiceDisplay.className = "fa-solid fa-hand-fist";
      break;
    case "paper":
      computerChoiceDisplay.className = "fa-solid fa-hand";
      break;
    case "scissors":
      computerChoiceDisplay.className = "fa-solid fa-hand-scissors";
      break;
  }

  // Evaluate the result
  if (humanChoice === computerChoice) {
    humanChoiceDisplay.style.color = "white";
    computerChoiceDisplay.style.color = "white";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanChoiceDisplay.style.color = "green";
    computerChoiceDisplay.style.color = "red";
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else {
    humanChoiceDisplay.style.color = "red";
    computerChoiceDisplay.style.color = "green";
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }

  // Check for game over
  if (currentRound === 5) {
    if (playerScore === computerScore) {
      resultDisplay.textContent = "What a game! It's a tie.";
    } else if (playerScore > computerScore) {
      resultDisplay.textContent = "Congratulations! You won the game";
    } else {
      resultDisplay.textContent = "Game Over! You lost the game";
    }
  }
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("round-number").textContent = `Round: ${currentRound}`;

  // Reset choices display
  document.getElementById("human-choice").className = "fa-solid fa-question";
  document.getElementById("computer-choice").className = "fa-solid fa-question";
  document.getElementById("result").textContent = "";
}

// Initialize scores
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

// Start the game by getting human choice
getHumanChoice();
