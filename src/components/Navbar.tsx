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
    <header className="sticky top-0 z-50 w-full max-w-full flex flex-col bg-white px-4 lg:px-16">
      <div className="flex flex-row w-full max-w-[1240px] justify-between items-center mx-auto py-6 lg:py-8">
        <Link href={"/"}>
          <h1 className="website-name font-bold text-[24px] text-[#F15025]">
            Spoon & Fork
          </h1>
        </Link>

        {/* Desktop Layout */}

        <nav className="hidden lg:flex flex-row gap-6">
          <Link href={"/"}>
            <button className="hover:text-[#F15025] transition-all duration-700">
              Home
            </button>
          </Link>
          <Link href={"/categories"}>
            <button className="hover:text-[#F15025] transition-all duration-700">
              Categories
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
        </nav>

        {/* Mobile Layout */}

        <button
          className="lg:hidden text-[#F15025] text-[24px]"
          onClick={handleMenu}
        >
          <RxHamburgerMenu />
        </button>
      </div>
      <nav
        className={`${
          openMenu ? "flex flex-col lg:hidden text-center" : "hidden"
        }`}
      >
        <Link href={"/"}>
          <button className="hover:text-[#F15025] transition-all duration-700 py-2">
            Home
          </button>
        </Link>
        <Link href={"/categories"}>
          <button className="hover:text-[#F15025] transition-all duration-700 py-2">
            Categories
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
      </nav>
    </header>
  );
};

export default Navbar;
