import Image from "next/image";
import Link from "next/link";
import React from "react";

function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-thumb-black scrollbar-track-gray-200 scrollbar-thin">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
        <Link
          href="/list?cart=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="w-full h-96 relative">
            <Image
              src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light tracking-wider">Category Name</h1>
        </Link>
      </div>
    </div>
  );
}

export default CategoryList;
