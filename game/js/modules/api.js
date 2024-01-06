class BackendCommunicator {
    constructor(apiUrl) {
        this.apiUrl = apiUrl || 'http://localhost:3000';
    }

    async makeRequest(endpoint, requestData) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers as needed
            },
            body: JSON.stringify(requestData),
        };

        try {
            const response = await fetch(`${this.apiUrl}/${endpoint}`, requestOptions);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error in ${endpoint} request:`, error);
            throw error;
        }
    }

    async informBackend(buttonPressed, message) {
        const requestData = { buttonPressed, message };
        return this.makeRequest('jump', requestData);
    }

    async informBackendScore(score, highScore) {
        const requestData = { score, highScore };
        return this.makeRequest('score', requestData);
    }

    async informBackendGameType(gameType) {
        const requestData = { gameType };
        return this.makeRequest('game-type', requestData);
    }

    async playerComm() {
        /* WebSocket for players to exchange position/action and scores
        throughout the gameplay.
        */
    }
}

export default BackendCommunicator;