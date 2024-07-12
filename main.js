const form = document.getElementById("form");
const emailFormField = document.getElementById("email");
const dismissBtn = document.getElementById("dismiss-btn");
const subscription = document.getElementById("subscription");
const confirmation = document.getElementById("confirmation");
const emailField = document.getElementById("email-field");
const errorField = document.getElementById("error-msg");

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", handleDismiss);

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const emailAddress = data.email;
  const emailValidated = validateEmail(emailAddress);

  if (emailValidated) {
    emailField.innerText = emailAddress;
    subscription.classList.add("hidden");
    subscription.setAttribute("aria-hidden", "true");
    confirmation.classList.remove("hidden");
    confirmation.removeAttribute("aria-hidden");
  } else {
    emailFormField.classList.add("error");
    errorField.innerText = "Valid email required";
  }
}

function handleDismiss(e) {
  e.preventDefault();
  form.reset();
  emailFormField.classList.remove("error");
  errorField.innerText = "";
  subscription.classList.remove("hidden");
  subscription.removeAttribute("aria-hidden");
  confirmation.classList.add("hidden");
  confirmation.setAttribute("aria-hidden", "true");
}

function validateEmail(emailAddress) {
  return emailAddress.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}