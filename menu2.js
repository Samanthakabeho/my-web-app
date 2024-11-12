const menuContainer = document.getElementById("menu-container");

// Function to render the menu
function renderMenu() {
  // Loop through each category
  Object.keys(menuData).forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.className = "menu-category";
    categoryContainer.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
    menuContainer.appendChild(categoryContainer);

    // Loop through each item in the category
    menuData[category].forEach((item) => {
      const itemContainer = document.createElement("div");
      itemContainer.className = "menu-item";
      itemContainer.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>Price: $${item.price.toFixed(2)}</p>
      `;
      categoryContainer.appendChild(itemContainer);
    });
  });
}

// Render the menu