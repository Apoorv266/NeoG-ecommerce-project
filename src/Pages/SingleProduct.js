import React, { useContext, useEffect } from "react";
import "../Styles/SingleItem.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productContext } from "../Contexts/ProductContext";
import { Heart, HeartOutline } from "react-ionicons";
import { ToastView } from "../Components/Toast";
import { wishlistContext } from "../Contexts/WishlistContext";
import { cartContext } from "../Contexts/CartContext";

const SingleItem = () => {
  const {addToWishlist, removeFromWishlist, isInWishlist} = useContext(wishlistContext)

  const{ addtoCart, isInCart } = useContext(cartContext)

  const { state} = useContext(productContext)
  
  const navigate = useNavigate()
  const { productId } = useParams()
  const currProduct = state.products?.find((product) => {
    return product._id === productId;
  });

  useEffect(() => {
    if (typeof currProduct === "undefined") {
      navigate("/products")
    }
  }, [])

  return (
    <>
      <div className="main">
        <section className="single-card-items">
          <div className="layout">
            <img
              src={currProduct?.image}
              alt=""
              srcset=""
              class="responsive"
            />

            <div className="item-details">
              <h1>{currProduct?.title}</h1>
              <h3 className="brand-title">Brand : {currProduct?.company}</h3>
              <h3 className="brand-title">Type : {currProduct?.type}</h3>
              <h3 className="brand-title">Ratings : {currProduct?.starRating}</h3>
              <p>
                {currProduct?.description}
              </p>
              <p className="price">₹ {currProduct?.discount_price}</p>
              <div className="utils-btn">
                {isInWishlist(currProduct?._id) ? <Heart
                  color={'red'}
                  height="35px"
                  width="35px"
                  onClick={() => removeFromWishlist(currProduct?._id)}
                /> : <HeartOutline
                  color={'#ffffff'}
                  height="35px"
                  width="35px"
                  onClick={() => (addToWishlist(currProduct))}
                />}
                {isInCart(currProduct?._id) ? <Link to={"/cart"}><button className="cart-btn" style={{ backgroundColor: "var(--tertiary-color)" }}>Go to cart</button></Link> : <button className="cart-btn" onClick={() => addtoCart(currProduct)}>Add to cart</button>}

                <Link to={"/products"}>
                  <button className="return-btn">Return</button>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>
      <ToastView />
    </>
  );
};

export default SingleItem;
