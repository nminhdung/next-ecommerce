"use client";
import CartModal from "@/app/components/CartModal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NavIcons() {
  const [isProfileOpen, setProfileOpen] = useState<boolean>(false);
  const [isCartOpen, setCartOpen] = useState<boolean>(false);
  const router = useRouter();
  // TEMPORARY
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="flex flex-col absolute rounded-md p-4 top-12 text-sm shadow-md z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />{" "}
      <div className="relative">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setCartOpen((prev) => !prev)}
        />
        <div
          className="absolute text-white -top-4 -right-4 size-6 bg-pinkLight 
        text-sm  flex items-center justify-center rounded-full"
        >
          2
        </div>
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
}

export default NavIcons;
