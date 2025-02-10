import Button from "@/components/Button";
import Hero from "@/components/Hero";
import RecipeCard from "@/components/RecipeCard";
import {
  getMultipleRecipes,
  getRecipeResponse,
  ratingConversion,
} from "@/lib/api";
import { Recipe } from "@/types/recipe";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Home = async () => {
  // const recipe = await GetRecipeResponse();

  const recipe = await getRecipeResponse(
    "recipes/complexSearch",
    "&sort=meta-score"
  );

  const recipeIdArray = recipe.map(({ id }: { id: number }) => id);

  // const data = await GetRecipeInfo({ recipeId: 716429 });
  // console.log(data);

  const recipeInfo = await getMultipleRecipes(recipeIdArray);

  return (
    <>
      <Hero />
      <section className="w-full flex flex-col max-w-[1240px] mx-auto px-4 lg:px-16 py-8 lg:py-10 gap-10">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col max-w-[500px]">
            <h1 className="text-[48px] ">Trending Recipes</h1>
            <p>
              Level up your kitchen game! Learn new techniques and master
              exciting ingredients with the trending recipe.
            </p>
          </div>
          <div className="hidden lg:flex">
            <Button>
              View All Trending Recipes <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {recipeInfo.map((recipe: Recipe) => {
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
        <div className="lg:hidden flex mx-auto">
          <Button>
            View All Trending Recipes <FaArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
