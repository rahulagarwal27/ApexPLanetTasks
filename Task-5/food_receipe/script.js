const recipes = [
  {
    title: "Grilled Chicken",
    image:
      "https://images.unsplash.com/photo-1592011432621-f7f576f44484?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "non-veg",
    description: "Tasty grilled chicken with herbs.",
  },
  {
    title: "Vegan Tofu Bowl",
    image:
      "https://images.unsplash.com/photo-1546069901-5ec6a79120b0?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "vegan",
    description: "Delicious tofu bowl with veggies.",
  },
  {
    title: "Gluten-Free Pasta",
    image:
      "https://plus.unsplash.com/premium_photo-1705404738522-9fbccb624cf6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "gluten-free",
    description: "Healthy gluten-free pasta with tomato sauce.",
  },
  {
    title: "Vegetarian Pizza",
    image:
      "https://images.unsplash.com/photo-1617470703128-26a0fc9af10f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "vegetarian",
    description: "Classic vegetarian pizza with cheese.",
  },

  {
    title: "Spicy Ramen Bowl",
    image:
      "https://images.unsplash.com/photo-1706128998662-3d85339fb6c8?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "non-veg",
    description: "Hot and spicy ramen with boiled egg and chicken slices.",
  },
  {
    title: "Avocado Toast",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1170&auto=format&fit=crop",
    diet: "vegan",
    description: "Crispy toast topped with fresh avocado, tomatoes and herbs.",
  },
  {
    title: "Quinoa Salad",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop",
    diet: "gluten-free",
    description: "Colorful quinoa salad packed with vegetables and protein.",
  },
  {
    title: "Paneer Tikka",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1317&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "vegetarian",
    description: "Marinated paneer cubes grilled with spices and peppers.",
  },
  {
    title: "Berry Smoothie Bowl",
    image:
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1170&auto=format&fit=crop",
    diet: "vegan",
    description: "A refreshing smoothie bowl topped with berries and seeds.",
  },
  {
    title: "Grilled Salmon",
    image:
      "https://images.unsplash.com/photo-1676300185165-3f543c1fcb72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "non-veg",
    description: "Juicy grilled salmon fillet served with greens and lemon.",
  },
  {
    title: "Zucchini Noodles",
    image:
      "https://images.unsplash.com/photo-1649173284332-9d95b317fbd3?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    diet: "gluten-free",
    description: "Low-carb zucchini noodles sautéed with garlic and olive oil.",
  },
  {
    title: "Mushroom Risotto",
    image:
      "https://www.australianmushrooms.com.au/wp-content/uploads/2019/03/Oven-baked-Chicken-Mushroom-Risotto-SMALL-2000x1500.jpg",
    diet: "vegetarian",
    description: "Creamy risotto cooked with wild mushrooms and herbs.",
  },
];

function renderRecipes(filteredRecipes) {
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  if (filteredRecipes.length === 0) {
    list.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  filteredRecipes.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" loading="lazy"
        onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
      <div class="content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <small>Diet: ${recipe.diet}</small><br/>
        <button class="delete-btn" onclick="deleteRecipe(${index})">🗑️ Delete</button>
      </div>
    `;
    list.appendChild(card);
  });
}

function searchRecipes() {
  showLoading();
  setTimeout(() => {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const diet = document.getElementById("dietFilter").value;

    const filtered = recipes.filter((recipe) => {
      const matchesKeyword = recipe.title.toLowerCase().includes(keyword);
      const matchesDiet = diet ? recipe.diet === diet : true;
      return matchesKeyword && matchesDiet;
    });

    renderRecipes(filtered);
    hideLoading();
  }, 500);
}

function addNewRecipe(event) {
  event.preventDefault();
  showLoading();

  setTimeout(() => {
    const title = document.getElementById("newTitle").value.trim();
    const image = document.getElementById("newImage").value.trim();
    const diet = document.getElementById("newDiet").value;
    const description = document.getElementById("newDesc").value.trim();

    if (!title || !image || !diet || !description) {
      alert("Please fill in all fields.");
      hideLoading();
      return;
    }

    const newRecipe = { title, image, diet, description };
    recipes.push(newRecipe);
    renderRecipes(recipes);
    document.getElementById("addRecipeForm").reset();

    hideLoading();
  }, 500);
}

function deleteRecipe(index) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    recipes.splice(index, 1);
    renderRecipes(recipes);
  }
}

function showLoading() {
  document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loading').style.display = 'none';
}

window.onload = () => {
  showLoading();
  setTimeout(() => {
    renderRecipes(recipes);
    hideLoading();
  }, 500);
};

