function computerPlay(){
  let escolha = ["Rock", "Paper", "Scissors"];
  let x = Math.floor(Math.random()*3);
  return escolha[x].toLowerCase();
}

function playerPlay(){
  var escolha = prompt("Choose Rock, Paper or Scissor: ");
  return escolha.toLowerCase();
}

var playerSelection;
var computerSelection;
var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
  
  var validWord;
  if (playerSelection === computerSelection) {
    validWord = true;
    return "You: "+ playerSelection + " / Computer: " + computerSelection + " -> You draw!"
  }
  if (playerSelection === "rock"){
    validWord = true;
    if (computerSelection === "paper") {
      computerScore ++;
      return "You: "+ playerSelection + " / Computer: " + computerSelection + " -> You loose!"
    } 
  }
  if (playerSelection === "scissors"){
    validWord = true;
    if (computerSelection === "rock") {
      computerScore ++;
      return "You: "+ playerSelection + " / Computer: " + computerSelection + " -> You loose!"
    } 
  }
  if (playerSelection === "paper"){
    validWord = true;
    if (computerSelection === "scissors") {
      computerScore ++;
      return "You: "+ playerSelection + " / Computer: " + computerSelection + " -> You loose!"
    } 
  }
  if (!validWord){
    return "You lose, I don't understand... Try again."
  }
  playerScore ++;
  return "You: "+ playerSelection + " / Computer: " + computerSelection + " -> You win!"
}
  
function main(){
  for (var i = 0; i < 5 ; i ++) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    //console.log("o")
  }
  console.log("You have :" + playerScore + "\nComputer :" + computerScore);
  return 
}

  main();
  //console.log(computerSelection);
  //console.log(playRound(playerSelection, computerSelection));