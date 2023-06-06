import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import "../Styles/Login.css"
import { AuthContext } from '../Contexts/Auth';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader';
import { ToastView } from '../Components/Toast';

const Login = () => {
  const { handleLogin ,token} = useContext(AuthContext);
  const [inputField, setinputField] = useState({
    email: "",
    password: ""
  })
  const { loader } = useContext(AuthContext)
const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate("/user-details")
    }
  }, [])

  const handleTestUser = () =>{
    setinputField({email: "adarshbalika@gmail.com",
    password: "adarshbalika"})
    handleLogin("adarshbalika@gmail.com", "adarshbalika")
  }

  // const testFunc = () =>{
  //   handleLogin(inputField.email, inputField.password)
  // }
  
  return (
    <>
      <Navbar />
     { loader ? <Loader />:<div className='login-container'>
        <div className='login-main'>
          <h4>Email : </h4>
          <input type='text' value={inputField.email} onChange={(e) => setinputField((inputField) => ({...inputField, email : e.target.value }))} />
          <h4>Password : </h4>
          <input type="password" value={inputField.password} onChange={(e) => setinputField((inputField) => ({...inputField, password: e.target.value }))} />
          <div className='login-btn-container'>
          <button onClick={() => handleLogin(inputField.email, inputField.password)}>Login !</button>

          <button onClick={handleTestUser}>Fill guest credentials!</button>
          </div>

          <p >New user ? <Link to={"/signup"}><span className='signup-txt'>Sign Up Here</span></Link></p>
        </div>
      </div>}
      <ToastView/>
    </>
  )
}

export default Login