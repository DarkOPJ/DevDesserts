import React, { useContext, useState } from "react";
import CartContext from "../context/CartContextProvider";

const Food = ({ name, description, price }) => {
    const [numberPicked, setNumberPicked] = useState(1)
    const { cartDispatch} = useContext(CartContext)

    const addToCart = (e) => {
        e.preventDefault()

        const foodItem = {
            name,
            description,
            price,
            numberPicked,
            totalPrice: 0,
        }
        cartDispatch({ type: "ADD_TO_CART", foodItem: foodItem });

        setNumberPicked(1);
    }

  return (
    <div className="flex justify-between gap-2 border-b py-3 border-b-gray-300">
      <div>
        <h4 className="font-extrabold text-lg">{name}</h4>
        <p className="italic font-light">{description}</p>
        <h4 className="font-extrabold text-lg text-amber-700">${price.toFixed(2)}</h4>
      </div>

      <form
        className="space-y-2 w-fit"
        onSubmit={addToCart}
      >
        <div className="space-x-2">
          <label className="font-extrabold" htmlFor="amount">
            Amount
          </label>

          <input
            className="border border-gray-300 focus:outline-amber-900 text-sm pl-1.5 rounded-sm w-12"
            type="number"
            name="cartNumber"
            id="amount"
            min={1}
            max={20}
            value={numberPicked}
            onChange={(e) => setNumberPicked(parseInt(e.target.value) || 1)}
          />
        </div>
        <button
          className="py-1 px-4 rounded-full text-white bg-amber-950 font-bold text-sm w-24 text-nowrap block ml-auto cursor-pointer hover:bg-red-900 transition-colors"
        >
          + Add
        </button>
      </form>
    </div>
  );
};

export default Food;
