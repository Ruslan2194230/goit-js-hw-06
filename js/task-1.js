// const totalCategories = document.querySelectorAll(".item");
// console.log(`В списке ${totalCategories.length} категории.`);

// const categoriesArray = [...totalCategories].map((category) =>
//   console.log(`категория: ${category.children[0].textContent}
// количество елементов elements: ${category.children[1].children.length}`)
// );

const totalCategories = document.querySelectorAll('.item')
console.log(`в списке categories ${totalCategories.length} категорий`);

const categoriesArray = [...totalCategories].map(category => {
  const categoryTitleIndex = 0;
  const categoryListIndex = 1;
  console.log(`в категории ${category.children[categoryTitleIndex].textContent} ${category.children[categoryListIndex].children.length} элементов`);
})
