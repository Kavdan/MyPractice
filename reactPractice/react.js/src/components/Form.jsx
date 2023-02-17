import {React, useState} from 'react'
import {v4 as uuid} from 'uuid';

const Form = ({onAddPost, comparePosts}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!title || !content) {
        return;
      }
      if (comparePosts({ id: uuid(), title, content })) return; 
      onAddPost({ id: uuid(), title, content });
      setTitle('');
      setContent('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Post content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button type="submit">Add post</button>
      </form>
    );
}

export default Form;
