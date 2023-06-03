import React, { useContext } from 'react'
import "../Styles/Navbar.css"
import CircumIcon from "@klarr-agency/circum-icons-react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/Auth';
import { productContext } from '../Contexts/ProductContext';

const Navbar = () => {
  const { token } = useContext(AuthContext);
  const { state, filterDispatch, filterState } = useContext(productContext)
  const navigate = useNavigate()
  return (
    <div className='nav-main'>
      <h3>LOGO</h3>
      <div>
        <input type='text' placeholder='Search product here...' value={filterState.searchTxt}  onChange={(event) => {
            filterDispatch({ type: "ADD_INPUT_FIELD", payload: event.target.value });
            navigate("/products");
          }}/>
      </div>
      <div>
        <select className="select-dropdown" name='test'>
          <option selected disabled hidden>Choose category</option>
          <option value="All">All</option>
          {state.categories.map((item) => <option value={`${item.categoryName
            }`} key={item._id}>{item.categoryName}</option>
          )}
        </select>
      </div>
      <div className='icons'>
        <Link to={"/products"}>
          <CircumIcon name="home" color={"white"} />
        </Link>
        <Link to={"/wishlist"}>
          <CircumIcon name="heart" color={"white"} />
        </Link>
        <Link to={"/cart"}>
          <CircumIcon name="shopping_cart" color={"white"} />
        </Link>
      </div>
      <div className='profile-icon'>
        {token ? <Link to={"/user-details"}>
          <CircumIcon name="user" color={"white"} />
        </Link> : <Link to={"/login"}><button>Login</button></Link>}




      </div>
    </div>
  )
}

export default Navbar