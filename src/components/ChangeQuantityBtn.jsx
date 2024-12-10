import React, { useContext } from "react";
import { CartContextApi } from "../context_apis/CartContext";

const ChangeQuantityBtn = ({ product }) => {
  const { cart, dispatch } = useContext(CartContextApi);

  const Index = cart.findIndex((p) => p.id === product.id);
  const quantity = Index >= 0 ? cart[Index].quantity : 0;

  const increaseQuantity = () => {
    if (Index >= 0) {
      dispatch({ type: "Increase", id: product.id });
    }
  };

  const decreaseQuantity = () => {
    if (Index >= 0) {
      const nextQuantity = cart[Index].quantity - 1; // Calculate the next quantity
      dispatch({ type: "Decrease", id: product.id });

      // If the quantity becomes zero after decreasing, remove the product from the cart
      if (nextQuantity === 0) {
        dispatch({ type: "Remove", id: product.id });
      }
    }
  };

  return (
    <div className="text-white absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] h-[46px] px-3 rounded-full bg-creme flex items-center justify-between font-semibold w-[182px]">
      <button
        onClick={decreaseQuantity}
        className="border border-white hover:border-creme hover:bg-white group p-0.5 rounded-full flex items-center justify-center outline-0"
      >
        <svg
          className="group-hover:text-creme"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path fill="currentcolor" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>

      <span className="text-sm">{quantity}</span>

      <button
        onClick={increaseQuantity}
        className="border border-white hover:border-creme hover:bg-white group p-0.5 rounded-full flex items-center justify-center outline-0"
      >
        <svg
          className="group-hover:text-creme"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="currentcolor"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChangeQuantityBtn;
