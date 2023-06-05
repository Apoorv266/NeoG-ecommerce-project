import React, { useContext } from 'react'
import "../Styles/Navbar.css"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/Auth';
import { productContext } from '../Contexts/ProductContext';
import { LogInOutline, HomeOutline, HeartOutline, CartOutline,PersonOutline } from "react-ionicons";
const Navbar = () => {
  const { token } = useContext(AuthContext);
  const { filterDispatch, filterState } = useContext(productContext)
  const navigate = useNavigate()
  return (
    <div className='nav-main'>
      <span>LOGO</span>
      <div>
        <input type='text' placeholder='Search product here...' value={filterState.searchTxt} onChange={(event) => {
          filterDispatch({ type: "ADD_INPUT_FIELD", payload: event.target.value });
          navigate("/products");
        }} />
      </div>
      <div className='icons'>
        <Link to={"/products"}>
          <HomeOutline
            color={'#ffffff'}
            height="20px"
            width="20px"
          />
        </Link>
        <Link to={"/wishlist"}>
          <HeartOutline
            color={'#ffffff'}
            height="20px"
            width="20px"
          />
        </Link>


        <Link to={"/cart"}>
          <CartOutline
            color={'#ffffff'}
            height="20px"
            width="20px"
          />
        </Link>


        {token ? <Link to={"/user-details"}>
          <PersonOutline
  color={'#ffffff'} 
  height="20px"
  width="20px"
/>
        </Link>
          :
          <Link to={"/login"}>
            <LogInOutline
              color={'white'}
              height="20px"
              width="20px"
            />
          </Link>}


      </div>
    </div>
  )
}

export default Navbar