import "./style.css";

const email = document.querySelector("#email");
const zip = document.querySelector("#zipCode");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");
const country = document.querySelector("#country");
const errorList = document.querySelector(".errors");
const form = document.querySelector("#mainForm");

const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const eightCharsOneLetterOneNumber =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/;

function drawListError(error) {
  const newError = document.createElement("li");
  newError.innerText = error;
  errorList.appendChild(newError);
}

function errorCheck() {
  let isError = 0;
  if (emailRegEx.test(email.value)) {
    console.log("Yahooooooo");
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("TO ses posral");
    email.reportValidity();
    console.log(`D'Oh!`);
    isError = 1;
    drawListError("Enter correct email address!");
  }

  if (country.value === "") {
    console.log(`D'Oh!`);
    country.setCustomValidity("You need to select a Country!");
    country.reportValidity();
    isError = 1;
    drawListError("You need to select a country!");
  } else {
    console.log("Yay!");
    country.setCustomValidity("");
  }

  if (zip.value === "") {
    console.log(`D'oh!`);
    zip.setCustomValidity("This field is required!");
    zip.reportValidity();
    isError = 1;
    drawListError("Please enter ZIP code!");
  } else {
    console.log("yay");
    zip.setCustomValidity("");
  }

  if (!eightCharsOneLetterOneNumber.test(password.value)) {
    console.log(`D'Oh!`);
    password.setCustomValidity(
      "Password must be atleast 8 characters and must include one letter and one number!",
    );
    password.reportValidity();
    isError = 1;
    drawListError(
      "Password must be atleast 8 characters and must include one letter and one number!",
    );
  } else {
    console.log("Yay!");
    password.setCustomValidity("");
  }

  if (rePassword.value !== password.value) {
    console.log(`D'Oh!`);
    rePassword.setCustomValidity("Passwords Must Match!");
    rePassword.reportValidity();
    isError = 1;
    drawListError("Passwords must match!");
  } else {
    console.log("Yay!");
    rePassword.setCustomValidity("");
  }
  return isError;
}

// ADD EVENT LISTENERS TO ELEMENTS TO TRIGGER ERROR INFO ON CHANGE
email.addEventListener("change", () => {
  if (emailRegEx.test(email.value)) {
    console.log("Yahooooooo");
    email.setCustomValidity("");
  } else {
    email.setCustomValidity("TO ses posral");
    email.reportValidity();
    console.log(`D'Oh!`);
  }
});

zip.addEventListener("change", () => {
  if (zip.value === "") {
    console.log(`D'oh!`);
    zip.setCustomValidity("This field is required!");
    zip.reportValidity();
  } else {
    console.log("yay");
    zip.setCustomValidity("");
  }
});

password.addEventListener("change", () => {
  if (!eightCharsOneLetterOneNumber.test(password.value)) {
    console.log(`D'Oh!`);
    password.setCustomValidity(
      "Password must be atleast 8 characters and must include one letter and one number!",
    );
    password.reportValidity();
  } else {
    console.log("Yay!");
    password.setCustomValidity("");
  }
});

rePassword.addEventListener("change", () => {
  if (rePassword.value !== password.value) {
    console.log(`D'Oh!`);
    rePassword.setCustomValidity("Passwords Must Match!");
    rePassword.reportValidity();
  } else {
    console.log("Yay!");
    rePassword.setCustomValidity("");
  }
});

country.addEventListener("change", () => {
  if (country.value === "") {
    console.log(`D'Oh!`);
    country.setCustomValidity("You need to select a Country!");
    country.reportValidity();
  } else {
    console.log("Yay!");
    country.setCustomValidity("");
  }
});

// CONTROL FORM SUBMIT EVENT
form.addEventListener("submit", (event) => {
  if (errorCheck()) {
    event.preventDefault();
  } else {
    alert("Clap Clap");
  }
});
