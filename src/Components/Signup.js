import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import "../Styles/Login.css"
import { AuthContext } from '../Contexts/Auth';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import { productContext } from '../Contexts/ProductContext';

const Signup = () => {
  const { handleSignup } = useContext(AuthContext);
  const [signupField, setsignupField] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  })
  const { loader } = useContext(productContext)
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
          <p>Already have an account ? <Link to={"/login"}>Sign in</Link></p>
        </div>
      </div>}
    </>
  )
}

export default Signup