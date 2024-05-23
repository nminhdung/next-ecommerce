import React from "react";

function CustomizeProduct() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose Color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer bg-red-500 relative">
          <div className="absolute w-10 h-10 ring-2 rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer bg-blue-500 relative"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed bg-green-500 relative">
          <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose Size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-pinkLight text-pinkLight rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-pinkLight bg-pinkLight text-white rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-white text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul>
    </div>
  );
}

export default CustomizeProduct;
