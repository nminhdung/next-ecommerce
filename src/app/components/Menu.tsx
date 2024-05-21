"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Menu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpenMenu((preOpenMenu) => !preOpenMenu)}
      />
      {openMenu && (
        <div
          className="absolute bg-black text-white left-0 top-20 
            w-full h-[calc(100vh-80px)] flex flex-col justify-center gap-8 items-center text-xl"
        >
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
