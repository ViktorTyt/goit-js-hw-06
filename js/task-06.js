const inputEl = document.querySelector("#validation-input");

const handleTargetInputBlur = (event) => {
  Number(inputEl.dataset.length) === Number(event.target.value.length)
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
};

inputEl.addEventListener("blur", handleTargetInputBlur);
