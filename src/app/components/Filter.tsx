import React from "react";

function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Type</option>
          <option value="physical">physical</option>
          <option value="digital">digital</option>
        </select>
        <input
          type="text"
          name="minPrice"
          className="text-xs rounded-2xl w-24  pl-2 ring-1 ring-gray-400"
          placeholder="min"
        />
        <input
          type="text"
          name="maxPrice"
          className="text-xs rounded-2xl w-24  pl-2 ring-1 ring-gray-400"
          placeholder="max"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Size</option>
        
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Color</option>
          
        </select>
        <select
          name="Category"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Category</option>
       
        </select>
      </div>
      <div className="">
      <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
