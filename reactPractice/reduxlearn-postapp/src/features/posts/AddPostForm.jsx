import { nanoid } from '@reduxjs/toolkit';
import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectedAllUsers } from '../users/usersSlice';
import { postAded } from './postsSlice';

const AddPostForm = () => {
    const [newPost, setPost] = useState({title: "", content: "", userId: ""});
    const dispatch = useDispatch();
    const users = useSelector(selectedAllUsers);
    const btnDisb = newPost.title && newPost.content ? false : true;

    const createNewPost = (e) => {
        e.preventDefault();

        if (newPost.title && newPost.content) {
            dispatch(postAded(newPost));
        }     
        setPost({title: "", content: "", userId: ""});
    }

    const renderedUsers = useMemo(() => {
        return users.map(user => 
            <option key={user.id}>{user.name}</option>)
    }, [users])


  return (
    <section>
      <form autoComplete="off" onSubmit={(e) => createNewPost(e)}>
        <label>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={(e) => setPost({ ...newPost, title: e.target.value })}
          />
        </label>
        <label>
          Author:   
          <select
            value={newPost.userId}
            onChange={(e) => {
              setPost({ ...newPost, userId: e.target.value });
            }}
          >
            <option>Unknown Author</option>
            {renderedUsers}
          </select>
        </label>
        <label>
          Content:{" "}
          <input
            type="text"
            name="content"
            value={newPost.content}
            onChange={(e) => setPost({ ...newPost, content: e.target.value })}
          />
        </label>
        <input type="submit" disabled={btnDisb} value="Submit" />
      </form>
    </section>
  );
}

export default AddPostForm