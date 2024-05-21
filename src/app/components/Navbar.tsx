import Menu from "@/app/components/Menu";
import NavIcons from "@/app/components/NavIcons";
import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" className="text-2xl tracking-wider">
          MyStore
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center h-full justify-between gap-8 ">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wider">MyStore</div>
          </Link>
          <div className="hidden md:flex gap-4 items-cener">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
