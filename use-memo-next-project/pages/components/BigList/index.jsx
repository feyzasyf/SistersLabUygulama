import React from "react";
import ProductCard from "../ProductCard";

const BigList = React.memo(({ productList, addToCart }) => {
  console.log("big list rendered");
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {productList.map((product) => (
        <ProductCard key={product.id} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
});

export default BigList;
