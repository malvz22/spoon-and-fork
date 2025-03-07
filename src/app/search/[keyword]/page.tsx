import RecipeListExtended from "@/components/RecipeListExtended";
import { getRecipeResponse } from "@/lib/api";

const Page = async ({ params }: { params: Promise<{ keyword: string }> }) => {
  const keyword = (await params).keyword;
  const decodedKeyword = decodeURI(keyword);
  const searchResults = await getRecipeResponse(
    `recipes/complexSearch`,
    `&query=${decodedKeyword}&addRecipeInformation=true&number=15&sort=meta-score`
  );
  return (
    <main className="custom-container ">
      <h1 className="text-2xl">
        Search Results for <strong>&quot;{decodedKeyword}&quot;</strong> (
        {searchResults.length} Recipes)
      </h1>
      <RecipeListExtended api={searchResults} />
    </main>
  );
};

export default Page;
