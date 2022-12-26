// User is asked to Choose Rock, Paper, or Scissors
// Computer Chooses randomly between Rock, Paper, or Scissors
// if user chooses Rock, let user win if computer Chose Scissors
//  else computer wins if Paper
// if User chooses Paper, let user win if computer chose Rock
//  else computer wins if Scissors
// if user chooses Scissors, let user win if computer chose Paper
//  else computer wins if rock
// Else if = then both Tie



function getComputerChoice(choice) {    
    const choice = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choice.length);
 console.log(random, choice[random]);
}
 

function playRound(playerSelection, computerSelection) {
    let 
}