const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const refs = {
  btn: document.querySelector(".change-color"),
  colorText: document.querySelector(".color"),
  body: document.querySelector("body"),
};

const handleTargetButtonClick = () => {
  refs.colorText.textContent = getRandomHexColor();
  refs.body.style = `background-color: ${refs.colorText.textContent}`;
};

const showRandomHexColor = refs.btn.addEventListener(
  "click",
  handleTargetButtonClick
);
