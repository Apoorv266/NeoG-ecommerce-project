import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import "../Styles/Login.css"
import { AuthContext } from '../Contexts/Auth';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { ToastView } from './Toast';

const Signup = () => {
  const { handleSignup,token } = useContext(AuthContext);
  const [signupField, setsignupField] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })
  const { loader } = useContext(AuthContext)
  const navigate = useNavigate()

  
  useEffect(() => {
    if (token) {
      navigate("/user-details")
    }
  }, [])
  return (
    <>
      <Navbar />
      {loader ? <Loader />:<div className='login-container'>
        <div className='login-main'>
          <h4>Firstname : </h4>
          <input type='text' value={signupField.firstName} onChange={(e) => setsignupField((inputField) => ({ ...inputField, firstName: e.target.value }))} />

          <h4>Lastname : </h4>
          <input type='text' value={signupField.lastName} onChange={(e) => setsignupField((inputField) => ({ ...inputField, lastName: e.target.value }))} />

          <h4>Email : </h4>
          <input type='text' value={signupField.email} onChange={(e) => setsignupField((inputField) => ({ ...inputField, email: e.target.value }))} />

          <h4>Password : </h4>
          <input type='password' value={signupField.password} onChange={(e) => setsignupField((inputField) => ({ ...inputField, password: e.target.value }))} />

          <button onClick={() => handleSignup(signupField.email, signupField.password, signupField.firstName, signupField.lastName)}>Create a new account !</button>
          <p>Already have an account ? <Link to={"/login"}><span className='signup-txt'>Sign in</span></Link></p>
        </div>
      </div>}
      <ToastView/>
    </>
  )
}

export default Signup