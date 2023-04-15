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
      showModal(data);
    } catch (error) {
      console.error(error);
    }  
  }
  
  function showModal(data) {
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
  
    modal.style.display = 'block';
    modalContent.innerHTML = `<p>${data}</p>`;
  
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  }
  
  const cookie = document.querySelector('.fortune-cookie');
  cookie.addEventListener('click', getFortune);
  