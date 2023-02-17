import React, { useState } from "react";
const ChangePost = ({ posts, setPosts}) => {
  const [selectedPost, setSelectedPost] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const newPosts = posts.map(post => {
      if (JSON.stringify(post) === selectedPost) {
        return {...post, title: newTitle, content: newContent };
      }
      return post;
    });

    setPosts(newPosts);
    setSelectedPost("");
    setNewTitle("");
    setNewContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Change Post:
          <select value={selectedPost} onChange={e => setSelectedPost(e.target.value)}>
            {/* {console.log(selectedPost)} */}
            <option value={null}>--Select a Post--</option>
            {posts.map(post => (
              <option key={post.id} value={JSON.stringify(post)}>
                {post.title}
              </option>
            ))}
          </select>
        </label>
        {selectedPost && (
          <>
            <div>
              <label>New Title: </label>
              <input
                type="text"
                value={newTitle}
                onChange={e => setNewTitle(e.target.value)}
              />
            </div>
            <div>
            <label>New Content: </label>
              <input
                type="text"
                value={newContent}
                onChange={e => setNewContent(e.target.value)}
              />
            </div>
            <button type="submit">Save Changes</button>
          </>
        )}
      </form>
    </div>
  );
};

export default ChangePost;