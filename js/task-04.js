const refs = {
  btnIncrement: document.querySelector('[data-action="increment"]'),
  btnDecrement: document.querySelector('[data-action="decrement"]'),
  counterTextValue: document.querySelector("#value"),
};

let counterValue = 0;

const handleClickIncr = () => {
  refs.counterTextValue.textContent = counterValue += 1;
};

const handleClickDecr = () => {
  refs.counterTextValue.textContent = counterValue -= 1;
};

const makeIncrement = refs.btnIncrement.addEventListener(
  "click",
  handleClickIncr
);
const makeDecrement = refs.btnDecrement.addEventListener(
  "click",
  handleClickDecr
);
