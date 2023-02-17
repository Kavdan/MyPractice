import React from 'react'
import {v4 as uuid} from 'uuid';

export const CardForm = ({addCard}) => {
  const [header, setHeader] = React.useState('');
  const [content, setContent] = React.useState('');

  return (
    <div>
        <label>Header</label>
        <input type="text"  onChange={(e) => setHeader(e.target.value)}/>
        <div>
        <label>Body</label>
        <input type="text"  onChange={(e) => setContent(e.target.value)}/>
        </div>
        <button onClick={e => addCard({header, content, id: uuid()})}>Add</button>
    </div>
  )
}
