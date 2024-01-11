let count = 0;

let value = document.querySelector("#numberValue");
let buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decreaseButton")) {
      count--;
    } else if (styles.contains("increaseButton")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
