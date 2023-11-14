var getUserChoice = function(userInput) {
    if (userInput === 'rock') {
        return (`${userInput}`);
    } else if (userInput === 'paper') {
        return `${userInput}`;
    } else if (userInput === 'scissors') {
        return `${userInput}`;
    } else if (userInput === 'bomb') {
        return `${userInput}`;
    } else {
    console.log('Error, incorrect option, choose "rock", "paper" or "scissors"');
};
}

var userInput = 'bomb';

userInput = userInput.toLowerCase();


var getComputerChoice = function() {
        randNum = Math.floor(Math.random() * 3);
        if (randNum === 0) {
            getComputerChoice= 'rock';
            return 'rock';
        } else if (randNum === 1) {
            getComputerChoice= 'paper';
            return 'paper';
        } else if (randNum === 2) {
            getComputerChoice= 'scissors';
            return 'scissors';
        } 
    }

var determineWinner = function (userChoice, computerChoice) {
        if (userChoice === computerChoice) {
        return 'The game was a tie';
        } if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
            return 'Computer chose paper, computer won!';
            } else {
            return 'You won!';
            }
        } if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
            return 'Computer chose scissors, computer won!';
            } else {
            return 'You won!';
            }
        } if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
            return 'Computer chose rock, computer won!';
            } else {
            return 'You won!';
            }
        } if (userChoice === 'bomb') {
            return 'Cheat code activated, user won!'
        }
    }

    var playGame = function(userChoice, computerChoice) {
        var userChoice = getUserChoice(userInput); 
        var computerChoice = getComputerChoice(); 
        console.log('You chose ' + userChoice); 
        console.log('Computer chose '+ computerChoice);
        determineWinner(userChoice, computerChoice);
        console.log(determineWinner(userChoice, computerChoice))
    
    }

    playGame()
