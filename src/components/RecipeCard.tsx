import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { PiTimerFill } from "react-icons/pi";

const RecipeCard = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="w-full aspect-[430/400] relative rounded-[14px] overflow-hidden">
        <Image
          src={`/Images/food-example.jpg`}
          alt="food"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p className="text-2xl">Recipe Title Here</p>
      <div className="flex flex-row text-[#737373] gap-4">
        <div className="flex flex-row items-center gap-2">
          <PiTimerFill size={24} />
          <p>20 Mins</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdPeople size={24} />
          <p>1 Servings</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <FaStar />
          <p>4.8</p>
        </div>
      </div>
      <div className="flex flex-row">Username</div>
    </div>
  );
};

export default RecipeCard;
