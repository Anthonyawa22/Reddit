import React, { useState } from 'react';

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create a new post</h3>
      <label>Title:</label>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <br />
      <label>Content:</label>
      <textarea value={content} onChange={e => setContent(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
