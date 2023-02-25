import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addLikes, disLikes, selectedAllPosts } from './postsSlice';
import TimeAgo from './TimeAgo';

export const PostsList = () => {
    const posts = useSelector(selectedAllPosts);
    const dispatch = useDispatch();
    const sortedPosts = posts.slice().sort((a, b) => (b.date).localeCompare(a.date));

    const renderedPosts = sortedPosts.map((post) => {
        return <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.userId}</p>
            <p><TimeAgo timestapm={post.date}/></p>
            <p>{post.likes}</p>

            <button onClick={() => dispatch(addLikes(post.id))}>like +</button>
            <button onClick={() => dispatch(disLikes(post.id))}>like -</button>
        </article>
    })
  return (
    <div>
        {renderedPosts}
    </div>
  )
}
