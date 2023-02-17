import React from "react";

const Post = ({deletePost, post}) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
      }}
    >
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => deletePost(post.id)}>Удалить</button>
    </div>
  );
};

export default Post;
