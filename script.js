const form = document.querySelector("form");
const email = document.getElementById("email");
const error = document.querySelector(".error");

email.addEventListener("input", (e) => {
  error.textContent = "";
});

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    error.textContent = "Oops! Please add your email";
  } else if (email.validity.typeMismatch) {
    error.textContent = "Oops! Please check your email";
  }
}
