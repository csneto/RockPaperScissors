function computerPlay(){
  let escolha = ["Rock", "Paper", "Scissors"];
  let x = Math.floor(Math.random()*3);
  return escolha[x];
}

const playerSelection = "rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    // your code here!
    return playerSelection + " - " + computerSelection;
  }
  

  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));