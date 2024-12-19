import React from 'react'

const BandColorSelector = ({ selectedColor, handleChange }) => {
    const redioInputs = [
        { color: "purple", hex: "#816BFF" },
        { color: "cyan", hex: "#1FCEC9" },
        { color: "blue", hex: "#4B97D3" },
        { color: "black", hex: "#3B4747" },
    ];
  return (
    <>
        <p className="font-semibold text-lg md:text-xl mb-2.5">Band Color</p>
        <div className="flex space-x-4">
          {redioInputs.map(({ color, hex }) => (
            <label
              key={color}
              className="color-option relative flex items-center cursor-pointer"
            >
              <input
                type="radio"
                name="color"
                className="hidden peer"
                data-color={color}
                checked={selectedColor === color}
                onChange={handleChange}
              />
              <span className={`flex items-center justify-center w-6 h-6 rounded-full peer-checked:ring-2 peer-checked:ring-[${hex}]`}>
                <span className="w-5 h-5 rounded-full" style={{ backgroundColor: hex }}></span>
              </span>
            </label>
          ))}
        </div>
    </>
  )
}

export default BandColorSelector