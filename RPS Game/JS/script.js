document.addEventListener("DOMContentLoaded", () => {
  const gameMessage = document.getElementById("game-message");
  const choiceButtons = document.querySelectorAll(".rps-btn");
  const gameResult = document.getElementById("game-result");
  const playAgainBtn = document.getElementById("play-again");
  const playerMoveDisplay = document.getElementById("player-move");
  const computerMoveDisplay = document.getElementById("computer-move");

  let playerChoice = "";

  const initGame = () => {
    gameMessage.textContent = "Do you want to play rock, paper, or scissors?";
    playAgainBtn.classList.add("hidden");
    gameResult.textContent = "";
    playerMoveDisplay.textContent = "-";
    computerMoveDisplay.textContent = "-";
    enableButtons();
  };

  const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    
    // Display moves in the UI
    playerMoveDisplay.textContent = capitalizeFirstLetter(playerChoice);
    computerMoveDisplay.textContent = capitalizeFirstLetter(computerChoice);
    
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    playAgainBtn.classList.remove("hidden");
  };

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return `It's a tie! You both chose ${player}.`;
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      return `You win! ${player} beats ${computer}.`;
    } else {
      return `You lose! ${computer} beats ${player}.`;
    }
  };

  const displayResult = (result) => {
    gameResult.textContent = result;
  };

  const enableButtons = () => {
    choiceButtons.forEach((button) => {
      button.disabled = false;
      button.addEventListener("click", () => {
        playerChoice = button.id;
        playGame(playerChoice);
        disableButtons();
      });
    });
  };

  const disableButtons = () => {
    choiceButtons.forEach((button) => {
      button.disabled = true;
    });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  playAgainBtn.addEventListener("click", () => {
    initGame();
  });

  initGame();
});
