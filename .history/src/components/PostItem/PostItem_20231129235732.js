import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>Upvotes: {post.upvotes}</p>
      <button>Upvote</button>
      <button>Downvote</button>
    </div>
  );
};

export default PostItem;
