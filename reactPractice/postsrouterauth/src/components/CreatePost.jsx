import { React, useState } from 'react'
import {v4 as uuid} from 'uuid';

export const CreatePost = ({posts, setPosts}) => {
    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    const createNewPost = () => {
        setPosts([...posts, {idKey:uuid(), id: posts[posts.length- 1].id + 1,  title: header, body: content}])
    }

  return (
    <div>
        <label>header</label>
        <input type="text" onChange={e => setHeader(e.target.value)}/>
        <label>content</label>
        <input type="text" onChange={e => setContent(e.target.value)}/>
        <div><button onClick={createNewPost}>Add</button></div>
    </div>
  )
}
