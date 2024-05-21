"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [searchKey, setSearchKey] = useState<string>("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKey) {
      router.push(`/list?name=${searchKey}`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="searchKey"
        placeholder="Search"
        onChange={handleChange}
        value={searchKey}
        className="bg-transparent outline-none flex-1"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;
