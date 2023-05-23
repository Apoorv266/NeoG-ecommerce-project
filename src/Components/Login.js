import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import "../Styles/Login.css"
import { AuthContext } from '../Contexts/Auth';

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const [inputField, setinputField] = useState({
    email: "",
    password: ""
  })


  return (
    <>
      <Navbar />
      <div className='login-container'>
        <div className='login-main'>
          <h4>Email : </h4>
          <input type='text' value={inputField.email} onChange={(e) => setinputField((inputField) => ({...inputField, email : e.target.value }))} />
          <h4>Password : </h4>
          <input type="password" value={inputField.password} onChange={(e) => setinputField((inputField) => ({...inputField, password: e.target.value }))} />
          <button onClick={() => handleLogin(inputField.email, inputField.password)}>Login !</button>
          <p>New user ? Sign Up Here</p>
        </div>
      </div>
    </>
  )
}

export default Login