const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createListOfIngredients = (args) => {
  const listEl = document.querySelector("#ingredients");

  const arrayOfItems = [];

  args.map((arg) => {
    const item = document.createElement("li");
    item.className = "item";
    item.textContent = arg;
    arrayOfItems.push(item);
  });

  listEl.append(...arrayOfItems);
};

createListOfIngredients(ingredients);
