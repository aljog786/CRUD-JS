const updateButton = document.querySelector("#update-button");
const urlParams = new URLSearchParams(window.location.search);
const dishId = urlParams.get("id");

// Fetch data from backend
fetch(`http://localhost:5000/curries/${dishId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Update input fields with fetched data
    document.querySelector("#inputName").value = data.curry.name;
    document.querySelector("#inputPrice").value = data.curry.price;
    document.querySelector("#inputIngredients").value = data.curry.ingredients;
  })
  .catch((error) => console.error(error));

// Update button event listener
updateButton.addEventListener("click", (e) => {
  // Get updated data from form inputs
  const updatedData = {
    name: document.querySelector("#inputName").value,
    price: document.querySelector("#inputPrice").value,
    ingredients: document.querySelector("#inputIngredients").value,
  };

  // Update data in backend
  fetch(`http://localhost:5000/curries/${dishId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      if (response.ok) {
        // Redirect to homepage if update is successful
        window.location.href = "/frontendpart";
      } else {
        // Display error message if update fails
        console.error("Update failed.");
      }
    })
    .catch((error) => console.error(error));
});




