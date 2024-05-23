"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/20890415/pexels-photo-20890415/free-photo-of-cobblestone-road-towards-eltz-castle-in-germany.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/8408546/pexels-photo-8408546.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/23428032/pexels-photo-23428032/free-photo-of-oatmeal-in-a-jar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/11399644/pexels-photo-11399644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];
function ProductImage() {
  const [currentPreviewImage, setCurrentPreviewImage] = useState(0);
  return (
    <div>
      <div className="h-[500px] w-full relative">
        <Image
          src={images[currentPreviewImage].url}
          alt=""
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between mt-8 gap-4">
        {images.map((image) => {
          return (
            <div className="w-1/4 h-32 relative cursor-pointer" key={image.id}>
              <Image
                src={image.url}
                alt=""
                fill
                className="object-cover rounded-md"
                onClick={() => setCurrentPreviewImage(image.id - 1)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImage;
