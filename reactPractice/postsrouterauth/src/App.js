import React, { useEffect, useState } from "react";
import { Route, Link, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { AuthoProvider } from "./components/AuthoProvider";
import { Autorization } from "./components/Autorization";
import { CreatePost } from "./components/CreatePost";
import { Layout } from "./components/Layout";
import { Post } from "./components/Post";
import { PostInfo } from "./components/PostInfo";
import { PostList } from "./components/PostList";
import { RequireAuth } from "./components/RequireAuth";
import { ErrorPage } from "./ErrorPage";

function App() {
  const [posts, setPosts] = useState([
  ])
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => setPosts(data));
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
    <Route path='/main' element={<Navigate to="/" replace/>} />
    <Route index element={<PostList posts={posts}/>} errorElement={<ErrorPage />} />
    <Route path="/:id" element={<PostInfo posts={posts}/>}>
      <Route path="/:id/:el" element={<h1>Hello Bro</h1>}></Route>
   </Route>
    <Route
      path="/create_post"
      element={
      <RequireAuth>
        <CreatePost posts={posts} setPosts={setPosts} />
      </RequireAuth>}
    />
    <Route path="/auto" element={<Autorization />} />
  </Route>
  ))

  return (
    <div className="App">
      <AuthoProvider>
        <RouterProvider router={router} />
      </AuthoProvider>
    </div>
  );
}

export default App;
