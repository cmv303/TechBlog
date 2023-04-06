async function addCommentHandler(event) {
  event.preventDefault();

  const postId = event.target.getAttribute("data-post_id");
  console.log("event target", event.target);
  const commentEntry = document.querySelector(`#commentEntry${postId}`).value;
  console.log("are you undefined?, postID", )
 
  console.log("are you also undefined, commentEntry?", event.target.dataset),

  console.log("postId", postId);
  console.log("commentEntry", commentEntry);

  if (!commentEntry) {
    console.error("Cannot find comment entry input fields");
    return;
  }

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

const commentForm = document.querySelector('.comment-form');
if (!commentForm) {
  console.error("Cannot find comment form");
}


document.querySelectorAll(".comment-btn").forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    console.log("are you hitting this?", event.target);
    const postId = event.target.getAttribute("data-post_id");
    const commentEntry = document.querySelector(`#commentEntry${postId}`);
    const commentOnPost = document.querySelector(`#commentOnPost${postId}`);
    // if (!commentEntry || !commentOnPost) {
    //   console.error("Cannot find comment input fields");
    //   return;
    // }
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
    



// commentForm.addEventListener("submit", async (event) => {});
