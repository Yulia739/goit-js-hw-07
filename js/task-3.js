const nameInput = document.querySelector("#name-input");
const outputSpan = document.querySelector("#name-output");
const defaultName = "Anonymous";

function updateNameOutput() {
  const inputText = nameInput.value.trim();
  outputSpan.textContent = inputText || defaultName;
}

nameInput.addEventListener("input", updateNameOutput);
