import React, { useState } from "react";
import ProductImage from "./ProductImage";
import QuantityControl from "./QuantityControl";
import { 
    cyan,
    blue,
    black,
    purple,
    herat, 
} from "../assets";
import Reviews from "./Reviews";
import BandColorSelector from "./BandColorSelector";
import WristSizeSelector from "./WristSizeSelector";

const bandColors = { cyan, blue, black, purple,};

const ProductDetails = ({ message, addToCart }) => {
  const [size, setSize] = useState("s");
  const [color, setColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);  

  const handleAddToCart = () => {
    const price = { s: 69, m: 79, l: 89, xl: 99 }[size] || 69;
    addToCart({ image: bandColors[color], color, size, quantity, price });
  };

  return (
    <>    
      {/* Product Image */}
      <ProductImage src={bandColors[color]} />

      {/* Product Details */}
      <div className="w-full md:w-[630px]">
        {/* Product Title and Reviews */}
        <h1 className="text-2xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-[#364A63] font-bold mb-2">
          Classy Modern Smart watch
        </h1>

        <Reviews/>

        {/* Pricing Section */}        
        <div className="flex items-center gap-1">
          <p className="line-through text-[#8091A7] text-lg md:text-xl">$99.00</p>
          <p className="text-[#6576FF] font-bold text-xl md:text-2xl">$79.00</p>
        </div>

        {/* Description */}
        <p className="py-2 md:py-4 lg:py-3 xl:py-5 text-[#8091A7] text-base md:text-lg lg:text-base xl:text-lg">I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.</p>

        {/* Product Info */}
        <div className="flex items-center gap-11 pb-4 lg:pb-3 xl:pb-5">
          <div>
            <p className="text-[#8091A7] text-sm pb-1">Type</p>
            <p className="text-[#364A63] text-base font-bold">Watch</p>
          </div>
          <div>
            <p className="text-[#8091A7] text-sm pb-1">Model Number</p>
            <p className="text-[#364A63] text-base font-bold">Forerunner 290XT</p>
          </div>
        </div>

        {/* Band Color Selector */}
        <BandColorSelector 
          selectedColor={color} 
          handleChange={(event) => setColor(event.target.dataset.color)} 
        />

        {/* Wrist Size Selector */}
        <WristSizeSelector 
          selectedSize={size} 
          handleChange={(event) => setSize(event.target.dataset.size)} 
        />

        {/* Quantity Control and Add to Cart */}
        <div className="flex items-center gap-3">
          <QuantityControl quantity={quantity} setQuantity={setQuantity}/>

          <button onClick={handleAddToCart} className="bg-[#6576FF] text-white font-bold px-5 py-1.5 rounded hover:bg-[#4D5DE0]">
            Add to Cart
          </button>

          <img src={herat} alt="heart-icon" className="cursor-pointer"/>
        </div>

        {/* Success Notice */}
        { message && <div className="mt-5 text-green-500">{message}</div> }
      </div>
    </>
  );
};

export default ProductDetails;