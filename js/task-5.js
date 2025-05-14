function generateRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");
const colorDisplay = document.querySelector(".color");
const pageBody = document.querySelector("body");

function updateBackgroundColor() {
  const newColor = generateRandomHexColor();
  pageBody.style.backgroundColor = newColor;
  colorDisplay.textContent = newColor;
}

colorButton.addEventListener("click", updateBackgroundColor);
