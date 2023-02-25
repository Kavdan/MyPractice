import React from "react";
import AddPostForm from "./features/posts/AddPostForm";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <hr />
      <PostsList />
    </div>
  );
}

export default App;
