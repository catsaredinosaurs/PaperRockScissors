const choices = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerSelection;

function getComputerChoice(){
    
    let random = Math.floor(Math.random() * 3);

    return choices[random];
}

//lowerCase for caseInsensitivity

playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();


/*
rock beats scissors
paper beats rock
scissors beats paper

if playerchoice is rock and computerchoice is scissors --> win
if player is paper and computerchoice is rock --> win
if player is scissors and computer is paper --> win
if player === computer --> draw
else computer wins

*/

function game(){

let playerWins = false;

if(playerSelection === "rock" && computerSelection === "scissors"){
    alert(`YOU WIN!!! ${playerSelection} beats ${computerSelection}`)
    playerWins = true;
}

if(playerSelection === "paper" && computerSelection === "rock"){
    alert(`YOU WIN!!! ${playerSelection} beats ${computerSelection}`)
    playerWins = true;
}

if(playerSelection === "scissors" && computerSelection === "paper"){
    alert(`YOU WIN!!! ${playerSelection} beats ${computerSelection}`)
    playerWins = true;
}

//player doesn't win here, but playerWins needs to be not false for the next if
if(playerSelection === computerSelection){
    alert(`DRAW!!! both choose ${computerSelection}`)
    playerWins = true;
}

if(playerWins === false){
    alert(`YOU Loose!!! ${computerSelection} beats ${playerSelection}`)
}

}

game();



console.log("computer:"+computerSelection);
console.log("player:"+playerSelection);