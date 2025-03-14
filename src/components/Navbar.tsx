"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Modal from "./Modal";
import LoginFormModalContent from "./LoginFormModalContent";
import SignUpFormModalContent from "./SignUpFormModalContent";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(true);

  const handleLogout = () => {
    setUser(null);
    router.push("/");
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    //default: login modal
    setModal(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const switchToRegister = () => setModal(false);

  const switchToLogin = () => setModal(true);

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
    <header className="sticky top-0 z-50 w-full max-w-full flex flex-col bg-white">
      <div className="flex flex-row w-full max-w-[1240px] justify-between items-center mx-auto px-4 lg:px-16 py-6 lg:py-8">
        <Link href={"/"}>
          <h1 className="website-name font-bold text-[24px] text-[#F15025]">
            Spoon & Fork
          </h1>
        </Link>

        {/* Desktop Layout */}

        <nav className="hidden lg:flex flex-row gap-6 text-black">
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
        <nav className="flex flex-row gap-6 text-black">
          {user ? (
            <div className="flex flex-row gap-3 cursor-pointer justify-center items-center">
              <Link href={`/profile/${user.username}`}>
                <Image
                  src={user.profilePic}
                  alt="profile-pic"
                  width={32}
                  height={32}
                />
              </Link>

              <button
                onClick={handleLogout}
                className="text-[#f15025] cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <button
                className="text-[#f15025] cursor-pointer"
                onClick={handleOpenModal}
              >
                Login
              </button>
            </div>
          )}
          <button
            className="lg:hidden text-[#F15025] text-[24px]"
            onClick={handleMenu}
          >
            <RxHamburgerMenu />
          </button>
        </nav>
      </div>
      <nav
        className={`${
          openMenu
            ? "flex flex-col lg:hidden text-center animate-slide-in-top"
            : "hidden"
        }`}
      >
        <Link href={"/"}>
          <button
            onClick={handleCloseMenu}
            className="hover:text-[#F15025] transition-all duration-700 py-2"
          >
            Home
          </button>
        </Link>
        <Link href={"/categories"}>
          <button
            onClick={handleCloseMenu}
            className="hover:text-[#F15025] transition-all duration-700 py-2"
          >
            Categories
          </button>
        </Link>
        <Link href={"/about"}>
          <button
            onClick={handleCloseMenu}
            className="hover:text-[#F15025] transition-all duration-700 py-2"
          >
            About
          </button>
        </Link>
        <Link href={"/contact"}>
          <button
            onClick={handleCloseMenu}
            className="hover:text-[#F15025] transition-all duration-700 py-2"
          >
            Contact
          </button>
        </Link>
      </nav>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        {modal ? (
          <LoginFormModalContent
            onSwitch={switchToRegister}
            onClose={handleCloseModal}
          />
        ) : (
          <SignUpFormModalContent
            onSwitch={switchToLogin}
            onClose={handleCloseModal}
          />
        )}
      </Modal>
    </header>
  );
};

export default Navbar;
