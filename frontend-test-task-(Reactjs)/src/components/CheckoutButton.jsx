import React from 'react'

const CheckoutButton = ({ cart, toggleCartModal }) => {
  return (
    <div onClick={toggleCartModal} className="w-36 m-auto mt-5 flex bg-[#FFBB5A] text-[#364A63] font-bold px-6 py-2 rounded-full items-center cursor-pointer shadow-lg">
      Checkout <span id="cart-count" className="ml-2 bg-white rounded font-bold px-1.5 pt-0.5">{cart.length || 0}</span>
    </div>
  )
}

export default CheckoutButton