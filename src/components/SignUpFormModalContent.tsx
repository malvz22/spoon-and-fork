import { Switch } from "@/types/modal";
import { FaLock, FaUser } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const SignUpFormModalContent: React.FC<Switch> = ({ onSwitch }) => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-2xl font-bold mb-8 text-black">SIGN UP</h1>
      <form className="flex flex-col justify-center items-center w-[300px] gap-5">
        <div className="relative w-full text-gray-500">
          <FaUser className="absolute top-3 left-2" />
          <input
            className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
            placeholder="Username"
            type="text"
            name="username"
          />
        </div>
        <div className="relative w-full text-gray-500">
          <IoMail className="absolute top-3 left-2" />
          <input
            className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
            placeholder="Email"
            type="email"
            name="email"
          />
        </div>
        <div className="relative w-full text-gray-500">
          <FaLock className="absolute top-3 left-2" />
          <input
            className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
            placeholder="Password"
            type="password"
            name="password"
          />
        </div>
        <div className="relative w-full text-gray-500">
          <FaLock className="absolute top-3 left-2" />
          <input
            className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
            placeholder="Confirm Password"
            type="password"
            name="confirm-password"
          />
        </div>
        <button
          type="submit"
          className="px-12 py-3 bg-[#F15025] w-auto inline-block text-white rounded-md mt-4 "
        >
          Sign Up
        </button>
      </form>

      <div className="flex flex-col gap-1 justify-center items-center text-black">
        <p>By creating an account, you agree to our</p>
        <button className="cursor-pointer text-[#F15025]" onClick={onSwitch}>
          Term & Conditions
        </button>
      </div>
    </div>
  );
};

export default SignUpFormModalContent;
