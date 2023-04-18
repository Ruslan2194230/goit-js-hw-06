const incomingDataInput = document.querySelector("#name-input");
const outgoingDataInput = document.querySelector("#name-output");

incomingDataInput.addEventListener("input", () => {
  if (incomingDataInput.value !== "") {
    outgoingDataInput.innerHTML = incomingDataInput.value;
    return;
  }
  outgoingDataInput.textContent = "незнакомец";
});

////

// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');

// inputName.addEventListener('input', () => {
// if(inputName.value !== ''){
//   outputName.textContent = inputName.value
//   return
// }
// outputName.textContent = 'незнакомец'
// })


