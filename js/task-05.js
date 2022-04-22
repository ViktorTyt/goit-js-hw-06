const enterTextEl = document.querySelector("#name-input");
const outputTextEl = document.querySelector("#name-output");

const handleInput = (event) => {
  event.target.value !== ""
    ? (outputTextEl.textContent = event.target.value)
    : (outputTextEl.textContent = "Anonymous");
};
enterTextEl.addEventListener("input", handleInput);
