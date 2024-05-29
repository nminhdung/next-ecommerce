import { wixClientServer } from "@/app/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function CategoryList() {
  const wixClient = await wixClientServer();
  const cate = await wixClient.collections.queryCollections().find();
  console.log("🚀 ~ CategoryList ~ cate:", cate);
  return (
    <div className="px-4 overflow-x-scroll scrollbar-thumb-black scrollbar-track-gray-200 scrollbar-thin">
      <div className="flex gap-4 md:gap-8">
        {cate?.items.map((category) => {
          return (
            <Link
              key={category._id}
              href={`/list?cat=${category.slug}`}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            >
              <div className="w-full h-96 relative">
                <Image
                  src={category?.media?.mainMedia?.image?.url || '/category.png'}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="mt-8 font-light tracking-wider">
                {category.name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
