import React from "react";

const Card = (props) => {
  console.log(props);
  return (
  <div className="w-72 bg-slate-900 border border-emerald-900/60 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
  
  {/* Product Image */}
  <div className="h-48 bg-slate-900 flex items-center justify-center">
    <img
      src={props.image}
      alt="Product"
      className="h-40 object-contain"
    />
  </div>

  {/* Product Info */}
  <div className="p-4 space-y-2">
    <h2 className="text-lg font-semibold text-emerald-200">
      {props.title}
    </h2>

    <p className="text-sm text-gray-400">
      {props.description}
    </p>

    {/* Price & Rating */}
    <div className="flex items-center justify-between">
      <span className="text-xl font-bold text-emerald-400">₹{props.price}</span>
      <span className="text-sm text-yellow-400">⭐ 4.5</span>
    </div>

    {/* Buttons */}
    <div className="flex gap-2 pt-2">
      <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition">
        Add to Cart
      </button>

      <button className="flex-1 border border-b-gray-950 text-white py-2 rounded-lg hover:bg-black transition">
        Buy Now
      </button>
    </div>
  </div>
</div>

  );
}
export default Card;