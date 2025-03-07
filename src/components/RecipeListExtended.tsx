"use client";
import { ApiProps, Recipe } from "@/types/recipe";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
import { getRecipeResponse, ratingConversion } from "@/lib/api";
import { useState } from "react";

const RecipeListExtended: React.FC<ApiProps> = ({ api }) => {
  const initialRecipes = api;
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [loading, setLoading] = useState<boolean>(false);
  const [moreRecipe, setMoreRecipe] = useState<boolean>(true);

  const recipeLimit = 100;
  const fetchAmount = 20;

  const handleViewMore = async () => {
    if (loading || !moreRecipe) return;
    setLoading(true);
    const offset = recipes.length;
    const newResponse = await getRecipeResponse(
      "recipes/complexSearch",
      `&sort=meta-score&number=${fetchAmount}&offset=${offset}&addRecipeInformation=true`
    );
    const newRecipes = newResponse;

    if (
      !newRecipes ||
      newRecipes.length === 0 ||
      recipes.length + newRecipes.length >= recipeLimit
    ) {
      setMoreRecipe(false);
    }

    setRecipes((prev) => [...prev, ...newRecipes]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {recipes.map((recipe: Recipe) => {
          return (
            <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
              <RecipeCard
                image={recipe.image}
                title={recipe.title}
                id={recipe.id}
                servings={recipe.servings}
                readyInMinutes={recipe.readyInMinutes}
                spoonacularScore={ratingConversion(recipe.spoonacularScore)}
                sourceName={recipe.sourceName}
              />
            </Link>
          );
        })}
      </div>
      {moreRecipe &&
        // <button
        //   onClick={handleViewMore}
        //   className="text-black border-solid border-[1px] border-[#CCCCCC] px-6 py-3 rounded-[12px] justify-center gap-3 items-center hover:bg-[#F15025] hover:text-white hover:border-[#F15025] transition-all duration-500 mx-auto inline-block w-full max-w-[300px] mt-4"
        // >
        //   {loading ? "Loading..." : "View More"}
        // </button>
        (loading ? (
          <div className="lds-dual-ring mx-auto mt-4"></div>
        ) : (
          <button
            onClick={handleViewMore}
            className="text-black border-solid border-[1px] border-[#CCCCCC] px-6 py-3 rounded-[12px] justify-center gap-3 items-center hover:bg-[#F15025] hover:text-white hover:border-[#F15025] transition-all duration-500 mx-auto inline-block w-full max-w-[300px] mt-4"
          >
            View More
          </button>
        ))}
    </div>
  );
};

export default RecipeListExtended;
