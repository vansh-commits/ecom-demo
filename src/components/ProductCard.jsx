import React from 'react';

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 bg-white shadow-sm">
    <img src={product.img} alt={product.title} className="w-full h-40 object-cover" />
    <h2 className="mt-2 font-semibold">{product.title}</h2>
    <p className="text-sm text-gray-500">{product.company}</p>
    <p className="text-green-500 font-bold">${product.newPrice}</p>
    <p className="line-through text-sm text-gray-400">{product.prevPrice}</p>
  </div>
);

export default ProductCard;