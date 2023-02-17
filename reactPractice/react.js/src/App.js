import React, { useState, useMemo, useEffect } from 'react';
import Form from './components/Form';
import Post from './components/Post';
import ChangePosts from './components/ChangePosts';
import { Mymodal } from './components/Mymodal';
import { usePage, usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import { useFetching } from './hooks/useFetching';
import totalPagesCounter from './utils/totalPageCounter';

const App = () => {
  const [posts, setPosts] = useState([
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [showModal, setShowModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10);
  const pagesCount = usePage(limit, totalPages);
  const [page, setPage] = useState(1);

  const [fetching, error] = useFetching(async () => {
    const posts = await PostService.getPosts(limit, page);
    setPosts(posts.data);
    setTotalPages(totalPagesCounter(limit, posts.headers['x-total-count']));
  })


  useEffect(() => {
    if (error){
      console.log(error);
      return;
    }
    fetching()
  }, [page])


  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const checkIfDuplicatePost = (newPost) => {
    const newPostStr = (newPost.title + ' ' + newPost.content).toLowerCase();
    return posts.some((post) => {
      const postStr = (post.title + ' ' + post.content).toLowerCase();
      return postStr === newPostStr;
    });
  };

  const searchPosts = (searchValue) => {
    setFilter({...filter, query: searchValue });
  };

  return (
    <div className="App">
      <Mymodal visible={showModal} setVisible={setShowModal}>
      <Form onAddPost={addPost} comparePosts={checkIfDuplicatePost}/>
      </Mymodal>
      <ChangePosts posts={posts} setPosts={setPosts} />
      <hr />
      <input type={'search'} onChange={(e) => searchPosts(e.target.value.replace(' ', ''))} />
      <hr />
      <select value={filter.sort} onChange={(e) => setFilter({...filter, sort: e.target.value.replace(' ', '').toLowerCase()})}>
        <option value="" disabled>
          Sort By
        </option>
        <option value="title">Title</option>
        <option value="content">Content</option>
      </select>
      <hr />
      <button onClick={() => setShowModal(true)}>Add Post</button>
      <hr />
      {sortedAndSearchedPosts && sortedAndSearchedPosts.length && !error ? sortedAndSearchedPosts.map((post) => <Post key={post.id} 
                                 post={post}  
                                 deletePost={deletePost}
                                 />) : error ? <h1>Произошла ошибка!</h1> : <h1>No Results</h1>}
      <div>{pagesCount.map((p) => <span key={p}
                                        onClick={() => setPage(p)}
                                  >{p}</span>)}</div>
    </div>
  );
}

export default App;
