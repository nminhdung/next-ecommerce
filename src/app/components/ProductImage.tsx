"use client";
import Image from "next/image";
import React, { useState } from "react";


function ProductImage({items}:{items:any}) {
  const [currentPreviewImage, setCurrentPreviewImage] = useState(0);
  return (
    <div>
      <div className="h-[500px] w-full relative">
        <Image
          src={items[currentPreviewImage]?.image?.url}
          alt=""
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between mt-8 gap-4">
        {items.map((item:any) => {
          return (
            <div className="w-1/4 h-32 relative cursor-pointer" key={item._id}>
              <Image
                src={item?.image?.url}
                alt=""
                fill
                className="object-cover rounded-md"
                onClick={() => setCurrentPreviewImage(item.id - 1)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImage;
