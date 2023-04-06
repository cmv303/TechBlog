const logout = async () => {
  const response = await fetch("api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("You were already logged out.");
  }
};

document.querySelector(".logout-form").addEventListener("click", logout);
