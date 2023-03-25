const signupFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email-signUpId");
  const usernameEl = document.querySelector("#username-signUpId");
  const passwordEl = document.querySelector("#password-signUpId");

  const response = await fetch("/user", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
