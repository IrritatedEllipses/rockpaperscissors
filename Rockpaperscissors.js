var compSelect = ""
var playerSelect = ""
var playerScore = ""
var compScore = ""

/* This section takes a random number from 1 - 9.99 and has the computer select rock, paper, or scissors*/
function compChoice() {
  let oppSelect = Math.random() * 10;
  if (oppSelect < 3) {
    compSelect = "rock";
  }
  else if (oppSelect >= 3 && oppSelect < 6) {
    compSelect = "paper";
  }
  else {
    compSelect = "scissors";
  }

}
/* Retrieves players choice from prompt box*/
function playerChoice() {
  playerSelect = prompt("Enter Rock, Scissors, or Paper");
  playerSelect = playerSelect.toLowerCase()
}

/*Actual game function with all variations accounted for*/
function gameRound() {
 playerChoice()
 compChoice()
  if (compSelect === playerSelect) {
    alert("It's a tie!")
  }
  else if (playerSelect === "rock") {
    if (compSelect === "scissors") {
      alert("Computer chose Scissors! You win!")
      playerScore += 1
    }
    else {
      alert("Computer chose paper, you lose!")
      compScore += 1
    }
  }
  else if (playerSelect === "paper") {
    if (compSelect === "rock") {
      alert("Computer chose rock! You win!")
      playerScore += 1
    }
    else {
      alert("Computer chose Scissors! You lose!")
      compScore += 1
    }

  }
  else if (playerSelect === "scissors") {
    if (compSelect === "paper") {
      alert("Computer chose Paper! You win!")
      playerScore += 1
    }
    else {
      alert("Computer chose Rock! You lose!")
      compScore += 1
    }
  }
}
function game() {
  if (playerScore === 5) {
    alert("After five rounds, a winner is you!")
    playerScore = 0
    compScore = 0
    break
  }
  if (compScore === 5) {
    alert("The computer has beaten you like so many others have before.")
    playerScore = 0
    compScore = 0
    break
  }
  gameRound()
}
