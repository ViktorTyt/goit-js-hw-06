const inputEl = document.querySelector("#validation-input");

const handleTargetInputBlur = (event) => {
  inputEl.dataset.length === event.target.value.length.toString()
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
};

const checkInput = inputEl.addEventListener("blur", handleTargetInputBlur);
