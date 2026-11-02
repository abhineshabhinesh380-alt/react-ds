import React from 'react'
import './login.css';
import netLogo from "../assets/netflix.png"

function Login() {
  return (
    <>
    <div className='details'>
      <div className="loginname">
        <div className='Netflix'>
          <img src={netLogo} alt="netlogo" />
        </div>
        <h1 className='sign-in'>Sign In</h1>
        <input type="text" placeholder='Enter Email id' ></input>
        <input type="password" placeholder='Enter Password'></input>
        <button>Login</button> 
    </div>
    </div>
    </>
  )
}

export default Login