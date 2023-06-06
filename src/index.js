import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/Auth";
import ProductContextFunc from "./Contexts/ProductContext";
import AddressContextFunc from "./Contexts/AddressContext";
import WishlistContextFunc from "./Contexts/WishlistContext";
import CartContextFunc from "./Contexts/CartContext";
import { createRoot } from "react-dom/client";

// Call make Server
makeServer();
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductContextFunc>
          <WishlistContextFunc>
            <CartContextFunc>
              <AddressContextFunc>
                <App />
              </AddressContextFunc>
            </CartContextFunc>
          </WishlistContextFunc>
        </ProductContextFunc>
      </AuthProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
