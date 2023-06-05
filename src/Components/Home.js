import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../Styles/Home.css";
import { useContext } from "react";
import { productContext } from "../Contexts/ProductContext";
import { useEffect } from "react";

const Home = () => {
  const { state, filterDispatch } = useContext(productContext);
  const navigate = useNavigate();
  const handleCategoryFunc = (category) => {
    filterDispatch({ type: "ADD_CATEGORY_FIELD", payload: category });
    window.scroll({ top: 0, behavior: "smooth" });
    navigate("/products");
  };

  useEffect(() => {
    filterDispatch({ type: "CLEAR_FILTER"});
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="home-wrapper" style={{ overflow: "hidden" }}>
        <img
          src={
            "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/genesis_desktop_1799_1400x.jpg?v=1685557646"
          }
          alt=""
          srcset=""
        />
        {/* <Link to={"/products"}>
          <button>Explore</button>
        </Link> */}

        <div className="category-container">
          <div className="category-wrapper">
            {state.categories.slice(0, 3).map((item) => {
              return (
                <div
                  className="category-item"
                  key={item._id}
                  onClick={() => handleCategoryFunc(item.categoryName)}
                >
                  <img src={item.image} alt="" srcset="" />
                  <h1>{item.categoryName}</h1>
                </div>
              );
            })}
          </div>

          <div className="category-wrapper">
            {state.categories.slice(-2).map((item) => {
              return (
                <div className="category-item" key={item._id} onClick={() => handleCategoryFunc(item.categoryName)}>
                  <img src={item.image} alt="" srcset="" />
                  <h1>{item.categoryName}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
