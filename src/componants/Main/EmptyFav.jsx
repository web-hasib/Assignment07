import React from "react";
import { FaHeart } from "react-icons/fa6";

const EmptyFav = () => {
  return (
    <div>
      <h1 className="text-center flex items-center gap-2 justify-center pb-3">
        
        <FaHeart size={20} color="gray" /> Favorite Items
      </h1>
      <h1 className="border-b border-dashed text-gray-200"></h1>

      <div className="flex flex-col items-center justify-center h-64">
        <h1 className="text-xl font-bold text-gray-700">No favorites yet</h1>
        <p
          className="text-center mt-4
                            text-sm text-gray-600 font-semibold"
        >
          Click the heart icon on any item to add it to your favorites
        </p>
      </div>

      <h1 className="border-b border-dashed text-gray-200"></h1>

      <h2 className="flex justify-around mt-3 font-bold text-gray-700">
        Total bid amount <span>$ 0000</span>{" "}
      </h2>
    </div>
  );
};

export default EmptyFav;
