const loginForm = document.querySelector(".login-form");

function processFormSubmission(event) {
  event.preventDefault();
  const { email, password } = Object.fromEntries(new FormData(loginForm));

  if (!email.trim() || !password.trim()) {
    alert("Please fill in all fields.");
    return;
  }

  console.log({ email: email.trim(), password: password.trim() });
  loginForm.reset();
}

loginForm.addEventListener("submit", processFormSubmission);
