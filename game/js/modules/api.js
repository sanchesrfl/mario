
export async function informBackend(buttonPressed, message) {
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
        throw error;
    });
}

export async function informBackendScore(score, highScore) {
    const requestBody = { score, highScore };

    return fetch('http://localhost:3000/score', {
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
        throw error;
    });
}

export async function informBackendGameType(gameType) {
    const requestBody = { gameType };

    return fetch('http://localhost:3000/game-type', {
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
        throw error;
    });
}

export async function playerComm(){

    /* WebSocket for players to exchange position/action and scores
    throughout the gameplay.
    */

};