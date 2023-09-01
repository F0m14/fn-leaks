window.addEventListener('DOMContentLoaded', (event) => {
    const leaksContainer = document.getElementById('leaks-container');

    const leaks = [
      {
        image: 'anime1.jpg',
        title: "Collaboration",
        content: "Maybe theres an upcoming collaboration.",
        date: "2023-09-01",
      },
      {
        image: 'anime2.jpg',
      },
      {
        image: 'anime3.jpg',
      },
    ];

    leaks.forEach(leak => {
        const leakElement = document.createElement('div');
        leakElement.classList.add('leak');
        
        if (leak.image) {
            const imageElement = document.createElement('img');
            imageElement.src = leak.image;
            leakElement.appendChild(imageElement);
        }

        const titleElement = document.createElement('h2');
        titleElement.textContent = leak.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = leak.content;

        if (leak.date) {
          const dateElement = document.createElement('p');
          dateElement.classList.add('date');
          dateElement.textContent = "Published In: " + leak.date;
          leakElement.appendChild(dateElement);
        }

        leakElement.appendChild(titleElement);
        leakElement.appendChild(contentElement);

        leaksContainer.appendChild(leakElement);
    });
});