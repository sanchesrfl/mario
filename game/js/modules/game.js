
import BackendCommunicator from './api';
import { getHighScoreFromCookie, resetScore } from './score';



export async function jump(){
    const message = "Player jumped";
    await informBackend(true, message);

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

export async function loop(pipe, mario){

    setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(marioOne).bottom.replace('px', '');
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
            informBackend(false, 'Player Died x.x');
            resetScore();
    
            clearInterval(loop);
        } else if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 90) {
            increaseScore();
        }
    }, 10);

}



export function runGame(gameType){

    const pipe = document.querySelector('.pipe');
    const highScore = getHighScoreFromCookie(); //isso aqui vai pro banco de dados do servidor conectado ao historico do player/user;
    const marioOne = document.querySelector('.mario-1');
    
    document.getElementById('high-score-1').innerText = highScore;
    loop(pipe, marioOne);
    
    if (gameType === "multi") {
        const marioTwo = document.querySelector('.mario-2');
        const highScoreTwo = document.querySelector('high-score-2');
        playerComm(marioTwo,highScoreTwo);
    }

    // Attach event listener for the jump action
    document.addEventListener('keydown', jump);

}



function startGame(gameType) {

    resetScore();
    // Use the gameType variable in your game logic
    console.log(`Starting ${gameType} player game...`);

    // Example: Notify the backend about the chosen game type
    informBackendGameType(gameType);

    runGame(gameType)

}