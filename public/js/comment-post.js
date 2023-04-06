async function addCommentHandler(event) {
  event.preventDefault();

  const postId = { post_id: event.target.elements.commentOnPost };
  const commentEntry = {
    commentEntry: event.target.elements.commentEntry.value,
  };

  console.log("postId", postId);
  console.log("commentEntry", commentEntry);
  // const commentOnPost = document.querySelector(`#commentOnPost`);
  if (!commentEntry) {
    console.error("Cannot find comment entry input fields");
    return;
  }
  // if (!commentOnPost) {
  //     console.error('Cannot find comment on post input fields');
  //     return;
  //   }

  // const commentEntryValue = commentEntry.value.trim();
  // console.log("commentEntryValue", commentEntry.value)
  //   const commentOnPostValue = commentOnPost.value;

  const response = await fetch(`api/comment/:post_id${postId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...postId,
      ...commentEntry,
    }),
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to add comment");
  }
}

document.querySelectorAll(".comment-form").forEach((commentForm) => {
  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const postId = commentForm.getAttribute("data-post_id");
    await addCommentHandler(event);
  });
});

// document.querySelectorAll(".comment-btn").forEach((button) => {
//     button.addEventListener("click", async (event) => {
//         console.log("are you hitting this?", event.target);
//       const postId = event.target.getAttribute("data-post_id");
//   const commentEntry = document.querySelector(`#commentEntry`);
//   const commentOnPost = document.querySelector(`#commentOnPost`)
//   if (!commentEntry) {
//     console.error('Cannot find comment entry input fields');
//     return;
//   }
//   if (!commentOnPost) {
//     console.error('Cannot find comment on post input fields');
//     return;
//   }

const commentForm = document.querySelector(`.comment-form`);
if (!commentForm) {
  console.error("Cannot find comment form");
  // return;
}

commentForm.addEventListener("submit", async (event) => {});
//   });
// });
