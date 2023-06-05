import React from 'react'
import "../Styles/Loader.css"
import { ToastView } from './Toast'

const Loader = () => {
  return (
    <>
     <div className='loader-main'>
<img src={require("../Images/loader.gif")} alt="" srcset="" />
    </div>
    <ToastView/>
    </>
   
  )
}

export default Loader