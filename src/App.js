import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Home from "./Components/Home";
import Products from "./Components/Products";
import SingleItem from "./Components/SingleItem";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/eachProduct" element={<SingleItem/>} />
        <Route path="/mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>

    </div>
  );
}

export default App;
