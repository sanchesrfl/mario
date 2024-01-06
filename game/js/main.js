import { startGame } from './modules/game';

// Call resetScore when the game starts

let gameType = ''; // Variable to store the game type

document.getElementById('singlePlayerButton').addEventListener('click', function() {
    gameType = 'single';
    startGame(gameType);
});

document.getElementById('multiPlayerButton').addEventListener('click', function() {
    gameType = 'multi';
    startGame(gameType);
});

