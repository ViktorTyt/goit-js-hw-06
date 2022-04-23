const showInfoOfCategories = function () {
  const categoriesItemAllEl = document.querySelectorAll(".item");

  const NumberOfCategories = categoriesItemAllEl.length;

  console.log(`Number of categories: ${NumberOfCategories}`);

  for (const item of categoriesItemAllEl) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  }
};

showInfoOfCategories();
