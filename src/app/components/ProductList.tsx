import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductList() {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="object-cover absolute rounded-md"
            fill
          />
          <div>h1</div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button
          className="rounded-2xl ring-pinkLight ring-1 text-pinkLight py-2 px-4 
        text-xs hover:text-white hover:bg-pinkLight w-max transition-hover ease duration-300"
        >
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="object-cover absolute rounded-md"
            fill
          />
          <div>h1</div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button
          className="rounded-2xl ring-pinkLight ring-1 text-pinkLight py-2 px-4 
        text-xs hover:text-white hover:bg-pinkLight w-max transition-hover ease duration-300"
        >
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="object-cover absolute rounded-md"
            fill
          />
          <div>h1</div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button
          className="rounded-2xl ring-pinkLight ring-1 text-pinkLight py-2 px-4 
        text-xs hover:text-white hover:bg-pinkLight w-max transition-hover ease duration-300"
        >
          Add to Cart
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            className="object-cover absolute rounded-md"
            fill
          />
          <div>h1</div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button
          className="rounded-2xl ring-pinkLight ring-1 text-pinkLight py-2 px-4 
        text-xs hover:text-white hover:bg-pinkLight w-max transition-hover ease duration-300"
        >
          Add to Cart
        </button>
      </Link>
    </div>
  );
}

export default ProductList;
