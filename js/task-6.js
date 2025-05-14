function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");

function generateBoxes(count) {
  let boxSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = generateRandomColor();
    fragment.appendChild(newBox);
    boxSize += 10;
  }

  container.appendChild(fragment);
}

function handleCreateClick() {
  container.innerHTML = "";
  const inputValue = Number(document.querySelector("input").value);
  if (inputValue >= 1 && inputValue <= 100) {
    generateBoxes(inputValue);
  }
}

function handleDestroyClick(event) {
  event.preventDefault();
  container.innerHTML = "";
}

createButton.addEventListener("click", handleCreateClick);
destroyButton.addEventListener("click", handleDestroyClick);
