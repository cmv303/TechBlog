async function newFormHandler(event) {
    event.preventDefault();
  
    const blog_name = document.querySelector('#blog_name').value;
    const description = document.querySelector('#description').value;
    const user_name = document.querySelector('#user_name').value;
  
    const response = await fetch(`/api/dish`, {
      method: 'POST',
      body: JSON.stringify({
        blog_name,
        description,
        user_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add blog post');
    }
  }
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  