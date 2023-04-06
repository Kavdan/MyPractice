import React, { useEffect, useRef, useState } from 'react'
import { Message } from './Message'
import { useSelector } from 'react-redux';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export const Messages = () => {
    const [messages, setMessages] : any = useState([]);
    const data = useSelector((state: any) : any => state.chat)
    const currentUser = useSelector((state: any) => JSON.parse(state.currentUser));
    const ref:any = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    useEffect(() =>{
        const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })

        return () => {
            unsub()
        }
    }, [data.chatId])

  return (
    <div className="currentChatWindow">
        {messages.map((m:any) => {
            return <Message key={m.id} 
                            text={m.message} 
                            userName={m.name}
                            currMessage={m.senderId === currentUser.uid}
                            ref={ref}/> 
        })}
    </div>
  )
}
