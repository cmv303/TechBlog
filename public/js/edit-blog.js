async function editFormHandler(event) {
    event.preventDefault();
    const blog_name = document.querySelector('#blog_name').value;
    const description = document.querySelector('#description').value;
    const user_name = document.querySelector('#user_name').value;
  
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/dish/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        blog_name,
        description,
        user_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    // If the response is ok, that means that blog post was updated successfully. 
    if (response.ok) {
      document.location.replace(`/blog/${id}`);
    } else {
      alert('Failed to edit blog');
    }
  }
  
  document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);
  