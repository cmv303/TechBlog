//handle loginFormHandler
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-loginId").value.trim();
  const password = document.querySelector("#password-loginId").value.trim();

  //Validate that email and password are both true before logging user in
  if (email && password) {
    const response = await fetch("api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Incorrect Username or Password.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
