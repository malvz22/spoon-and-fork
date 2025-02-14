"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSearchInput = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const keyword = searchRef.current?.value;
    if (!keyword) return;
    if (e.type === `keydown`) {
      const keyboardEvent = e as React.KeyboardEvent<HTMLInputElement>;
      if (keyboardEvent.key === `Enter`) {
        e.preventDefault();
        router.push(`/search/${keyword}`);
      }
    } else if (e.type === `click`) {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="flex flex-row gap-4 w-full max-w-full justify-center items-center">
      <input
        className="px-5 py-3 rounded-lg w-full max-w-[1024px] text-black"
        placeholder="search a recipe here"
        ref={searchRef}
        onKeyDown={handleSearchInput}
      />
      <button
        className="bg-[#F15025] px-6 py-3 md:px-10 md:py-3 rounded-lg"
        onClick={handleSearchInput}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
