const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const handleInput = (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
};
const changeTextSize = inputEl.addEventListener("input", handleInput);
