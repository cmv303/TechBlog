async function editFormHandler(event) {
  event.preventDefault();
  const postId = event.target.getAttribute("data-post_id");
  const editPostName = document.querySelector(`#editPostName${postId}`).value;
  const editPostDescription = document.querySelector(
    `#editPostDescription${postId}`
  ).value;

  // window.location gives access to the URL. Rhe .split() method is used to access the number at the end of the URL, and set that equal to id.
  // const id = window.location.toString().split("/")[
  //   window.location.toString().split("/").length - 1
  // ];

  const response = await fetch(`/edit/${id}`, {
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
  const editPostForm = document.querySelector(`#editPostForm${postId}`);
if (editPostForm) {
  editPostForm.addEventListener("submit", editFormHandler);
}
}



// document
//   .querySelector(".edit-post-btn-form")
//   .addEventListener("click", editFormHandler);
