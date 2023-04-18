// let validationInputHtml = document.querySelector("#validation-input");
// // validationInputHtml.classList.remove("valid", "invalid");

// validationInputHtml.addEventListener("blur", () => {
//   const permissibleValue = parseInt(
//     validationInputHtml.getAttribute("data-length")
//   );

//   const enteredValue = validationInputHtml.value;

//   if (enteredValue.length === permissibleValue) {
//     validationInputHtml.classList.add("valid");
//     validationInputHtml.classList.remove("invalid");
//   }
//   if (enteredValue.length !== permissibleValue) {
//     validationInputHtml.classList.add("invalid");

//     validationInputHtml.classList.remove("valid");
//   }
//   if (enteredValue === "")
//     validationInputHtml.classList.remove("invalid", "valid");
// });

////

const validationInputValue = document.querySelector("#validation-input");

const permissibleValue = parseInt(
  validationInputValue.getAttribute("data-length")
);

const enteredValue = validationInputValue.value;

validationInputValue.addEventListener("blur", () => {
  if (enteredValue.length === permissibleValue) {
    validationInputValue.classList.add("valid");
    validationInputValue.classList.remove("invalid");
  }
  if (enteredValue.length !== permissibleValue) {
    validationInputValue.classList.add("invalid");
    validationInputValue.classList.remove("valid");
  }
  if (enteredValue === "") {
    validationInputValue.classList.remove("valid", "invalid");
  }
});
