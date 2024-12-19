import React from "react";

const QuantityControl = ({ quantity, setQuantity }) => {
  const updateQuantity = (change) => {
    setQuantity(Math.max(1, quantity + change)); // Ensure the quantity is at least 1
  };

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity); // Update the quantity only if it's valid
    }
  };

  return (
    <div className="w-32 h-9 flex items-center justify-between border border-[#DBDFEA] rounded">
      <button
        onClick={() => updateQuantity(-1)}
        className="text-base text-[#8091A7] px-2 h-9 border-r"
      >
        -
      </button>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={handleInputChange}
        className="text-base text-center w-14 bg-transparent outline-none"
        min="1"
      />
      <button
        onClick={() => updateQuantity(1)}
        className="text-base text-[#8091A7] px-2 h-9 border-l"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;