const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsUl = document.querySelector("#ingredients");
// const arrayOfItems = [];

// const createIngredientsItem = ingredients.forEach((ingredient) => {
//   const items = document.createElement("li");
//   items.textContent = ingredient;
//   items.className = "item";
//   arrayOfItems.push(items);
// });

// ingredientsUl.append(...arrayOfItems)

/// другой вариант

// const ingredientsUl = document.querySelector("#ingredients");

// const createIngredientsItem = ingredients.map((ingredient) => {
//   const items = document.createElement("li");
//   items.textContent = ingredient;
//   items.className = "item";

//   return items;
// });

// ingredientsUl.append(...createIngredientsItem);

/// тоже через map только через шаблонную строку
const ingredientsUl = document.querySelector("#ingredients");

const createIngredientsItem = ingredients.map(
  (ingredient) => `<li class='item'> ${ingredient} </li>`
);

ingredientsUl.append(...createIngredientsItem);
