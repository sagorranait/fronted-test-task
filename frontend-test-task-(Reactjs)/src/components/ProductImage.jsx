import React from "react";

const ProductImage = ({ src }) => (
  <div>
    <img
      id="product-image"
      src={src}
      alt="Smartwatch"
      className="rounded-lg shadow-lg w-full"
    />
  </div>
);

export default ProductImage;
