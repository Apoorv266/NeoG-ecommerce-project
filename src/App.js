import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/mockman" element={<Mockman colorScheme="dark" />} />
      </Routes>

    </div>
  );
}

export default App;
