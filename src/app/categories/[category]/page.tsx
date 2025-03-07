import RecipeListExtended from "@/components/RecipeListExtended";
import { getRecipeResponse } from "@/lib/api";

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const category = (await params).category;
  const decodedCategory = decodeURI(category);
  const searchResults = await getRecipeResponse(
    `recipes/complexSearch`,
    `&type=${decodedCategory}&addRecipeInformation=true&sort=meta-score&number=15`
  );
  return (
    <main className="custom-container ">
      <h1 className="text-2xl capitalize">
        <strong>{decodedCategory}</strong> ({searchResults.length} Recipes)
      </h1>
      <RecipeListExtended api={searchResults} />
    </main>
  );
};

export default Page;
