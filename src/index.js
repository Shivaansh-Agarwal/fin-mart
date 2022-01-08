import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContextProvider } from "./contexts/products.context.js";
import { AuthProvider } from "./contexts/auth.context.jsx";
import { LoadingScreenProvider } from "./contexts/loadingscreen.context.js";
import App from "./App";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoadingScreenProvider>
        <AuthProvider>
          <ProductsContextProvider>
            <App />
          </ProductsContextProvider>
        </AuthProvider>
      </LoadingScreenProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
