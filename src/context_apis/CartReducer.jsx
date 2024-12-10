import React from "react";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.product];
    case "Increase":
      const indexIncrease = state.findIndex((p) => p.id === action.id);
      state[indexIncrease].quantity += 1;
      return [...state];
    case "Decrease":
      const indexDecrease = state.findIndex((p) => p.id === action.id);
      state[indexDecrease].quantity -= 1;
      return [...state];
    case "Remove":
      return state.filter((p) => p.id !== action.id);
    case "CLEAR_CART":
      return [];
    default:
      return [state];
  }
};

export default CartReducer;
