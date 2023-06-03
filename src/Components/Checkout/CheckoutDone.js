import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutDone = () => {
  const navigate = useNavigate();
  const [timer, settimer] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
        settimer((prevCount) => prevCount - 1);
    }, 1000);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  if (timer === 0) {
    navigate("/user-details");
  }

  return (
    <div className="order-placed-main">
      <img
        src={require("../../Images/orderPlaced.gif")}
        alt=""
        srcset=""
        width={"400px"}
      />
      <h2>{`Redirecting in ${timer} seconds...`}</h2>
    </div>
  );
};

export default CheckoutDone;
