const btnIncrementEl = document.querySelector('[data-action="increment"]');
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

const handleClickIncr = () => {
  valueEl.textContent = counterValue += 1;
};

const handleClickDecr = () => {
  valueEl.textContent = counterValue -= 1;
};

const makeIncrement = btnIncrementEl.addEventListener("click", handleClickIncr);
const makeDecrement = btnDecrementEl.addEventListener("click", handleClickDecr);
