const refs = {
  enterText: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

const handleInput = (event) => {
  event.target.value !== ""
    ? (refs.outputText.textContent = event.target.value)
    : (refs.outputText.textContent = "Anonymous");
};

const getTextFromInput = refs.enterText.addEventListener("input", handleInput);
