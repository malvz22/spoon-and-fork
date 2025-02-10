import { ApiProps, Recipe } from "@/types/recipe";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
import { ratingConversion } from "@/lib/api";

const RecipeList: React.FC<ApiProps> = async ({ api }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {api.map((recipe: Recipe) => {
        return (
          <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
            <RecipeCard
              image={recipe.image}
              title={recipe.title}
              id={recipe.id}
              servings={recipe.servings}
              readyInMinutes={recipe.readyInMinutes}
              spoonacularScore={ratingConversion(recipe.spoonacularScore)}
              creditsText={recipe.creditsText}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default RecipeList;
