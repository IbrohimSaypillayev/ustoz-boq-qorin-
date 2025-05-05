const input = document.getElementById("input");
const display = document.getElementById("display");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const kiritishBtn = document.getElementById("kiritishBtn");
const colorPicker = document.getElementById("colorPicker");

let currentNumber = 0;

function updateDisplay() {
  display.textContent = currentNumber;
}

kiritishBtn.addEventListener("click", () => {
  const value = parseInt(input.value);
  if (!isNaN(value)) {
    currentNumber = value;
    updateDisplay();
  }
});

plus.addEventListener("click", () => {
  currentNumber++;
  updateDisplay();
});

minus.addEventListener("click", () => {
  currentNumber--;
  updateDisplay();
});

colorPicker.addEventListener("input", () => {
  const selectedColor = colorPicker.value;

  document.body.style.backgroundColor = selectedColor;

  display.style.color = selectedColor;

  const value = parseInt(input.value);
  if (!isNaN(value)) {
    currentNumber = value;
    updateDisplay();
  }
});
