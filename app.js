



// console.log('Hello!');

// let humanScore = 0;
// let computerScore = 0;

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// getRandomInt(3);


// getComputerChoice = () => {
//     let number = getRandomInt(3);
//     if (number === 0) {
//         return 'rock';
//     } if (number === 1) {
//         return 'paper';
//     } if (number === 2) {
//         return 'scissors';
//     }
// }

// getHumanChoice = () => {
//     let choice = prompt('Choose one from: Rock, Scissors, Paper').toLowerCase();
//     if (choice === 'rock' || choice === 'scissors' || choice === 'paper') {
//         return choice
//     }
//     else {
//         alert('Wrong value! Choose one from: Rock, Scissors, Paper')
//     }

// }



// playRound = (humanChoice, computerChoice) => {
//     let playerWin = 'You won! ' + humanChoice + ' beats ' + computerChoice;
//     let playerLose = 'You lost! ' + computerChoice + ' beats ' + humanChoice;


//     if (humanChoice === 'rock' && computerChoice === 'scissors') {
//         humanScore++
//         return console.log(playerWin);
//     } if (humanChoice === 'scissors' && computerChoice === 'paper') {
//         humanScore++
//         return console.log(playerWin);
//     } if (humanChoice === 'paper' && computerChoice === 'rock') {
//         humanScore++
//         return console.log(playerWin);
//     } if (humanChoice === computerChoice) {
//         return console.log('Draw! Both picked ' + humanChoice + '. ' + 'Please, update the page.');
//     } if (humanChoice === undefined || humanChoice != 'rock' || humanChoice != 'paper' || humanChoice != 'scissors') {
//         return
//     }
//     else {
//         computerScore++
//         return console.log(playerLose)
//     }
// }


// playGame = () => {
//     const computerSelection = getComputerChoice();
//     const humanSelection = getHumanChoice();
//     playRound(humanSelection, computerSelection);
//     let currentScore = ` Player: ${humanScore}, Computer: ${computerScore}`;
//     console.log(currentScore);
// }
// for (let i = 0; i < 5; i++) {
//     playGame();
//     if (i == 4) {
//         alert('GGs')
//     }
//     console.log(i);
// }






