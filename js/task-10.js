const refs = {
  input: document.querySelector("#controls input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
};

console.log(refs.input);
console.log(refs.btnCreate);
console.log(refs.btnDestroy);

const handleTragetBtnClick = (event) => {
  console.log(15);
  console.log(document.createElement("div") * );
};
const createCollection = refs.btnCreate.addEventListener(
  "click",
  handleTragetBtnClick
);
