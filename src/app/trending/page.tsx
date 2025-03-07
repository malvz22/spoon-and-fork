import RecipeListExtended from "@/components/RecipeListExtended";
import { getRecipeResponse } from "@/lib/api";

const Page = async () => {
  const recipe = await getRecipeResponse(
    "recipes/complexSearch",
    "&sort=meta-score&number=15&addRecipeInformation=true"
  );

  return (
    <main className="custom-container">
      <div className="flex flex-col mb-4 gap-3 text-center">
        <h1 className="text-[48px] font-semibold">Trending Recipes</h1>
        <p>
          Level up your kitchen game! Learn new techniques and master exciting
          ingredients with the trending recipe.
        </p>
      </div>
      <RecipeListExtended api={recipe} />
    </main>
  );
};

export default Page;
