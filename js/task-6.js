let validationInputHtml = document.querySelector("#validation-input");
// validationInputHtml.classList.remove("valid", "invalid");

validationInputHtml.addEventListener("blur", () => {
  const permissibleValue = parseInt(
    validationInputHtml.getAttribute("data-length")
  );

  const enteredValue = validationInputHtml.value;

  if (enteredValue.length === permissibleValue) {
    validationInputHtml.classList.add("valid");
    validationInputHtml.classList.remove("invalid");
  }
  if (enteredValue.length !== permissibleValue) {
    validationInputHtml.classList.add("invalid");

    validationInputHtml.classList.remove("valid");
  }
  if (enteredValue === "")
    validationInputHtml.classList.remove("invalid", "valid");
});




