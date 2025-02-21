import { ApiProps } from "@/types/recipe";
import Image from "next/image";
import Link from "next/link";

const DisplayRecipeAside: React.FC<ApiProps> = async ({ api }) => {
  return (
    <div className="flex flex-col gap-4">
      {api.map((recipeData) => {
        return (
          <Link key={recipeData.id} href={`/recipe/${recipeData.id}`}>
            <div className="flex flex-row justify-start items-center gap-3 group">
              <div className="relative w-full max-w-[110px] aspect-[13/10] rounded-sm overflow-hidden">
                <Image
                  src={recipeData.image}
                  alt="food"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="100%"
                  className="transform transition duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <h3 className="text-md font-bold group-hover:text-[#F15025] transition-colors duration-700">
                {recipeData.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default DisplayRecipeAside;
