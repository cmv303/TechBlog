//handle signupFormHandler
const signupFormHandler = async function (event) {
  event.preventDefault();
  console.log("Am i in the signup.js???");
  const emailEl = document.querySelector("#email-signUpId");
  const passwordEl = document.querySelector("#password-signUpId");

  //POST request to server to create new user
  const response = await fetch("api/user/signup", {
    method: "POST",
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("You may have already signed up!");
  }
};

document
  .querySelector(".email-form")
  .addEventListener("submit", signupFormHandler);
