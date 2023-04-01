button = {
  plus: document.querySelector("[data-action = increment]"),
  minus: document.querySelector("[data-action = decrement]"),
  spanRes: document.querySelector("#value"),
};

counterValue = 0;

const increment = () => {
  counterValue += 1;
  button.spanRes.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  button.spanRes.textContent = counterValue;
};

button.plus.addEventListener("clisk", increment);
button.minus.addEventListener("click", decrement);
