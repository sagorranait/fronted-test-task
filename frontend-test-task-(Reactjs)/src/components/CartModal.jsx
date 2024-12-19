import React from "react";

const CartModal = ({ cart, totalQuantity, toggleCartModal }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-[20px] w-full m-5 md:m-0 md:w-5/6 lg:w-3/5 2xl:w-1/2 p-11 shadow-lg">
          <h2 className="text-2xl text-[#364A63] font-bold mb-4">Your Cart</h2>

          <table className="w-full text-left">
            <thead className="border-b border-[#DBDFEA]">
              <tr>
                <th className="py-2 text-[#8091A7]">Item</th>
                <th className="py-2 text-center text-[#8091A7]">Color</th>
                <th className="py-2 text-center text-[#8091A7]">Size</th>
                <th className="py-2 text-center text-[#8091A7]">Qnt</th>
                <th className="py-2 text-[#8091A7] text-right">Price</th>
              </tr>
            </thead>
            <tbody className="border-t">
              {cart.map((item, index) => (
                <tr className="border-b border-[#DBDFEA]" key={index}>
                  <td className="py-4 flex items-center gap-2">
                      <img src={item.image} alt="Product Image" className="w-12 rounded-lg" />
                      <p className="hidden md:block">Classy Modern Smart watch</p>
                  </td>
                  <td className="py-4 px-4 text-center capitalize">{item.color}</td>
                  <td className="py-4 px-4 font-bold text-center uppercase">{item.size}</td>
                  <td className="py-4 px-8 font-bold text-center">{item.quantity}</td>
                  <td className="py-4 text-right">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
              <tr>                  
                <td className="py-4 capitalize" colSpan={3}>Total</td>
                <td className="py-4 px-4 font-bold text-center uppercase">{totalQuantity}</td>
                <td className="py-4 font-bold text-right">${totalPrice.toFixed(2) || 0.00}</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end mt-6 gap-4">
            <button onClick={toggleCartModal} className="border px-4 py-2 rounded hover:bg-gray-200">Continue Shopping</button>
            <button onClick={toggleCartModal} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800">Checkout</button>
          </div>
        </div>
      </div>
  );
};

export default CartModal;
