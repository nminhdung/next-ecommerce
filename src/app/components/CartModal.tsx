import Image from "next/image";
import React from "react";

function CartModal() {
  const cartItems: boolean = true;
  return (
    <div className="w-max absolute p-4 bg-white rounded-lg shadow-md  top-12 right-0 flex flex-col gap-6">
      {cartItems ? (
        <>
          <h2 className="">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex  gap-4">
              <Image
                src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={72}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50  rounded-sm">$49</div>
                  </div>
                  {/* DESCRIPTION */}
                  <span className="text-sm bg-green-300">available</span>
                </div>
                {/* BOT */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex  gap-4">
              <Image
                src="https://images.pexels.com/photos/13631636/pexels-photo-13631636.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50  rounded-sm">$49</div>
                  </div>
                  {/* DESCRIPTION */}
                  <span className="text-sm bg-green-300">available</span>
                </div>
                {/* BOT */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 ring-1 bg-black text-white ring-gray-300">
                Check Out
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="">Cart items is empty</div>
      )}
    </div>
  );
}

export default CartModal;
