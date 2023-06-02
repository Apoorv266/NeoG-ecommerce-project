import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/Auth";
import ProductContextFunc from "./Contexts/ProductContext";
import AddressContextFunc from "./Contexts/AddressContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextFunc>
          <AddressContextFunc>
        <AuthProvider>
          <App />
        </AuthProvider>
          </AddressContextFunc>
      </ProductContextFunc>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
