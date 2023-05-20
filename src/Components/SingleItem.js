import React from "react";
import "../Styles/SingleItem.css";

const SingleItem = () => {
  return (
    <>
      <div className="main">
        <section>
          <div className="layout">
            <img
              src={require("../../src/Images/ProductsImg/headphone1.png")}
              alt=""
              srcset=""
            />

            <div className="item-details">
              <h1>Beats Solo3 Wireless On-Ear Headphones</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita quae quidem illum autem accusantium hic
                consecteturExpedita quae quidem illum autem accusantium hic
                consecteturExpedita quae quidem illum autem accusantium hic
                consecteturExpedita quae quidem illum autem accusantium hic
                consectetur
              </p>

              <p className="price">$ 1213</p>

              <div className="btm-btn">
                <button className="btn">Add to cart</button>
                <button className="btn1">Return</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleItem;
