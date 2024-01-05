
let score = 0;
let highScore = 0;

export function updateScore() {
    document.getElementById('score').innerText = score;
}

export function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        document.getElementById('high-score').innerText = highScore;

        // Atualizar o highScore usando cookies
        document.cookie = `highScore=${highScore}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
}

export function getHighScoreFromCookie() {
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        if (cookie.startsWith('highScore=')) {
            return parseInt(cookie.substring('highScore='.length), 10);
        }
    }
    return 0;
}

export function increaseScore() {
    score += 10;
    updateScore();
    updateHighScore();
}

export function resetScore() {
    score = 0;
    updateScore();
}
