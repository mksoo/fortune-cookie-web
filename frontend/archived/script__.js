// Get the fortune cookie image and message container
const fortuneCookie = document.getElementById('fortune-cookie');
const fortuneMessageContainer = document.getElementById('fortune-message-container');

// When the fortune cookie is clicked, show the fortune message
fortuneCookie.addEventListener('click', async () => {
  // Get the fortune message from the server
  const fortune = await getFortune();

  // Set the fortune message text
  const fortuneMessageText = document.getElementById('fortune-message-text');
  fortuneMessageText.innerText = fortune.message;

  // Show the fortune message container
  fortuneMessageContainer.style.display = 'flex';
});

// When the close button is clicked, hide the fortune message
const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', () => {
  fortuneMessageContainer.style.display = 'none';
});

// Send a request to the server to get a fortune message
async function getFortune() {
  try {
    const response = await fetch('http://localhost:3000/fortuneTell', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'John'
      })
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
