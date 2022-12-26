const userChoiceDisplay = document.createElement('h1')  // Creates content boxes within a <h1>
const computerChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay) // adds all the <h1> elements to one box

//Create an Array of possible answers

const choices = ['rock', 'paper', 'scissors']
let userChoice          // LET allows you to DECLARE variables to be used limited to scope of a block statement or expression
let computerChoice

// (e) is shorthand for element, => is short for function. 

const handleClick = (e) => {
    userChoice = e.target.innerHTML //To insert the HTML into the document rather than replace the contents of an Element
    userChoiceDisplay.innerHTML = 'User choice: ' + userChoice
    generateComputerChoice()
    getResults()
}

    const generateComputerChoice = () => {
        const randomChoice = choices [Math.floor(Math.random() * choices.length)]  //basic random array selector
        computerChoice = randomChoice
        computerChoiceDisplay.innerHTML = 'Computer Choice: ' + computerChoice
    }


for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i] // delete this if you want use e.HTML in the handleClick
    button.innerHTML = choices [i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}

const getResults = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':   
            resultDisplay.innerHTML = "YOU WIN!!"
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':   
            resultDisplay.innerHTML = "YOU LOSE!!"
            break      
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':   
            resultDisplay.innerHTML = "ITS A DRAW!!"
            break         
    }
}