import React, { createContext, useEffect, useReducer, useState } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext(
  {
    cartState: [],
    cartDispatch: () => {},
  }
);
export default CartContext;

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const [totalPrice, setTotalPrice] = useState(0)
  
  useEffect(() => {
    // Calculate total price
    const newTotalPrice = cartState.reduce((total, item) => {
      return total + (item.numberPicked * item.price);
    }, 0);
    
    setTotalPrice(newTotalPrice);
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
