import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser } from '../features/AuthUserSlice/authUserSlice';
import { resetAll } from '../features/ChatsSlicer/chatSlice';

export const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [active, setActive] = useState({
        signup: "",
        signin: "",
        main: ""
    });

    const toggleSignUp = () => {
        setActive({
            signup: "active",
            signin: "",
            main: ""
        })
        navigate("/signup")
    }

    const toggleSignIn = () => {
        setActive({
            signup: "",
            signin: "active",
            main: ""
        })
        navigate("/signin")
    }

    const toggleMain = () => {
        setActive({
            signup: "",
            signin: "",
            main: "active"
        })
        navigate("/")
    }

    const logOut = () => {
        dispatch(setUser(null));
        dispatch(resetAll());
    }


  return (
    <div className='header'>
        <div className="main">
            <span className={active.main}
                  onClick={toggleMain}>Main</span>
        </div>
        <div className='header--auth'>
            <span className={active.signup}
                  onClick={toggleSignUp}>sign up</span>
            <span className={active.signin}
                  onClick={toggleSignIn}>sign in</span>
            <span onClick={() => dispatch(setUser(null))}>Log Out</span>
        </div>
    </div>
  )
}
