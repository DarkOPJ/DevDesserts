import React, { useContext, useState } from "react";
import { CartContextApi } from "../context_apis/CartContext";

const AddToCartBtn = ({product}) => {
  const [addedQuantityProduct, setAddedQuantityProduct] = useState({...product, quantity: 0})
  const { dispatch } = useContext(CartContextApi);
 
  const increaseQuantity = () => {
    const updatedProduct = {
      ...addedQuantityProduct,
      quantity: addedQuantityProduct.quantity ? addedQuantityProduct.quantity + 1 : 1,
    };
    setAddedQuantityProduct(updatedProduct); // Update the state with the new product object

    dispatch({ type: "Add", product: updatedProduct }); // Dispatch the updated product
  };
  return (
    <button
      onClick={increaseQuantity}
      className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] py-2.5 px-8 border border-slate-400 rounded-full bg-white flex gap-2 font-redhat font-semibold w-[182px] hover:border-creme hover:text-creme"
    >
      <img src="./svgs/icon-add-to-cart.svg" alt="" />
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
