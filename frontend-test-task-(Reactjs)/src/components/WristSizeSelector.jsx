import React from 'react'

const WristSizeSelector = ({ selectedSize, handleChange }) => {
    const sizes = [
        { size: "s", price: "$69" },
        { size: "m", price: "$79" },
        { size: "l", price: "$89" },
        { size: "xl", price: "$99" },
    ];

  return (
    <>
        <p className="font-semibold text-lg md:text-xl my-5 mb-2.5">Wrist Size</p>
        <div className="flex gap-4 mb-5">
            {sizes.map(({ size, price }) => (
            <label
                key={size}
                className="relative flex items-center cursor-pointer"
            >
                <input
                    type="radio"
                    name="size"
                    className="hidden peer"
                    data-size={size}
                    checked={selectedSize === size}
                    onChange={handleChange}
                />
                <span className="product-size flex items-center justify-center gap-2 w-[73px] h-9 ring-2 ring-[#DBDFEA] rounded peer-checked:ring-[#6576FF]">
                <span className={`product-size-text text-base font-bold ${selectedSize === size ? 'text-[#6576FF]' : 'text-[#364A63]'}`}>
                    {size.toUpperCase()}
                </span>
                <span className="text-sm text-[#8091A7]">{price}</span>
                </span>
            </label>
            ))}
        </div>
    </>
  )
}

export default WristSizeSelector