import React, { useContext, useEffect, useState } from "react";
import "../Styles/SingleItem.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productContext } from "../Contexts/ProductContext";

const SingleItem = () => {
  const { state, addtoCart, isInCart } = useContext(productContext)
  const storageItem = JSON.parse(localStorage.getItem("item"));
  const { productId } = useParams()
  // const navigate = useNavigate()
  const currProduct = state.products?.find((product) => {
    return product._id === productId;
  });
  const [individualData, setindividualData] = useState(storageItem)

 
  useEffect(() => {
    if (typeof currProduct !== "undefined") {
      localStorage.setItem(
        "item",
        JSON.stringify(currProduct)
      );
    }else{
      setindividualData(currProduct)
    }
  }, [])

  return (
    <>
      <div className="main">
        <section>
          <div className="layout">
            <img
              src={currProduct?.image}
              alt=""
              srcset=""

            />

            <div className="item-details">
              <h1>{individualData?.title}</h1>
              <h3 className="brand-title">Brand : {currProduct?.company}</h3>
              <h3 className="brand-title">Type : {currProduct?.type}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita quae quidem illum autem accusantium hic

              </p>

              <p className="price">{currProduct?.price}</p>

              <div className="utils-btn">
                {isInCart(currProduct?._id) ? <Link to={"/cart"}><button className="cart-btn" style={{ backgroundColor: "var(--tertiary-color)" }}>Go to cart</button></Link> : <button className="cart-btn" onClick={() => addtoCart(currProduct)}>Add to cart</button>}
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
