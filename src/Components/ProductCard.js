import React from "react";
import { products } from "../backend/db/products";
import "../Styles/Products.css"

const ProductCard = () => {
  return (
<>
{products.map((item) =>{
    return (
<div className="product-card-main">
      <h3>title</h3>
      <img
        src="https://m.media-amazon.com/images/I/61HGPQnvmbL._SL1500_.jpg"
        alt=""
        srcset=""
        width={"200px"}
        style={{ mixBlendMode: "color-burn" }}
      />
      <h4>$ 121</h4>
      <button>Add to cart</button>
    </div>
    )
})}
    
    </>
  );
};

export default ProductCard;
