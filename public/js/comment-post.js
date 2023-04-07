//handle addCommentHandler
async function addCommentHandler(event) {
  event.preventDefault();

  const postId = event.target.getAttribute("data-post_id");
  const commentEntry = document.querySelector(`#commentEntry${postId}`).value;

  if (!commentEntry) {
    console.error("Cannot find comment entry input fields");
    return;
  }

  //POST request to server with comment data
  const response = await fetch(`api/comment/${postId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      postId,
      commentEntry,
    }),
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to add comment");
  }
}

const commentForm = document.querySelector(".comment-form");
if (!commentForm) {
  console.error("Cannot find comment form");
}

//iterate through comment buttons, since each post has one
document.querySelectorAll(".comment-btn").forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute("data-post_id");
    const commentEntry = document.querySelector(`#commentEntry${postId}`);
    const commentOnPost = document.querySelector(`#commentOnPost${postId}`);

    addCommentHandler(event, postId);
    commentEntry.classList.add("hide");
    const commentForm = document.querySelector(
      `#commentForm${postId} .comment-form`
    );
    if (!commentForm) {
      console.error("Cannot find comment form");
      return;
    }

    commentForm.classList.remove("hide");
  });
});
