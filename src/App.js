import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Home from "./Components/Home";
import Products from "./Components/Products";
import SingleItem from "./Components/SingleItem";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Cart from "./Components/Cart";
import WishList from "./Components/WishList";
import PrivateRoute from "./Components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/eachProduct" element={<SingleItem/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
        <Route path="/wishlist" element={<PrivateRoute><WishList/></PrivateRoute>} />
        <Route path="/mockman" element={<Mockman  />} />
      </Routes>

    </div>
  );
}

export default App;
