
async function addCommentHandler(event, postId) {
    event.preventDefault();

    const commentEntry = document.querySelector(`#commentEntry`);
    const commentOnPost = document.querySelector(`#commentOnPost`);
    if (!commentEntry) {
        console.error('Cannot find comment entry input fields');
        return;
      }
    if (!commentOnPost) {
        console.error('Cannot find comment on post input fields');
        return;
      }
    
    
      

    const commentEntryValue = commentEntry.value.trim();
  const commentOnPostValue = commentOnPost.value;
    
    

    const response = await fetch(`api/comment/:id:${postId}`, {
        method: 'POST',
        body: JSON.stringify({
            commentEntry: commentEntryValue ,
            commentOnPost: commentOnPostValue
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to add comment");
      }
}

document.querySelectorAll('.comment-form').forEach((commentForm) => {
    commentForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const postId = commentForm.getAttribute('data-post_id');
      await addCommentHandler(event, postId);
    });
  });

document.querySelectorAll(".comment-btn").forEach((button) => {
    button.addEventListener("click", async (event) => {
        console.log("are you hitting this?", event.target);
      const postId = event.target.getAttribute("data-post_id");
      const commentEntry = document.querySelector(`#commentEntry`);
      const commentOnPost = document.querySelector(`#commentOnPost`)
      if (!commentEntry) {
        console.error('Cannot find comment entry input fields');
        return;
      }
      if (!commentOnPost) {
        console.error('Cannot find comment on post input fields');
        return;
      }
     
      const commentForm = document.querySelector(`.comment-form`);
      if (!commentForm) {
        console.error('Cannot find comment form');
        return;
      }

      commentForm.addEventListener('submit', async (event) => {
    });
  });
});