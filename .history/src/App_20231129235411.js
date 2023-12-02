import React, { useState } from 'react';
import {PostList} from './components/PostList';
import {PostForm} from './components/PostForm';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.', upvotes: 0 },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.', upvotes: 0 },
  ]);

  const addPost = newPost => {
    setPosts([...posts, { id: posts.length + 1, ...newPost, upvotes: 0 }]);
  };

  return (
    <div>
      <PostList posts={posts} />
      <PostForm onSubmit={addPost} />
    </div>
  );
};

export default App;

