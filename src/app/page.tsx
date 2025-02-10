import Button from "@/components/Button";
import Hero from "@/components/Hero";
import RecipeCard from "@/components/RecipeCard";
import RecipeGallery from "@/components/RecipeGallery";
import RecipeList from "@/components/RecipeList";
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
    "&sort=meta-score&number=15"
  );

  const recipeIdArray = recipe.map(({ id }: { id: number }) => id);

  // const data = await GetRecipeInfo({ recipeId: 716429 });
  // console.log(data);

  const recipeInfo = await getMultipleRecipes(recipeIdArray);

  return (
    <>
      <Hero />
      <section className="custom-container">
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
        <RecipeList api={recipeInfo} />
        <div className="lg:hidden flex mx-auto">
          <Button>
            View All Trending Recipes <FaArrowRight />
          </Button>
        </div>
      </section>
      <section className="custom-container">
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col max-w-[500px]">
            <h1 className="text-[48px] ">All About Meals</h1>
            <p>
              Explore different types of meals like breakfast, brunch, lunch,
              and more to find delicious recipes and ideas for any time of the
              day
            </p>
          </div>
        </div>
        <RecipeGallery />
      </section>
    </>
  );
};

export default Home;
