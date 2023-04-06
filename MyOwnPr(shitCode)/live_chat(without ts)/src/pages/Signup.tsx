import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../features/AuthUserSlice/authUserSlice";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError]:any = useState(false);
  const [loading, setLoading]:any = useState(false); 

  const errorHandling = (errorCode : any) => {
      if(errorCode === "auth/weak-password") {
        setError("! Слабый пароль")
      }
      else if(errorCode === "auth/invalid-email") {
        setError("! Некорректный email")
      }
      else if (errorCode === "emptyFields") {
        setError("Не все поля заполнены")
      }

      setTimeout(() => {
        setError(false);
      }, 5000)
  }


  const createUser = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const nickname = form[0].value;
    const email = form[1].value;
    const password = form[2].value;

    if (!nickname.length || !email.length || !password.length) {
      errorHandling("emptyFields");
      return new Promise(() => {});
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const editProfile = await updateProfile(res.user, {
        displayName: nickname,
      });

      const coll = await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName: res.user.displayName,
        email: res.user.email,
      });

      await setDoc(doc(db, "userChats", res.user.uid), {});
      const json = JSON.stringify(res.user);
      dispatch(setUser(json));
      navigate("/");
    } catch (err : any) {
      errorHandling(err.code)
    }
  };

  const createUserLoadingWrapper = (e:any) => {
    setLoading(true);
    createUser(e).then(x => setLoading(false))
  }

  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        <form onSubmit={e => createUserLoadingWrapper(e)} className={error ? "error" : ""}>
          { loading ? <span className="loader">Подождите пожалуйста</span> : ""}
          { error ? <span className="errorMessage">{error}</span> : ""}
          <input type="text" placeholder="nickname" />
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="submit" value="sign up" />
        </form>
      </div>
    </div>
  );
};
