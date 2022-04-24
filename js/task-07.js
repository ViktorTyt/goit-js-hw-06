const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const handleInput = (event) => {
  refs.text.style.fontSize = `${event.target.value}px`;
};

refs.input.addEventListener("input", handleInput);
