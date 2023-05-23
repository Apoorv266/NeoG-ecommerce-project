import React from 'react'
import "../Styles/Loader.css"

const Loader = () => {
  return (
    <div className='loader-main'>
<img src={require("../Images/loader.gif")} alt="" srcset="" />
    </div>
  )
}

export default Loader