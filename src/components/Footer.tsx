import Link from "next/link";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full max-w-full mx-auto flex flex-col bg-white">
      <div className="w-full max-w-[1240px] flex flex-col-reverse lg:flex-row px-4 lg:px-16 mx-auto justify-between py-16 lg:py-40">
        <div className="flex flex-col w-full max-w-[400px]">
          <h1 className="website-name font-bold text-[24px] text-[#F15025] mb-6">
            Spoon & Fork
          </h1>
          <p className="mb-10 text-black">
            Spoon & Fork: Your destination for mouthwatering recipes, cooking
            tips, and culinary inspiration. We make home cooking fun, easy, and
            accessible for food lovers of every skill level.
          </p>
          <nav className="flex flex-row flex-wrap gap-6">
            <Link href="/">
              <div className="social-media-list">
                <FaFacebookF />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="social-media-list">
                <RiInstagramFill />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="social-media-list">
                <FaPinterestP />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="social-media-list">
                <FaTiktok />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="social-media-list">
                <FaYoutube />
              </div>
            </Link>
            <Link href={"/"}>
              <div className="social-media-list">
                <FaXTwitter />
              </div>
            </Link>
          </nav>
        </div>
        <nav className="flex flex-col lg:flex-row w-full max-w-full gap-8 mb-10 lg:gap-16 justify-start lg:justify-end">
          <div className="flex flex-col gap-6">
            <div className="font-bold text-black">Recipes</div>
            <Link href={"/"}>
              <p className="text-black hover:text-[#F15025] transition-colors duration-700">
                All Recipes
              </p>
            </Link>
            <Link href={"/categories"}>
              <p className="text-black hover:text-[#F15025] transition-colors duration-700">
                By Category
              </p>
            </Link>
            <Link href={"/trending"}>
              <p className="text-black hover:text-[#F15025] transition-colors duration-700">
                Trending
              </p>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-bold text-black">About</p>
            <Link href={"/about"}>
              <p className="text-black hover:text-[#F15025] transition-colors duration-700">
                About Spoon & Fork
              </p>
            </Link>
          </div>
          <ul className="flex flex-col gap-6">
            <p className="font-bold text-black">Help</p>
            <Link href={"/contact"}>
              <p className="text-black hover:text-[#F15025] transition-colors duration-700">
                Contact
              </p>
            </Link>
          </ul>
        </nav>
      </div>
      <hr className="border-[#E8E8E8] border-solid border-[1px]" />
      <div className="py-10 px-4 lg:px-16 mx-auto w-full max-w-[1240px] hidden md:flex flex-row justify-between">
        <p className="text-[#737373]">
          Copyright © 2024 Spoon & Fork. All Right Reserved
        </p>
        <div className="text-[#F15025] flex flex-row gap-6">
          <Link href={"/"}>Terms of Service</Link>
          <Link href={"/"}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
