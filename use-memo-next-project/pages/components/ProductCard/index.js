import React from "react";

const ProductCard = ({ fields, addToCart }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="w-64 h-72 bg-gray-300 rounded-md text-gray-900">
      <img
        className="object-cover w-full h-48 rounded-md"
        src={image}
        alt={name}
      />
      <div className="flex flex-col justify-center ">
        <div className="flex justify-between px-2 py-4">
          <h4 className="capitalize">{name}</h4>
          <p>${price}</p>
        </div>
        <button
          className="m-auto px-2 py-1 w-1/2 bg-gray-400 rounded-md hover:bg-gray-500 hover:text-gray-300"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
<img></img>;
