import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrUser } from './currentUserSlice';

export const SignIn = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form : any = e.target;
        const email : string = form[0].value;
        const password : string = form[1].value;
        dispatch(setCurrUser({
            email,
            password
        }))
        form[0].value = "";
        form[1].value = "";
    }

  return (
    <div className='signInContainer'>
        <form className="signIn" onSubmit={handleSubmit}>
            <input type="text" placeholder='email'/>
            <input type="password" name="pass" placeholder='password'/>
            <input type="submit" value="sign in" />
        </form>
    </div>
  )
}
