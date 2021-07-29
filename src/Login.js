import React from 'react'
import './login.css'
import Image from './Header/icons/LI-Logo.png'
import { auth } from './Feed/Firebase';
function Login() {
    
    const register = ()=>{};
    const LoginToApp = (e)=>{
        e.preventdefault();
    };
    return (
        <div className='login'>
            <img src={Image} alt="" />
            <form>
                <input placeholder='full name(if required)' type="text" />

                <input type="text" placeholder="profile pic Url" />
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="password" />
                <button type="submit" onClick={LoginToApp}>SignIN</button>
                <p>Not a member ?<span className="login__register" onClick={register}>Register Now</span></p>
            </form>
        </div>
    )
}

export default Login
