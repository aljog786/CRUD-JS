document.addEventListener("DOMContentLoaded", () => {
  fetch('http://127.0.0.1:5000/curries')
    .then(response => response.json())
    .then(data => {
      // Get the card container element
      const cardContainer = document.getElementById('card-container');

      // Loop through the data and create a card for each item
      console.log(data.curries)
      data?.curries?.forEach(item => {
        // Create the card elements
        const cardColumn = document.createElement('div');
        const card = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitle = document.createElement('h5');
        const cardSubtitle = document.createElement('h6');
        const cardText = document.createElement('p');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        // Add classes to the card elements for Bootstrap styling
        cardColumn.classList.add('col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4');
        card.classList.add('card');
        cardBody.classList.add('card-body');
        cardTitle.classList.add('card-title');
        cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-muted');
        cardText.classList.add('card-text');
        editButton.classList.add('btn', 'btn-outline-primary', 'ms-auto');
        deleteButton.classList.add('btn', 'btn-outline-info', 'text-end');

        // Set the text content and attributes of the card elements
        cardTitle.textContent = item.name;
        cardSubtitle.textContent = item.price;
        cardText.textContent = item.ingredients;
        editButton.textContent = 'edit';
        editButton.addEventListener('click', () => {
          window.location.href = `edit.html?id=${item._id}`;
        });
        deleteButton.textContent = 'delete';
        deleteButton.addEventListener('click', () => {
        fetch(`http://127.0.0.1:5000/curries/${item._id}`,
         { method: 'DELETE' })
            .then(response => {
              if (response.ok) {
                cardColumn.remove(); // Remove the card column element from the UI
              }
            })
            .catch(error => console.error(error));
        });
        
        // Append the card elements to each other and the card container
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardSubtitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(editButton);
        cardBody.appendChild(deleteButton);
        card.appendChild(cardBody);
        cardColumn.appendChild(card);
        cardContainer.appendChild(cardColumn);
      });
      
    })
    .catch(error => console.error(error));
    const addButton = document.querySelector('button');
    addButton.addEventListener('click', () => {
      window.location.href = 'add.html';
    });
});

