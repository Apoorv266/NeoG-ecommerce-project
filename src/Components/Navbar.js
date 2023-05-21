import React, { useContext } from 'react'
import "../Styles/Navbar.css"
import CircumIcon from "@klarr-agency/circum-icons-react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/Auth';

const Navbar = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  return (
    <div className='nav-main'>
      <h3>LOGO</h3>
      <input type='text' placeholder='Search Here' />
      <div className='icons'>
      <Link to={"/products"}>
      <CircumIcon name="home" color={"white"}/>
      </Link>
      <Link to={"/wishlist"}>
        <CircumIcon name="heart" color={"white"} />
        </Link>
        <Link to={"/cart"}>
        <CircumIcon name="shopping_cart" color={"white"}/>
        </Link>
      </div>
      <div className='profile-icon'>
        {isLoggedIn ?  <button onClick={handleLogout}>logout</button>: <button>Login</button>}
        
        {/* <Link>
        <CircumIcon name="user" color={"white"}/>
        </Link> */}
      </div>
    </div>
  )
}

export default Navbar