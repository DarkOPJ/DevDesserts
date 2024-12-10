import React, { useContext, useState } from "react";
import AddedProducts from "./AddedProducts";
import OrderTotal from "./OrderTotal";
import CarbonNeutral from "./CarbonNeutral";
import CremeBtn from "./CremeBtn";
import { CartContextApi } from "../context_apis/CartContext";

const Cart = ({ modalControl }) => {
  const { cart } = useContext(CartContextApi);

  return (
    <div className="bg-white p-5 sm:mx-auto rounded-xl h-fit md:w-auto xl:w-full min-w-[350px]">
      <h2 className="text-creme font-bold text-2xl pb-2">
        Your Cart ({cart.length})
      </h2>

      {!cart.length ? (
        <div className="py-3 mx-auto w-fit">
          <img src="./svgs/illustration-empty-cart.svg" alt="" />
          <p className="text-xs text-cremeDark">
            Your items will be added here
          </p>
        </div>
      ) : (
        <div>
          {/* Products */}
          <AddedProducts isModal={false} />

          {/* Order Total */}
          <OrderTotal
            padding={"py-4"}
            normalText={"text-sm"}
            largeText={"text-2xl"}
          />

          {/* Carbon Neutral */}
          <CarbonNeutral />

          {/* Confirm Button */}
          <CremeBtn btnText={"Confirm Order"} modalControl={modalControl} />
        </div>
      )}
    </div>
  );
};

export default Cart;
