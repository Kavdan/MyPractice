import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../features/AuthUserSlice/authUserSlice";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] : any = useState(false);
  const [loading, setLoading] : any = useState(false);
  const handleError = () => {
    setError(true);
    setTimeout(() => setError(false), 5000)
  }

  const signIn = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const email = form[0].value;
    const password = form[1].value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const json = JSON.stringify(res.user);
      dispatch(setUser(json));
      navigate("/");
    } catch (err) {
      handleError();
      console.log(err);
    }
  };

  const signInUserLoadingWrapper = (e:any) => {
    setLoading(true);
    signIn(e).then(x => setLoading(false))
  }

  return (
    <div className={"signInContainer"}>
      <div className="signInWrapper">
        <form onSubmit={e => signInUserLoadingWrapper(e)} className={error ? "error" : ""}>
        { loading ? <span className="loader">Подождите пожалуйста</span> : ""}
        { error ? <span className="errorMessage">! Некорректный email или password</span> : ""}
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="submit" value="sign in" />
        </form>
      </div>
    </div>
  );
};
