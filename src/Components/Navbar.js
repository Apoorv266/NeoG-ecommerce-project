import React, { useContext } from "react";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Auth";
import { productContext } from "../Contexts/ProductContext";
import {
  LogInOutline,
  HomeOutline,
  HeartOutline,
  CartOutline,
  PersonOutline,
} from "react-ionicons";
const Navbar = () => {
  const { token } = useContext(AuthContext);
  const { filterDispatch, filterState, state } = useContext(productContext);
  const navigate = useNavigate();
  return (
    <div className="nav-main">
      <Link to={"/"}>
        <img
          src={require("../Images/logo.png")}
          alt=""
          srcSet=""
          id="logo-img"
        />
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search product here..."
          value={filterState.searchTxt}
          onChange={(event) => {
            filterDispatch({
              type: "ADD_INPUT_FIELD",
              payload: event.target.value,
            });
            navigate("/products");
          }}
        />
      </div>
      <div className="icons">
        <Link to={"/products"}>
          <HomeOutline color={"#ffffff"} height="20px" width="20px" />

        </Link>
        <div className="nav-icon">
          <Link to={"/wishlist"}>
            <HeartOutline color={"#ffffff"} height="20px" width="20px" />
          </Link>
          {state.wishlist.length > 0 && token && <p>{state.wishlist.length}</p>}
        </div>

        <div className="nav-icon">
        <Link to={"/cart"}>
          <CartOutline color={"#ffffff"} height="20px" width="20px" />
        </Link>
        {state.cart.length > 0 && token && <p>{state.cart.length}</p>}
        </div>
        {token ? (
          <Link to={"/user-details"}>
            <PersonOutline color={"#ffffff"} height="20px" width="20px" />
          </Link>
        ) : (
          <Link to={"/login"}>
            <LogInOutline color={"white"} height="20px" width="20px" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
