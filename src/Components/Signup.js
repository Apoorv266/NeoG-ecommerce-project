import React from 'react'
import Navbar from './Navbar'
import "../Styles/Login.css"

const Signup = () => {
  return (
    <>
    <Navbar/>
<div className='login-container'>
    <div className='login-main'>
        <h4>Name : </h4>
        <input type='text'/>

        <h4>Email : </h4>
        <input type='text'/>

        <h4>Password : </h4>
        <input type='text'/>

        <h4>Confirm Password : </h4>
        <input type='text'/>
        <button>Create a new account !</button>
        <p>Already have an account ? Sign in</p>
    </div>
    </div>
    </>
  )
}

export default Signup