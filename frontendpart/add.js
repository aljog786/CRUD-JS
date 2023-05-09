const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', () => {
    const name = document.getElementById('inputName').value;
    const price = document.getElementById('inputPrice').value;
    const ingredients = document.getElementById('inputIngredients').value;

    // Send form data to backend server using fetch API
    fetch('http://localhost:5000/curries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, ingredients }),
    })
      .then((response) => {
        if (response.ok) {
      // Redirect to homepage if update is successful
      window.location.href = '/frontendpart';
    } else {
      // Display error message if update fails
      console.error("Update failed.");
    }
      })
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  });