document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function () {
      let player = this.getAttribute('data-choice');
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissors";
  
      let result = 
        player === computer 
        ? "Oh no, It's a tie..! 😅" 
        : player === "rock" && computer === "paper" 
        ? `Player Chose : ${player}<br>Computer Chose : ${computer}<br>Computer wins😐`
        : player === "paper" && computer === "scissors" 
        ? `Player Chose : ${player}<br>Computer Chose : ${computer}<br>Computer wins😐`
        : player === "scissors" && computer === "rock" 
        ? `Player Chose : ${player}<br>Computer Chose : ${computer}<br>Computer wins😐`
        : `Player Chose : ${player}<br>Computer Chose : ${computer}<br>Player wins..! 🥳`;
  
      document.getElementById('result').innerHTML = result;
    });
  });
  