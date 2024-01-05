
import { informBackend } from './api';
import { resetScore, increaseScore, updateHighScore, getHighScoreFromCookie } from './score';



export async function jump(){
    const message = "Player jumped";
    await informBackend(true, message);

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

export async function loopSinglePlayer(pipe, marioOne){

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


export async function loopMultiPlayer(pipe, marioOne, marioTwo){

    setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioOnePosition = +window.getComputedStyle(marioOne).bottom.replace('px', '');
        const marioTwoPosition = +window.getComputedStyle(marioTwo).bottom.replace('px', '');
    
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

    document.getElementById('high-score-1').innerText = highScore;


    if (gameType === "single") {

        const marioOne = document.querySelector('.mario-1');
        loopSinglePlayer(pipe, marioOne);
    } 
    
    if (gameType === "multi") {


        const marioOne = document.querySelector('.mario-1');
        const marioTwo = document.querySelector('.mario-2');

        loopMultiPlayer(pipe, marioOne, marioTwo);

    }

    
    // Attach event listener for the jump action
    document.addEventListener('keydown', jump);

    

}
