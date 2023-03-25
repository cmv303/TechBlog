async function newFormHandler(event) {
  event.preventDefault();

  const post_name = document.querySelector("#post_name").value;
  const description = document.querySelector("#description").value;
  const user_name = document.querySelector("#user_name").value;

  const response = await fetch(`/api/user/post`, {
    method: "POST",
    body: JSON.stringify({
      post_name,
      description,
      user_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add new post");
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
