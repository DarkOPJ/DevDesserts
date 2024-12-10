import React, { useContext } from "react";
import OrderTotal from "./OrderTotal";
import CartProduct from "./CartProduct";
import { CartContextApi } from "../context_apis/CartContext";

const AddedProducts = ({ children, isModal }) => {
  const {cart} = useContext(CartContextApi);
  if (isModal) {
    return (
      // Added to cart products modal
      <div className="bg-rose-50 rounded-md px-4 pt-2 pb-3">
        {
            cart.map((p) => (
                <CartProduct key={p.id} isModal={isModal}  singleProduct={p} />
            ))
        }

        {/* Order Total */}
        {children}
      </div>
    );
  }
  return (
    // Added to cart products
    <div>
      {
        cart.map((p) => (
            <CartProduct key={p.id} singleProduct={p}/>
        ))
    }
    </div>
  );
};

export default AddedProducts;
