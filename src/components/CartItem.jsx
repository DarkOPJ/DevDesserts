import React, { useContext } from "react";
import CartContext from "../context/CartContextProvider";

const CartItem = ({name, price, numberPicked}) => {
    const {cartDispatch} = useContext(CartContext)
  return (
    <div className="py-4 border-b-2 border-b-amber-800 flex justify-between items-center gap-5">
      <div className="font-bold">
        <h2 className="text-2xl">{name}</h2>
        <div className="flex justify-between items-center w-40">
          <p className="text-amber-800 text-sm">${price.toFixed(2)}</p>
          <div className="py-1 px-3 border border-slate-300 rounded-md w-fit">x {numberPicked}</div>
        </div>
      </div>
      <div className="font-bold space-x-2">
      <button onClick={() => cartDispatch({ type: "DECREASE", name: name })} className="py-2 px-5 leading-none border border-amber-800 text-amber-800 rounded-md w-fit cursor-pointer hover:bg-amber-800 hover:text-white transition-colors">-</button>
      <button onClick={() => cartDispatch({ type: "INCREASE", name: name })} className="py-2 px-5 leading-none border border-amber-800 text-amber-800 rounded-md w-fit cursor-pointer hover:bg-amber-800 hover:text-white transition-colors">+</button>

      </div>
    </div>
  );
};

export default CartItem;
