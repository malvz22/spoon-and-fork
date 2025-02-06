"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  //   Function to set the setOpenMenu to false if screen size large

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full max-w-full flex flex-col bg-white px-4 lg:px-16">
      <div className="flex flex-row w-full max-w-[1240px] justify-between mx-auto py-6 lg:py-8">
        <Link href={"/"}>
          <h1 className="font-bold text-[18px] text-[#F15025]">Spoon & Fork</h1>
        </Link>

        {/* Desktop Layout */}

        <div className="hidden lg:flex flex-row gap-6">
          <Link href={"/"}>
            <button className="hover:text-[#F15025] transition-all duration-700">
              Home
            </button>
          </Link>
          <Link href={"/recipes"}>
            <button className="hover:text-[#F15025] transition-all duration-700">
              Recipes
            </button>
          </Link>
          <Link href={"/meal-planner"}>
            <button className="hover:text-[#F15025] transition-all duration-700">
              Meal Planner
            </button>
          </Link>
          <Link href={"/about"}>
            <button className="hover:text-[#F15025] transition-all duration-700">
              About
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="hover:text-[#F15025] transition-all duration-700">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Layout */}

        <button
          className="lg:hidden text-[#F15025] text-[24px]"
          onClick={handleMenu}
        >
          <RxHamburgerMenu />
        </button>
      </div>
      <div
        className={`${
          openMenu ? "flex flex-col lg:hidden text-center" : "hidden"
        }`}
      >
        <Link href={"/"}>
          <button className="hover:text-[#F15025] transition-all duration-700 py-2">
            Home
          </button>
        </Link>
        <Link href={"/recipes"}>
          <button className="hover:text-[#F15025] transition-all duration-700 py-2">
            Recipes
          </button>
        </Link>
        <Link href={"/meal-planner"}>
          <button className="hover:text-[#F15025] transition-all duration-700 py-2">
            Meal Planner
          </button>
        </Link>
        <Link href={"/about"}>
          <button className="hover:text-[#F15025] transition-all duration-700 py-2">
            About
          </button>
        </Link>
        <Link href={"/contact"}>
          <button className="hover:text-[#F15025] transition-all duration-700 py-2">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
