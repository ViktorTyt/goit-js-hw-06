const showInfoOfCategories = function () {
  const categoriesItemEl = document.querySelectorAll(".item");
  const NumberOfCategories = categoriesItemEl.length;

  console.log(`Number of categories: ${NumberOfCategories}`);

  for (const item of categoriesItemEl) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  }
};
showInfoOfCategories();
