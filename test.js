const fortuneCookie = document.getElementById('fortune-cookie');
const modal = document.getElementById('modal');
const fortuneMessage = document.getElementById('fortune-message');
const closeButton = document.getElementsByClassName('close-button')[0];
const loadingSpinner = document.getElementById('loading-spinner');

fortuneCookie.addEventListener('click', () => {
  getFortune();
});

async function getFortune() {
  try {
    loadingSpinner.style.display = 'block';

    const response = await fetch('http://localhost:3000/fortuneTell', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'John',
      }),
    });

    const data = await response.json();
    fortuneMessage.innerText = data.assistant;
    console.log(data.assistant);
    modal.style.display = 'block';
  } catch (error) {
    console.error(error);
  } finally {
    loadingSpinner.style.display = 'none';
  }
}

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});