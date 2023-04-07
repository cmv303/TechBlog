async function deletePostHandler(event) {
    event.preventDefault();
    const postId = event.target.getAttribute("data-post_id");
  
    const response = await fetch(`api/new/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    // If the response is ok, post is deleted successfully.
    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to delete post");
    }
  }
  
  document.querySelectorAll(".deletePost-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const postId = event.target.getAttribute("data-post_id");
      if (confirm("Are you sure you want to delete this post?")) {
        deletePostHandler(event);
      }
    });
  });
  