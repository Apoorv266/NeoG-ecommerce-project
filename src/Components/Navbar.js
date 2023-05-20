import React from 'react'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='nav-main'>
        <h3>LOGO</h3>
        <input type='text' placeholder='Search Here'/>
        <div>
            <img src={require("../Images/wishlistIcon.png")} alt="" srcset="" width={"50px"}/>
            <img src={require("../Images/cartIcon.png")} alt="" srcset="" width={"50px"}/>
        </div>
    </div>
  )
}

export default Navbar