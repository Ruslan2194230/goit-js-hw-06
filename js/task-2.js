const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUl = document.querySelector("#ingredients");
const arrayOfItems = [];

const createIngredientsItem = ingredients.forEach((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  items.className = "item";
  arrayOfItems.push(items);
});

ingredientsUl.append(...arrayOfItems)
