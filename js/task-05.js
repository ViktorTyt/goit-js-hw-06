const refs = {
  enterText: document.querySelector("#name-input"),
  outputText: document.querySelector("#name-output"),
};

const handleInput = (event) => {
  const DEFAULT_VALUE = "Anonymous";

  event.target.value !== ""
    ? (refs.outputText.textContent = event.target.value)
    : (refs.outputText.textContent = DEFAULT_VALUE);
};

refs.enterText.addEventListener("input", handleInput);
