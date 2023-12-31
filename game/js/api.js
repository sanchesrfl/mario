// Function to inform the backend about the button press
export function informBackendButtonPress() {
    return fetch('https://localhost:3000/jump', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify({ buttonPressed: true }),
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
        throw error; // Re-throw the error for handling in the calling code
      });
  }