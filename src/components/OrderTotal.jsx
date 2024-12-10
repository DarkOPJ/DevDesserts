import React, { useContext } from 'react'
import { CartContextApi } from '../context_apis/CartContext'

const OrderTotal = ({ padding, normalText, largeText, total=0 }) => {
  const {cart} = useContext(CartContextApi)

  // Calculate the order total
  total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className={`flex items-center justify-between ${padding}`}>
          <p className={normalText}>Order Total</p>
          <h2 className={`font-bold ${largeText}`}>{`$${total.toFixed(2)}`}</h2>
        </div>
  )
}

export default OrderTotal