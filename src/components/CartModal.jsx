import React, { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartContext from "../context/CartContextProvider";

const CartModal = ({ setShowModal }) => {
  const { cartState, totalPrice } = useContext(CartContext);

  return (
    <div
      className="fixed inset-0 z-40 flex justify-center items-center p-4"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="bg-white p-5 w-[700px] rounded-2xl space-y-4"
        style={{ pointerEvents: "auto" }}
      >
        {cartState.length > 0 ? (
          <>
            <div>
              {cartState
                .slice()
                .reverse()
                .map((item, index) => (
                  <CartItem
                    key={index}
                    name={item.name}
                    price={item.price}
                    numberPicked={item.numberPicked}
                  />
                ))}
            </div>
            <div className="text-2xl font-bold flex justify-between items-center">
              <h2>Total</h2>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="space-x-4 ml-auto w-fit">
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-8 border cursor-pointer border-amber-800 rounded-full text-amber-800"
              >
                Close
              </button>
              <button
                onClick={() => console.log("Ordering...")}
                className="py-2 px-8 border cursor-pointer border-amber-800 bg-amber-800 rounded-full text-white"
              >
                Order
              </button>
            </div>
          </>
        ) : (
          <div>
            <h1 className="text-center font-bold text-2xl">
              No Items in Cart!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
