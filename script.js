// Simulated Ingredients and Recipes
const ingredientsForPantry1 = ["ingredient1.jpg", "ingredient2.jpg", "ingredient3.jpg"];
const ingredientsForPantry2 = ["ingredient4.jpg", "ingredient5.jpg", "ingredient6.jpg"];
const ingredientsForPantry3 = ["ingredient7.jpg", "ingredient8.jpg", "ingredient9.jpg"];
const recipes = {
    "pantry1": "Grilled Cheese Sandwich",
    "pantry2": "Vegan Salad",
    "pantry3": "Pasta with Tomato Sauce"
};

const dropZone = document.getElementById('drop-zone');
const ingredientsSection = document.getElementById('ingredients-section');
const recipeSection = document.getElementById('recipe-section');
const ingredientsContainer = document.getElementById('ingredients');
const recipeContainer = document.getElementById('recipe');
const dietSelect = document.getElementById('diet');
const allergiesInput = document.getElementById('allergies');
const likesInput = document.getElementById('likes');
const updatePreferencesButton = document.getElementById('update-preferences');

let selectedPantry = null;
let selectedIngredients = [];

// Drag and Drop
document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('drop', dropItem);

function dragStart(e) {
    selectedPantry = e.target.id;
}

function dragOver(e) {
    e.preventDefault();
}

function dropItem(e) {
    e.preventDefault();
    displayIngredients(selectedPantry);
    displayRecipe(selectedPantry);
}

function displayIngredients(pantryId) {
    ingredientsContainer.innerHTML = ''; // Clear previous ingredients
    selectedIngredients = getIngredientsForPantry(pantryId);
    selectedIngredients.forEach(ingredient => {
        const img = document.createElement('img');
        img.src = `images/${ingredient}`;
        ingredientsContainer.appendChild(img);
    });
    ingredientsSection.style.display = 'block';
}

function getIngredientsForPantry(pantryId) {
    if (pantryId === 'pantry1') return ingredientsForPantry1;
    if (pantryId === 'pantry2') return ingredientsForPantry2;
    return ingredientsForPantry3;
}

function displayRecipe(pantryId) {
    recipeContainer.textContent = `Suggested Recipe: ${recipes[pantryId]}`;
    recipeSection.style.display = 'block';
}

// Update Preferences
updatePreferencesButton.addEventListener('click', () => {
    const diet = dietSelect.value;
    const allergies = allergiesInput.value;
    const likes = likesInput.value;
    alert(`Updated Preferences:\nDiet: ${diet}\nAllergies: ${allergies}\nLikes: ${likes}`);
});
