import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { PiTimerFill } from "react-icons/pi";

const RecipeCard = ({
  image,
  title,
  readyInMinutes,
  servings,
  spoonacularScore,
  creditsText,
}: Recipe) => {
  return (
    <div className="group flex flex-col w-full gap-2">
      <div className="w-full aspect-[430/400] relative rounded-[14px] overflow-hidden">
        <Image
          src={image}
          alt="food"
          fill
          style={{ objectFit: "cover" }}
          className="transform transition duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <p className="text-2xl">{title}</p>
      <div className="flex flex-row text-[#737373] justify-between md:justify-normal md:gap-4">
        <div className="flex flex-row items-center gap-2">
          <PiTimerFill size={24} />
          <p>{readyInMinutes} Mins</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdPeople size={24} />
          <p>{servings} Servings</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <FaStar color="#F15025" />
          <p>{spoonacularScore}</p>
        </div>
      </div>
      <div className="flex flex-row">{creditsText}</div>
    </div>
  );
};

export default RecipeCard;
