import AddButton from "@/app/components/AddButton";
import CustomizeProduct from "@/app/components/CustomizeProduct";
import ProductImage from "@/app/components/ProductImage";
import { wixClientServer } from "@/app/lib/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

async function SinglePage({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();
  // console.log("🚀 ~ SinglePage ~ res:", products);
  if (!products?.items[0]) {
    return notFound();
  }
  const product = products.items[0];
  console.log("🚀 ~ SinglePage ~ product:", product);
  console.log(product?.variants);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImage items={product?.media?.items} />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl">{product?.name}</h1>
        <p className="text-gray-500">{product?.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product?.price?.price === product?.price?.discountedPrice ? (
          <h3 className="text-2xl font-medium">${product?.price?.price}</h3>
        ) : (
          <div className="flex items-center gap-8">
            <h3 className="text-xl text-gray-500 line-through">
              ${product?.price?.price}
            </h3>
            <h2 className="text-2xl font-medium">
              ${product?.price?.discountedPrice}
            </h2>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />
        {product?.variants && product?.productOptions && (
          <CustomizeProduct
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <AddButton />
        <div className="h-[2px] bg-gray-100" />
        {product?.additionalInfoSections?.map((section: any) => {
          return (
            <div className="text-sm" key={section.title}>
              <h4 className="font-medium mb-4">{section.title}</h4>
              <p>{section.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SinglePage;
