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
  sourceName,
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
          sizes="100%"
          priority={false}
        />
      </div>
      <p className="text-2xl truncate font-medium group-hover:text-[#F15025] transition-colors duration-700">
        {title}
      </p>
      <div className="flex flex-row text-[#737373] font-medium justify-between md:justify-normal md:gap-4">
        <div className="flex flex-row items-center gap-2">
          <PiTimerFill size={24} />
          <p>{readyInMinutes} Mins</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <MdPeople size={24} />
          <p>{servings} Servings</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <FaStar size={20} color="#F15025" />
          <p className="">{spoonacularScore}</p>
        </div>
      </div>
      <div className="flex flex-row">{sourceName}</div>
    </div>
  );
};

export default RecipeCard;
