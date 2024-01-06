// Call resetScore when the game starts

let gameType = ''; // Variable to store the game type

document.getElementById('singlePlayerButton').addEventListener('click', function() {
    gameType = 'single';
    window.location.href = '/game/html/game-board-single.html';
    console.log(gameType);
});

document.getElementById('multiPlayerButton').addEventListener('click', function() {
    gameType = 'multi';

    console.log(gameType);
  //  startGame(gameType);
});

