let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let changeColorButton = document.getElementById("changeColor");
let colorName = document.getElementById("colorName");
changeColorButton.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomumber()];
  }
  colorName.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomumber() {
  return Math.floor(Math.random() * hex.length);
}
