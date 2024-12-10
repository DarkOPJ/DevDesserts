import React, { useContext } from "react";
import ChangeQuantityBtn from "./ChangeQuantityBtn";
import AddToCartBtn from "./AddToCartBtn";
import { useState } from "react";
import { CartContextApi } from "../context_apis/CartContext";

const Product = ({ product }) => {
  const { cart } = useContext(CartContextApi);
  const Index = cart.findIndex((p) => p.id === product.id);

  // Check if Index is valid and cart[Index] exists
  const isActive = Index >= 0 && cart[Index]?.quantity > 0;
  const activeProduct = isActive
    ? "rounded-xl overflow-hidden ring ring-creme duration-300"
    : "rounded-xl overflow-hidden duration-300";

  return (
    <div>
      <div className="relative">
        <div className={activeProduct}>
          <img
            className="size-full block md:hidden"
            src={product.image.mobile}
            alt="hello"
          />
          <img
            className="size-full hidden lg:hidden md:block"
            src={product.image.tablet}
            alt="hello"
          />
          <img
            className="size-full hidden lg:block"
            src={product.image.desktop}
            alt="hello"
          />
        </div>

        {/* Button */}
        {Index === -1 || cart[Index]?.quantity === 0 ? (
          <AddToCartBtn product={product} />
        ) : (
          <ChangeQuantityBtn product={product} />
        )}
      </div>

      <div className="pt-7">
        <p className="text-slate-400">{product.category}</p>
        <p className="itemAndPrice">{product.name}</p>
        <p className="itemAndPrice text-rose-700">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Product;
