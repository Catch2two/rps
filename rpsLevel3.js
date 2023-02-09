const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock', 'paper', 'scissors',]

const handleClick = (e) => {
    //instead of THIS BELOW, just 
    //const userChoice = e.target.innerHTML
    //const computerChoice = choices[Math.floor(Math.random() * choices.length)])
    //getResults(userChoice, computerChoice)
    getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}

choices.forEach(choice => {
   const button = document.createElement('button')
   button.innerHTML = choice
   button.addEventListener('click', handleClick)
   choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperscissors':
            resultDisplay.innerHTML = 'You Chose: ' + userChoice + ' and the computer chose ' + computerChoice + ' , You Win!'
            break
        case 'paperscissors':
        case 'rockpaper':
        case 'scissorsrock':
            resultDisplay.innerHTML = 'You Chose: ' + userChoice + ' and the computer chose ' + computerChoice + ' , You LOSE!'
            break
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            resultDisplay.innerHTML = 'You Chose: ' + userChoice + ' and the computer chose ' + computerChoice + ' , DRAW!'
            break
        }
    }