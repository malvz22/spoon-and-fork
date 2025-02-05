import Button from "@/components/Button";
import Hero from "@/components/Hero";
import RecipeCard from "@/components/RecipeCard";
import { GetRecipeResponse } from "@/lib/api";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Home = async () => {
  const recipe = await GetRecipeResponse();
  console.log(recipe);

  return (
    <>
      <Hero />
      <section className="w-full flex flex-col max-w-[1240px] mx-auto px-4 lg:px-16 gap-10">
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
        <div className="flex flex-row gap-4">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </section>
    </>
  );
};

export default Home;
