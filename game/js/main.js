import { resetScore } from './modules/score';
import { informBackendGameType } from './modules/api';
import { runGame } from './modules/game';

// Call resetScore when the game starts

let gameType = ''; // Variable to store the game type


function startGame(gameType) {

    resetScore();
    // Use the gameType variable in your game logic
    console.log(`Starting ${gameType} player game...`);

    // Example: Notify the backend about the chosen game type
    informBackendGameType(gameType);

    runGame(gameType)

}




document.getElementById('singlePlayerButton').addEventListener('click', function() {
    gameType = 'single';
    startGame(gameType);
});

document.getElementById('multiPlayerButton').addEventListener('click', function() {
    gameType = 'multi';
    startGame(gameType);
});

