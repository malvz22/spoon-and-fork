import Button from "@/components/Button";
import Hero from "@/components/Hero";
import RecipeGallery from "@/components/RecipeGallery";
import RecipeList from "@/components/RecipeList";
import { getRecipeResponse } from "@/lib/api";
import { FaArrowRight } from "react-icons/fa";

const Home = async () => {
  const recipe = await getRecipeResponse(
    "recipes/complexSearch",
    "&sort=meta-score&number=15&addRecipeInformation=true"
  );

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
        <RecipeList api={recipe} />
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
