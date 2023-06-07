import { Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./Pages/Products";
import SingleItem from "./Pages/SingleProduct";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import WishList from "./Pages/WishList";
import PrivateRoute from "./Components/PrivateRoute";
import Checkout from "./Components/Checkout/Checkout";
import Cart from "./Components/Cart/Cart";
import UserProfile from "./Components/UserProfile/UserProfile";
import CheckoutDone from "./Components/Checkout/CheckoutDone";
import Homepage from "./Pages/Homepage";
import MockMan from "mockman-js";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
        <Route path="/mockman" element={<MockMan />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<SingleItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/order-placed" element={<CheckoutDone />} />
          <Route path="/user-details" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="/wishlist" element={<PrivateRoute><WishList /></PrivateRoute>} />
        </Routes>

      </div>
    </>
  );
}

export default App;
