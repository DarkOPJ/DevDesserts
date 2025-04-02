import React, { useContext, useEffect, useState, useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import CartContext from "../context/CartContextProvider";

const CartButton = ({ setShowModal }) => {
  const { cartState } = useContext(CartContext);
  const [isScaled, setIsScaled] = useState(false);
  const prevCartLength = useRef(cartState.length); // Track previous cart length
  const [itemsPicked, setItemsPicked] = useState(0)

  useEffect(() => {
    setItemsPicked(cartState.reduce((total, num) => total+ num.numberPicked, 0))

    // Only animate if items were ADDED (not on first load or restoring state)
    if (cartState.length > prevCartLength.current) {
      setIsScaled(true);
      const timer = setTimeout(() => setIsScaled(false), 100);
      return () => clearTimeout(timer); // Cleanup timeout
    }

    prevCartLength.current = cartState.length; // Update previous length
  }, [cartState]);

  return (
    <button
      onClick={() => setShowModal(true)}
      className={`bg-amber-950 py-3 px-8 rounded-full flex items-center gap-3 transition-transform cursor-pointer ${
        isScaled ? "scale-110" : "scale-100"
      }`}
    >
      <FaCartShopping />
      <p>Your Cart</p>
      <span className="py-0.5 px-4 bg-amber-800 rounded-full">
        {itemsPicked}
      </span>
    </button>
  );
};

export default CartButton;