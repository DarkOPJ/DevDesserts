import React, { useContext } from "react";
import { CartContextApi } from "../context_apis/CartContext";

const CremeBtn = ({ btnText, modalControl }) => {
  const { dispatch } = useContext(CartContextApi);
  const resetCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleClick = () => {
    if (modalControl.current) {
      if (btnText === "Confirm Order") {
        modalControl.current.showModal();
      } else if (btnText === "Start New Order") {
        resetCart(); // Reset the cart when starting a new order
        modalControl.current.close();
      }
    }
  };

  return (
    <button
      className="outline-0 bg-creme hover:bg-cremeDark duration-500 w-full rounded-full py-3 text-white text-sm mt-5 font-semibold"
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
};

export default CremeBtn;
