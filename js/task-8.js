

const divControls = document.querySelector("#controls");
const input_divControls = document.querySelector("#controls input");
const btnRender = document.querySelector("[data-action = 'render']");
const btnDestroy = document.querySelector("[data-action = 'destroy']");
const divBoxes = document.querySelector("#boxes");

function createBoxes() {
  const boxes = [];
  for (let i = 0; i < 100; i++) {
    const box = document.createElement("div");

    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomColor();
    boxes.push(box);
  }

  divBoxes.append(...boxes);
  console.log(divBoxes);
}
function getRandomColor() {
  return `rgb(${Math.round(Math.random() * 256)}, 
  ${Math.round(Math.random() * 256)}, 
  ${Math.round(Math.random() * 256)})`;
}

function destroy() {
  divBoxes.innerHTML = "";
}

btnRender.addEventListener("click", () => {
  const amount = parseInt(input_divControls.value);
  console.log(`нажали на рендер. amount: ${amount}`);

  createBoxes(amount);
});

btnDestroy.addEventListener("click", () => destroy());





