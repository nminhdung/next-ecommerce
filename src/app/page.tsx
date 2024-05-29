// "use client";
import CategoryList from "@/app/components/CategoryList";
import ProductList from "@/app/components/ProductList";
import Slider from "@/app/components/Slider";
import { useWixClient } from "@/app/hooks/useWix";
import { wixClientServer } from "@/app/lib/wixClientServer";
import { WixClientContext } from "@/context/wixContext";
import Image from "next/image";
import { Suspense, useContext, useEffect } from "react";

export default async function Home() {
  // const wixClient = useWixClient();
  // const getProducts = async () => {
  //   const res = await wixClient.products.queryProducts().find();
  //   console.log(res)
  // };
  // useEffect(() => {
  //   getProducts();
  // }, [wixClient]);

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={'loading'}>
          {/* Dấu "!" ở cuối đảm bảo với TS biến này chắc chắn k phải null hoặc undefined  */}
          <ProductList categoryId={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_CATEGORY_ID!} limit={4}/>
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl mb-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  );
}
