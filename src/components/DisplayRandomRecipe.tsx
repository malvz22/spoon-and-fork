import { ApiProps } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

const DisplayRandomRecipe: React.FC<ApiProps> = async ({ api }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {api.map((recipeData) => {
        return (
          <Link key={recipeData.id} href={`/recipe/${recipeData.id}`}>
            <div className="flex flex-col gap-3 group">
              <div className="relative w-full max-w-full aspect-[4/3] rounded-md overflow-hidden">
                <Image
                  src={recipeData.image}
                  fill
                  alt="food"
                  style={{ objectFit: "cover" }}
                  sizes="100%"
                  className="transform transition duration-500 ease-in-out group-hover:scale-110"
                  priority={false}
                />
              </div>
              <p className="font-bold group-hover:text-[#f15025] transition-colors duration-700 truncate">
                {recipeData.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DisplayRandomRecipe;
