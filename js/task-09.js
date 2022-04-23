const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  btn: document.querySelector(".change-color"),
  colorText: document.querySelector(".color"),
};

const handleTargetButtonClick = () => {
  refs.colorText.textContent = getRandomHexColor();
};

const showRandomHexColor = refs.btn.addEventListener(
  "click",
  handleTargetButtonClick
);
