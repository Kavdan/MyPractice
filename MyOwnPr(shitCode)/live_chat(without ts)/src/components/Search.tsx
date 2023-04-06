import React, { useState } from "react";
import { User } from "./User";
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";

export const Search = () => {
  const [userName, setUserName]:any = useState();
  const [user, setUser]:any = useState();
  const currentUser = useSelector((state: any): any => JSON.parse(state.currentUser));

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };

  const enter = (e: any) => {
    handleSearch();
  };

  const handleSelect = async () => {
      console.log(currentUser)
    const combinedId : any =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    
    try {
        const res = await getDoc(doc(db, "chats", combinedId));
        
        if(!res.exists()) {
            await setDoc(doc(db, "chats", combinedId), {messages: []})
            await updateDoc(doc(db, "userChats", currentUser.uid),
            {
                [combinedId+".userInfo"]: {
                    uid: user.uid,
                    displayName: user.displayName,
                },
                [combinedId+".date"]: serverTimestamp()
            });

            await updateDoc(doc(db, "userChats", user.uid),
            {
                [combinedId+".userInfo"]: {
                    uid: currentUser.uid,
                    displayName: currentUser.displayName,
                },
                [combinedId+".date"]: serverTimestamp()
            });
        }
        setUser(null);
        setUserName("");
    }catch (err) {
        console.log(err)
    }
  };

  return (
    <div className="searchUser">
      <input
        type="text"
        name="searchUser"
        autoComplete="off"
        placeholder="find user"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button onClick={enter} className="findButton">Find</button>
      <div className="searchedChats">
        {user ? <User name={user?.displayName} onClick={handleSelect}/> : ""}
      </div>
    </div>
  );
};
