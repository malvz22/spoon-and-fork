import Link from "next/link";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full max-w-full mx-auto flex flex-col bg-white">
      <div className="w-full max-w-[1240px] flex flex-col-reverse lg:flex-row px-4 lg:px-16 mx-auto justify-between py-16 lg:py-40">
        <div className="flex flex-col w-full max-w-[400px]">
          <h1 className="font-bold text-[24px] text-[#F15025] mb-6">
            Spoon & Fork
          </h1>
          <p className="mb-10">
            Spoon & Fork: Your destination for mouthwatering recipes, cooking
            tips, and culinary inspiration. We make home cooking fun, easy, and
            accessible for food lovers of every skill level.
          </p>
          <ul className="flex flex-row flex-wrap gap-6">
            <Link href="/">
              <li className="social-media-list">
                <FaFacebookF />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="social-media-list">
                <RiInstagramFill />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="social-media-list">
                <FaPinterestP />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="social-media-list">
                <FaTiktok />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="social-media-list">
                <FaYoutube />
              </li>
            </Link>
            <Link href={"/"}>
              <li className="social-media-list">
                <FaXTwitter />
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row w-full max-w-full gap-8 mb-10 lg:gap-16 justify-start lg:justify-end">
          <ul className="flex flex-col gap-6">
            <li className="font-bold">Recipes</li>
            <li>All Recipes</li>
            <li>By Category</li>
            <li>Collections</li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="font-bold">About</li>
            <li>About Spoon & Fork</li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="font-bold">Help</li>
            <li>Contact</li>
          </ul>
        </div>
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
