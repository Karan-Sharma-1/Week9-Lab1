// app.js

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// const blog = {
//   title: 'New Blog',
//   body: 'This is the content of the new blog.',
//   userId: 1,
// };

// const addBlog = async () => {
//   const response = await fetch(apiUrl, {
//     method: 'POST',
//     body: JSON.stringify(blog),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const json = await response.json();
//   console.log('New Blog added:', json);
// };

// // Example Usage
// addBlog();


// app.js

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// const fetchBlogs = async () => {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   console.log('All Blogs:', data);
// };

// // Example Usage
// fetchBlogs();


// app.js
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// const blogId = 3; // Replace with the desired blog ID for testing

// const fetchBlog = async (id) => {
//   const response = await fetch(`${apiUrl}/${id}`);
//   const data = await response.json();
//   console.log('Single Blog:', data);
// };

// // Example Usage
// fetchBlog(blogId);


// app.js

// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
// const blogIdToUpdate = 5; // Replace with the desired blog ID for testing
// const updatedData = { title: 'Updated Blog', body: 'This blog has been updated.' };

// const updateBlog = async (blogId, updatedData) => {
//   const response = await fetch(`${apiUrl}/${blogId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedData),
//   });

//   const updatedBlog = await response.json();
//   console.log('Blog updated:', updatedBlog);
// };

// // Example Usage
// updateBlog(blogIdToUpdate, updatedData);


// app.js

// const fetch = require('node-fetch');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
const blogIdToDelete = 101; // Replace with the desired blog ID for testing

const deleteBlog = async (blogId) => {
  await fetch(`${apiUrl}/${blogId}`, {
    method: 'DELETE',
  });

  console.log('Blog deleted successfully');
};

// Example Usage
deleteBlog(blogIdToDelete);