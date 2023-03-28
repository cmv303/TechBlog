async function newFormHandler(event) {
  event.preventDefault();
  console.log("add-post route??");

  const post_name = document.querySelector("#post-name").value;
  const description = document.querySelector("#description").value;

  const response = await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      post_name,
      description,
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
  .querySelector(".addPost-form")
  .addEventListener("submit", newFormHandler);
