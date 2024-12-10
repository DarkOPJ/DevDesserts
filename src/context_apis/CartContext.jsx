import React, { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

export const CartContextApi = createContext();

const CartContext = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, []);
  return (
    <CartContextApi.Provider value={{ cart, dispatch }}>
      {children}
    </CartContextApi.Provider>
  );
};

export default CartContext;
