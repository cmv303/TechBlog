async function editFormHandler(event) {
  event.preventDefault();
  const postId = event.target.getAttribute("data-post_id");
  const editPostName = document.querySelector(`#editPostName${postId}`).value;
  const editPostDescription = document.querySelector(
    `#editPostDescription${postId}`
  ).value;

  const response = await fetch(`/edit/:id${postId}`, {
    method: "PUT",
    body: JSON.stringify({
      post_name: editPostName,
      description: editPostDescription,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // If the response is ok, post is updated successfully.
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to edit post");
  }
}
document.querySelectorAll(".editPost-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const postId = event.target.getAttribute("data-post_id");
    const editPostForm = document.querySelector(`#editPostForm${postId}`);
    editPostForm.classList.remove("hide");
  });
});

document.querySelectorAll(".cancelEdit-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const postId = event.target.getAttribute("data-post_id");
    const editPostForm = document.querySelector(`#editPostForm${postId}`);
    editPostForm.classList.add("hide");
  });
});

const saveEditBtn = document.querySelector(".saveEdit-btn");
  saveEditBtn.addEventListener("click", (event) => {
    const postId = event.target.getAttribute("data-post_id");
    console.log("postId", postId);
    const editPostForm = document.querySelector(`#editPostForm${postId}`);
    editFormHandler(event);
    editPostForm.classList.add("hide");
  });
