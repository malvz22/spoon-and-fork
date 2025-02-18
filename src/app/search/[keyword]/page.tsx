import RecipeList from "@/components/RecipeList";
import { getRecipeResponse } from "@/lib/api";

const Page = async ({ params }: { params: Promise<{ keyword: string }> }) => {
  const keyword = (await params).keyword;
  const decodedKeyword = decodeURI(keyword);
  const searchResults = await getRecipeResponse(
    `recipes/complexSearch`,
    `&query=${decodedKeyword}&addRecipeInformation=true`
  );
  return (
    <main className="custom-container ">
      <h1 className="text-2xl">
        Search Results for <strong>{decodedKeyword}</strong> (
        {searchResults.length} Recipes)
      </h1>
      <RecipeList api={searchResults} />
    </main>
  );
};

export default Page;
