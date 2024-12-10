import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CartContext from "./context_apis/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartContext>
    <App />
  </CartContext>
);
