import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../firebase'
import { nanoid } from '@reduxjs/toolkit'

export const SenderMessage = () => {
    const [message, setMessage]:any = useState("")
    const data = useSelector((state: any) : any => state.chat)
    const currentUser = useSelector((state:any) => JSON.parse(state.currentUser))
  
    const handleMessage = async () => {
      setMessage("")
        if(!message.length)return;
        
        console.log(data.chatId)
        await updateDoc(doc(db, "chats", data.chatId), {
            messages: arrayUnion({
                id: nanoid(),
                message,
                senderId: currentUser.uid,
                name: currentUser.displayName,
                date: Timestamp.now()
            })
        })

    }
  return (
    <div className="message">
          <input
            type="text"
            name="mess"
            autoComplete="off"
            placeholder="your message"
            onChange={(e:any) => setMessage(e.target.value)}
            value={message}
          />
          <button onClick={handleMessage}>Send</button>
        </div>
  )
}
