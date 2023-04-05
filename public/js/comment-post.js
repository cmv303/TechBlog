
async function addCommentHandler(event, postId) {
    event.preventDefault();

    const commentEntry = document.querySelector(`#commentEntry${postId}`).value.trim();
    const commentOnPost = document.querySelector(`#commentOnPost${postId}`).value;


    const response = await fetch(`/post/${postId}/comment`, {
        method: 'POST',
        body: JSON.stringify({
            commentEntry,
            commentOnPost
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.reload();
      } else {
        alert("Failed to add comment");
      }
}


document.querySelectorAll(".comment-btn").forEach((button) => {
    button.addEventListener("click", async (event) => {
      const postId = event.target.getAttribute("data-post_id");
      const commentEntry = document.querySelector(`#commentEntry${postId}`);
     

      commentForm = document.querySelector(`#commentForm${postId} .comment-form`);
      
      
      commentForm.addEventListener('submit', (event) => addCommentHandler(event, postId));
    });
  });