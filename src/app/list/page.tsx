import Filter from "@/app/components/Filter";
import ProductList from "@/app/components/ProductList";
import { wixClientServer } from "@/app/lib/wixClientServer";
import Image from "next/image";
import { Suspense } from "react";

async function ListPage({ searchParams }: { searchParams: any }) {
  console.log(searchParams);
  const wixClient = await wixClientServer();
  const res = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="hidden bg-pink-50 p-4 sm:flex justify-between h-64 ">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on <br />
            Selected Products
          </h1>
          <button className="rounded-3xl bg-pinkLight text-white w-fit py-3 px-5 text-sm">
            Buy now
          </button>
        </div>
        <div className="w-1/3 relative">
          <Image src="/woman.png" alt="" fill className="object-contain " />
        </div>
      </div>
      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 font-semibold">{res.collection?.name} for you</h1>
      <Suspense fallback={"loading"}>
        {/* id: 00000000-000000-000000-000000000001 : all-products */}
        <ProductList
          categoryId={
            res.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}

export default ListPage;
