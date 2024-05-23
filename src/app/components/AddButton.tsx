"use client";
import React, { useState } from "react";

//TEMPORARY
const stocks = 4;

function AddButton() {
  const [quantity, setQuantity] = useState<number>(1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleClickQuantity = (type: string) => {
    if (type === "plus" && quantity < stocks) {
      setQuantity((prev) => prev + 1);
    }
    if (type === "sub" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 ">
          <div className=" flex items-center bg-gray-100 py-2 px-4 rounded-3xl justify-between w-32">
            <button
              className="cursor-pointer"
              onClick={() => handleClickQuantity("sub")}
            >
              -
            </button>
            <input
              type="number"
              className="w-10 outline-none bg-transparent text-center"
              value={quantity}
              onChange={handleChange}
            />
            <button
              className="cursor-pointer"
              onClick={() => handleClickQuantity("plus")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-400">4 items left</span> (Don't)
            miss it
          </div>
        </div>
        <button
          className=" px-5 py-3 rounded-full ring-1 ring-pinkLight text-pinkLight 
      hover:text-white hover:bg-pinkLight transition-hover duration-300
       w-fit disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default AddButton;
