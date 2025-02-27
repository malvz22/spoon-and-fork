import { Switch } from "@/types/modal";
import { FaLock, FaUser } from "react-icons/fa6";

const LoginFormModalContent: React.FC<Switch> = ({ onSwitch }) => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <h1 className="text-2xl font-bold mb-8 text-black">LOGIN</h1>
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
          <FaLock className="absolute top-3 left-2" />
          <input
            className="border-b-[1px] border-solid border-gray-300 ps-8 py-2 w-full focus:outline-none"
            placeholder="Password"
            type="password"
            name="password"
          />
        </div>

        <button
          type="submit"
          className="px-12 py-3 bg-[#F15025] w-auto inline-block text-white rounded-md mt-4 "
        >
          Login
        </button>
      </form>

      <div className="flex gap-2 justify-center items-center text-black">
        <p>Don&apos;t have an account?</p>
        <button className="cursor-pointer text-[#F15025]" onClick={onSwitch}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginFormModalContent;
