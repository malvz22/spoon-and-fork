import { ratingConversion } from "@/lib/api";
import { DetailedApiProps } from "@/types/recipe";
import { FaStar } from "react-icons/fa6";

const RecipeHeader: React.FC<DetailedApiProps> = ({ api }) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <p>
        Submitted by <strong>{api.sourceName}</strong>
      </p>
      <div className="flex gap-2 items-center text-xl">
        <FaStar color="#F15025" />
        <p>{ratingConversion(api.spoonacularScore)}</p>
      </div>
    </div>
  );
};

export default RecipeHeader;
