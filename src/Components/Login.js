import React, { useContext } from 'react'
import Navbar from './Navbar'
import "../Styles/Login.css"
import { AuthContext } from '../Contexts/Auth';

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  return (
    <>
    <Navbar/>
<div className='login-container'>
    <div className='login-main'>
        <h4>Email : </h4>
        <input type='text'/>
        <h4>Password : </h4>
        <input type='text'/>
        <button onClick={handleLogin}>Login !</button>
        <p>New user ? Sign Up Here</p>
    </div>
    </div>
    </>
  )
}

export default Login