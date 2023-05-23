import React, { useContext } from "react";
import "../Styles/SingleItem.css";
import { Link, useParams } from "react-router-dom";
import { productContext } from "../Contexts/ProductContext";

const SingleItem = () => {
  const {state} = useContext(productContext)
  const {productId} = useParams()
  const currProduct = state.products?.find((product) => {
    return product._id === productId;
  });
  return (
    <>
      <div className="main">
        <section>
          <div className="layout">
            <img
              src={currProduct.image}
              alt=""
              srcset=""
             
            />

            <div className="item-details">
              <h1>{currProduct.title}</h1>
              <h3 className="brand-title">Brand : {currProduct.company}</h3>
              <h3 className="brand-title">Type : {currProduct.type}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita quae quidem illum autem accusantium hic
            
              </p>

              <p className="price">{currProduct.price}</p>

              <div className="utils-btn">
                <button className="cart-btn">Add to cart</button>
                <Link to={"/products"}>
                <button className="return-btn">Return</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleItem;
