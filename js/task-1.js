const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);

const categoriesArray = [...totalCategories].map((category) =>
  console.log(`категория: ${category.children[0].textContent}
количество елементов elements: ${category.children[1].children.length}`)
);





