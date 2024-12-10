import React, { useContext } from 'react'
import { CartContextApi } from '../context_apis/CartContext'

const CartProduct = ({isModal, singleProduct, accumulatedPrice=0}) => {
  const {cart, dispatch} = useContext(CartContextApi)

  const Index = cart.findIndex((p) => p.id === singleProduct.id)
  const removeProduct = () => {
    cart[Index].quantity = 0
    dispatch({ type: "Remove", id: singleProduct.id })
  }

  accumulatedPrice = singleProduct.quantity * singleProduct.price;

  if(isModal){
    return(
      <div className="border-b-[1px] py-3 flex items-center justify-between">

          <div className="flex gap-3">
            <img className="w-9 rounded-[4px]" src={singleProduct.image.thumbnail} alt=""/>
            <div className="space-y-1.5">
              <p className="text-xs font-semibold">{singleProduct.name}</p>
              <div className="flex gap-3.5 text-xs font-semibold">
                <p className="text-creme">{singleProduct.quantity}x</p>
                <p className="text-slate-400">@ ${singleProduct.price.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <p className="text-xs font-semibold">${accumulatedPrice.toFixed(2)}</p>          
        </div>
    )
  }
  else{
    return (
      <div className="border-b-[1px] py-3 flex items-center justify-between">
              <div className="space-y-1.5">
                <p className="text-sm font-semibold">{singleProduct.name}</p>
                <div className="flex gap-3.5 text-sm font-semibold">
                  <p className="text-creme">{singleProduct.quantity}x</p>
                  <p className="text-slate-400">@ ${singleProduct.price.toFixed(2)}</p>
                  <p className="text-slate-500">${accumulatedPrice.toFixed(2)}</p>
                </div>
              </div>
  
              <button onClick={removeProduct}
                className="text-[#64748b] outline-0 p-0.5 border-[1.5px] border-[#64748b] hover:text-black hover:border-black duration-500 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    fill="currentcolor"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                  />
                </svg>
              </button>
            </div>
    )
  }
}

export default CartProduct