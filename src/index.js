import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContextProvider } from "./contexts/products.context.js";
import { AuthProvider } from "./contexts/auth.context.jsx";
import App from "./App";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
