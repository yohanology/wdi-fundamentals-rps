////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if ((playerMove === 'rock') && (computerMove === 'paper')) {
        winner = 'computer';
    } else if ((playerMove === 'paper') && (computerMove === 'scissors')) {
        winner = 'computer';
    } else if ((playerMove === 'scissors') && (computerMove === 'rock')) {
        winner = 'computer';
    } else {
        winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var playerMove;
    var computerMove;
    while ((playerWins || computerWins) < 5) {
    playerMove = getPlayerMove();
    computerMove = getComputerMove();
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    var winnerIs = getWinner(playerMove, computerMove);
    if (winnerIs === 'player') {
        playerWins += 1;
        console.log('Player wins!');
    } else if (winnerIs ==='computer') {
        computerWins += 1;
        console.log('Computer wins!');
    } else {
        console.log('Its a draw!');
    }
    console.log('The score is currently: ' + 'Player ' + playerWins + ' to ' + 'Computer ' + computerWins + '\n');
    if (playerWins === 5) {
        console.log('Player wins the game!');
        return [playerWins, computerWins];
    } else if (computerWins === 5) {
        console.log('Computer wins the game!');
        return [playerWins, computerWins];
    }
    }
}

