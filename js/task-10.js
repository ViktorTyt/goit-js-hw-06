function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

const handleCreateBtn = () => {
  createBoxes();
};
const handleDestroyBtn = () => {
  destroyBoxes();
};

const createBoxes = () => {
  let amount = refs.input.value;

  const arrOfBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const startWidth = 30;
    const startHeight = 30;
    const stepIncrWidth = 10;
    const stepIncrHeigth = 10;

    let boxWidth = startWidth + i * stepIncrWidth - stepIncrWidth;
    let boxHeight = startHeight + i * stepIncrHeigth - stepIncrHeigth;

    const box = document.createElement("div");

    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    box.style.background = getRandomHexColor();

    arrOfBoxes.push(box);
  }

  refs.boxes.append(...arrOfBoxes);

  refs.btnDestroy.addEventListener("click", handleDestroyBtn);
};

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
};

refs.btnCreate.addEventListener("click", handleCreateBtn);
