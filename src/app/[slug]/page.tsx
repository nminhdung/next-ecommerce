import AddButton from "@/app/components/AddButton";
import CustomizeProduct from "@/app/components/CustomizeProduct";
import ProductImage from "@/app/components/ProductImage";
import React from "react";

function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adip
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-8">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProduct />
        <AddButton />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adips</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adips</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adips</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
