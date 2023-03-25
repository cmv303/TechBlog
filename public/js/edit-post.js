async function editFormHandler(event) {
  event.preventDefault();
  const post_name = document.querySelector("#post_name").value;
  const description = document.querySelector("#description").value;
  const user_name = document.querySelector("#user_name").value;

  // window.location gives access to the URL. Rhe .split() method is used to access the number at the end of the URL, and set that equal to id.
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_name,
      description,
      user_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // If the response is ok, post is updated successfully.
  if (response.ok) {
    document.location.replace(`/post/${id}`);
  } else {
    alert("Failed to edit post");
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
