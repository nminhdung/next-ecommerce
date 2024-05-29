import { wixClientServer } from "@/app/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PRODUCT_PER_PAGE = 20;

async function ProductList({
  categoryId,
  limit,
  searchParams
}: {
  categoryId: string;
  limit?: number;
  searchParams?:any
}) {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap mt-12">
      {res.items.map((product: products.Product) => {
        return (
          <Link
            href={`/${product.slug}`}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                className="object-cover absolute rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt=""
                  className="object-cover absolute rounded-md"
                  fill
                />
              )}
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price?.price}</span>
            </div>
            {product.additionalInfoSections && (
              <div
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html:
                    product.additionalInfoSections?.find(
                      (section: any) => section.title === "shortDes"
                    )?.description || "",
                }}
              ></div>
            )}
            <button
              className="rounded-2xl ring-pinkLight ring-1 text-pinkLight py-2 px-4 
        text-xs hover:text-white hover:bg-pinkLight w-max transition-hover ease duration-300"
            >
              Add to Cart
            </button>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductList;
