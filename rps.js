// User is asked to Choose Rock, Paper, or Scissors
// Computer Chooses randomly between Rock, Paper, or Scissors
// if user chooses Rock, let user win if computer Chose Scissors
//  else computer wins if Paper
// if User chooses Paper, let user win if computer chose Rock
//  else computer wins if Scissors
// if user chooses Scissors, let user win if computer chose Paper
//  else computer wins if rock
// Else if = then both Tie

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor (Math.random() * 3) + 1 // or possibleChoices.length
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
    }
        if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
        }
        if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
        }
        if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lost!'
        }
        if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
        }
        if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
    }
