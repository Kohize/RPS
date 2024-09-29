console.log('Hello!');

let humanScore = 0;
let computerScore = 0;

let rockButton = document.querySelector('.rock')
let paperButton = document.querySelector('.paper')
let scissorsButton = document.querySelector('.scissors')
let results = document.querySelector('.results');
let battelog = document.querySelector('.battelog');
let battleItem = document.createElement('li')



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getRandomInt(3);


getComputerChoice = () => {
    let number = getRandomInt(3);
    if (number === 0) {
        return 'rock';
    } if (number === 1) {
        return 'paper';
    } if (number === 2) {
        return 'scissors';
    }
}

getHumanChoice = () => {
    let choice = prompt('Choose one from: Rock, Scissors, Paper').toLowerCase();
    if (choice === 'rock' || choice === 'scissors' || choice === 'paper') {
        return choice
    }
    else {
        alert('Wrong value! Choose one from: Rock, Scissors, Paper')
    }

}


function createLog(result) {
    let newLi = document.createElement('li');
    newLi.textContent = result;
    return newLi
}

function announceWinner() {
    let currentScore = ` Player: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === 5) {
        results.style.color = 'red'
        currentScore = `Player won! Final score is ${humanScore} : ${computerScore}`
    } else if (computerScore === 5) {
        results.style.color = 'blue'
        currentScore = `Computer won! Final score is ${humanScore} : ${computerScore}`
    }
    results.textContent = currentScore;
}


playRound = (humanChoice, computerChoice) => {
    let playerWin = 'You won! ' + humanChoice + ' beats ' + computerChoice;
    let playerLose = 'You lost! ' + computerChoice + ' beats ' + humanChoice;
    let drawLog = 'Draw! Both picked ' + humanChoice + '. ' + 'Please, update the page.';


    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++
        return battelog.appendChild(createLog(playerWin))
    } if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        return battelog.appendChild(createLog(playerWin))
    } if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++

        return battelog.appendChild(createLog(playerWin))
    } if (humanChoice === computerChoice) {
        return battelog.appendChild(createLog(drawLog))
    }
    else {
        computerScore++
        return battelog.appendChild(createLog(playerLose))
    }
}


rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
    announceWinner()
})

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    announceWinner()
})

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    announceWinner()
})



// for (let i = 0; i < 5; i++) {
//     playGame();
//     if (i == 4) {
//         alert('GGs')
//     }
//     console.log(i);
// }






