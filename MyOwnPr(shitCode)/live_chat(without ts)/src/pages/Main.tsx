import React, { useEffect, useState } from "react";
import { Search } from "../components/Search";
import { User } from "../components/User";
import { collection, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../features/ChatsSlicer/chatSlice";
import { Message } from "../components/Message";
import { Messages } from "../components/Messages";
import { SenderMessage } from "../components/SenderMessage";

export const Main = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state:any) => JSON.parse(state.currentUser))
  const [chats, setChats]:any = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats()
  }, [currentUser.uid]);

  const handleSelect = (user:any) => {
      dispatch(changeUser({user, currentUser}))
  }
 

  return (
    <div className="mainContainer">
      <div className="chats">
        <Search />
        {Object.entries(chats).map((chat:any) => {
          return <User name={chat[1].userInfo.displayName} 
                       key={chat[0]} 
                       onClick={() => handleSelect(chat[1].userInfo)}/>
        })}
      </div>
      <div className="currentChat">
       <Messages />
        <SenderMessage />
      </div>
    </div>
  );
};
