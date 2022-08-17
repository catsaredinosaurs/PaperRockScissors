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

function playRound(){

let playerWins = false;

if(playerSelection === "rock" && computerSelection === "scissors"){
    playerWins = true;
    return(`YOU WIN!!! ${playerSelection} beats ${computerSelection}`);
}

if(playerSelection === "paper" && computerSelection === "rock"){
    playerWins = true;
    return(`YOU WIN!!! ${playerSelection} beats ${computerSelection}`)    
}

if(playerSelection === "scissors" && computerSelection === "paper"){
    playerWins = true;
    return(`YOU WIN!!! ${playerSelection} beats ${computerSelection}`)
}

//player doesn't win here, but playerWins needs to be not false for the next if
if(playerSelection === computerSelection){
    playerWins = true;
    return(`DRAW!!! both choose ${computerSelection}`)
}

if(playerWins === false){
    return(`YOU Loose!!! ${computerSelection} beats ${playerSelection}`)
}

}

console.log(playRound());



console.log("computer:"+computerSelection);
console.log("player:"+playerSelection);