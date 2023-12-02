import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Reddit Clone</h2>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
