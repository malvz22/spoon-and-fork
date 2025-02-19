"use client";

import { useEffect, useState } from "react";
import { getRecipeResponse, ratingConversion } from "@/lib/api";
import { Recipe } from "@/types/recipe";
import Link from "next/link";
import RecipeCard from "./RecipeCard";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const category = [
  "main course",
  "breakfast",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
];

const RecipeGallery = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selected, setSelected] = useState<string>("main course");

  useEffect(() => {
    async function fetchData() {
      try {
        const response: Recipe[] = await getRecipeResponse(
          `recipes/complexSearch`,
          `&type=${selected}&number=6&addRecipeInformation=true`
        );
        setRecipes(response);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, [selected]);

  const filterRecipe = (category: string) => {
    setSelected(category);
  };

  return (
    <div className="flex flex-col gap-10 w-full max-w-full">
      <div className="flex flex-row flex-nowrap whitespace-nowrap gap-3 overflow-x-scroll lg:justify-between lg:gap-0 scrollbar-hide w-full max-w-full">
        {category.map((cat: string, index) => {
          return (
            <button
              className={`text-black border-solid border-[1px] border-[#CCCCCC] px-6 py-3 rounded-[12px] justify-center flex flex-row gap-3 items-center hover:bg-[#F15025] hover:text-white hover:border-[#F15025] transition-all capitalize duration-500 ${
                selected === cat
                  ? "bg-[#F15025] text-white border-[#F15025]"
                  : "border-[#cccccc] text-black"
              }`}
              key={index}
              onClick={() => filterRecipe(cat)}
            >
              {cat}
            </button>
          );
        })}
        <Link href={"/categories"}>
          <Button>
            View All Categories <FaArrowRight />
          </Button>
        </Link>
      </div>
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
    </div>
  );
};

export default RecipeGallery;
