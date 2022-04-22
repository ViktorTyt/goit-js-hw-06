const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const createListOfIngredients = function (args) {
//   const listEl = document.querySelector("#ingredients");
//   for (let arg of args) {
//     const item = document.createElement("li");
//     item.className = "item";
//     item.textContent = arg;
//     listEl.append(item);
//   }
//   console.log(listEl);
// };
// createListOfIngredients(ingredients);

const createListOfIngredients = (args) => {
  const listEl = document.querySelector("#ingredients");
  const arrayOfItem = [];
  args.map((arg) => {
    const item = document.createElement("li");
    item.className = "item";
    item.textContent = arg;
    arrayOfItem.push(item);
  });
  listEl.append(...arrayOfItem);
  console.log(listEl);
};
createListOfIngredients(ingredients);
