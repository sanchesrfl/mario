

//score
let score = 0;
let highScore = 0;


function informBackend(buttonPressed, message) {
    const requestBody = { buttonPressed: buttonPressed, message };
  
    return fetch('http://localhost:3000/jump', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(requestBody),
    })
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      console.error('Error:', error);
      throw error; // Re-throw the error for handling in the calling code
    });
  }
  


// Function to update the score
function updateScore() {
    document.getElementById('score').innerText = score;
  }
  
// Function to update the high score
function updateHighScore() {
if (score > highScore) {
    highScore = score;
    document.getElementById('high-score').innerText = highScore;

    // Atualizar o highScore usando cookies
    document.cookie = `highScore=${highScore}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

}
}

function getHighScoreFromCookie() {
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.startsWith('highScore=')) {
        return parseInt(cookie.substring('highScore='.length), 10);
      }
    }
    return 0;
  }

// Example function to increase the score (call this when the player scores points in your game)
function increaseScore() {
    score += 10; // You can adjust this based on your game logic
    updateScore();
    updateHighScore();
    }

// Reset score function (call this when the game is over or restarted)
function resetScore() {
    score = 0;
    updateScore();
}

// Call resetScore when the game starts
resetScore();








const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = async () => {

    mario.classList.add('jump');
    const message = "Player jumped"; // Specify the message here
    await informBackend(true,message);
    

    setTimeout(()=>{
        mario.classList.remove('jump');
    },500)
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        informBackend(false,'Player Died x.x');
        resetScore();

        clearInterval(loop);

    } else if (pipePosition <= 120 && pipePosition > 0 && marioPosition > 90) {
        increaseScore();
    }

},10)

highScore = getHighScoreFromCookie();
document.getElementById('high-score').innerText = highScore;

document.addEventListener('keydown', jump);