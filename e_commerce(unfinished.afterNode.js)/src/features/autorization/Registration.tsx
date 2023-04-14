import React, { FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import { signUp } from './autorizationSlice';

export const Registration = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form : any = e.target;
        const name : string = form[0].value;
        const surname: string = form[1].value;
        const address: string = form[2].value;
        const email : string = form[3].value;
        const password : string = form[4].value;

        dispatch(signUp({
            fullname: name + " " + surname,
            address,
            email,
            password,
        }))

        form[0].value = "";
        form[1].value = "";
        form[2].value = "";
        form[3].value = "";
        form[4].value = "";
    }

  return (
    <div className='signInContainer'>
        <form className="signIn" onSubmit={handleSubmit}>
            <input type="text" className="name" placeholder='name'/>
            <input type="text" className="surname" placeholder='surname'/>
            <input type="text" placeholder='email'/>
            <input type="password" name="pass" placeholder='password'/>
            <input type="submit" value="sign up" />
        </form>
    </div>
  )
}
