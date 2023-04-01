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

// const incomingDataInput = document.querySelector("#name-input");
// const outgoingDataInput = document.querySelector("#name-output");

// incomingDataInput.oninput = function () {
//   if (incomingDataInput.value === "") {
//     outgoingDataInput.innerHTML = "незнакомец";
//   }
//   outgoingDataInput.innerHTML = incomingDataInput.value;
// };
