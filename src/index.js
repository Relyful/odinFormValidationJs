import "./style.css";

const email = document.querySelector("#email");
const zip = document.querySelector("#zipCode");
const password = document.querySelector("#password");
const rePassword = document.querySelector("#rePassword");
const country = document.querySelector("#country");
const errorList = document.querySelector(".errors");
const form = document.querySelector("#mainForm");
const emailError = document.querySelector(".emailError");
const countryError = document.querySelector(".countryError");
const zipError = document.querySelector(".zipError");
const passwordError = document.querySelector(".passwordError");
const rePassError = document.querySelector(".rePassError");

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
  errorList.replaceChildren();
  let isError = 0;
  if (!emailRegEx.test(email.value)) {
    isError = 1;
    drawListError("Enter correct email address!");
  }

  if (country.value === "") {
    isError = 1;
    drawListError("You need to select a country!");
  }

  if (zip.value === "") {
    isError = 1;
    drawListError("Please enter ZIP code!");
  }

  if (!eightCharsOneLetterOneNumber.test(password.value)) {
    isError = 1;
    drawListError(
      "Password must be atleast 8 characters and must include one letter and one number!",
    );
  }

  if (rePassword.value !== password.value) {
    isError = 1;
    drawListError("Passwords must match!");
  }
  return isError;
}

// ADD EVENT LISTENERS TO ELEMENTS TO TRIGGER ERROR INFO ON CHANGE
email.addEventListener("change", () => {
  if (emailRegEx.test(email.value)) {
    console.log("Yahooooooo");
    email.setCustomValidity("");
    emailError.innerHTML = "";
  } else {
    email.setCustomValidity("Enter correct emailaddress!");
    emailError.innerText = "Enter correct emailaddress!";
    email.reportValidity();
    console.log(`D'Oh!`);
  }
});

zip.addEventListener("change", () => {
  if (zip.value === "") {
    console.log(`D'oh!`);
    zip.setCustomValidity("This field is required!");
    zip.reportValidity();
    zipError.innerHTML = "This field is required!";
  } else {
    console.log("yay");
    zip.setCustomValidity("");
    zipError.innerHTML = '';
  }
});

password.addEventListener("change", () => {
  if (!eightCharsOneLetterOneNumber.test(password.value)) {
    console.log(`D'Oh!`);
    password.setCustomValidity(
      "Password must be atleast 8 characters and must include one letter and one number!",
    );
    password.reportValidity();
    passwordError.innerHTML = "Password must be atleast 8 characters and must include one letter and one number!";
  } else {
    console.log("Yay!");
    password.setCustomValidity("");
    passwordError.innerHTML = '';
  }
});

rePassword.addEventListener("change", () => {
  if (rePassword.value !== password.value) {
    console.log(`D'Oh!`);
    rePassword.setCustomValidity("Passwords Must Match!");
    rePassword.reportValidity();
    rePassError.innerHTML = "Passwords not be empty and must match!";
  } else {
    console.log("Yay!");
    rePassword.setCustomValidity("");
    rePassError.innerHTML = '';
  }
});

country.addEventListener("change", () => {
  if (country.value === "") {
    console.log(`D'Oh!`);
    country.setCustomValidity("You need to select a Country!");
    country.reportValidity();
    countryError.innerHTML = "You need to select a Country!";
  } else {
    console.log("Yay!");
    country.setCustomValidity("");
    countryError.innerHTML = '';
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
