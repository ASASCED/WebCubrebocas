import React from "react";

export const Product = () => {
  return (
    <div className="product">
      <img
        src="https://cdn.shopify.com/s/files/1/0025/1710/6777/products/MascarillaN95KN95Cubrebocas.png?v=1588263033"
        alt=""
      />

      <div className="move">
        <button>
          <i class="fas fa-chevron-circle-left"></i>
        </button>
        <button>
          <i class="fas fa-chevron-circle-right"></i>
        </button>
      </div>
    </div>
  );
};
