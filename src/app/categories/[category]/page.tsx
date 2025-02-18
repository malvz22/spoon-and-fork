import RecipeList from "@/components/RecipeList";
import { getRecipeResponse } from "@/lib/api";

const Page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const category = (await params).category;
  const decodedCategory = decodeURI(category);
  const searchResults = await getRecipeResponse(
    `recipes/complexSearch`,
    `&type=${decodedCategory}&addRecipeInformation=true`
  );
  return (
    <main className="custom-container ">
      <h1 className="text-2xl capitalize">
        <strong>{decodedCategory}</strong> ({searchResults.length} Recipes)
      </h1>
      <RecipeList api={searchResults} />
    </main>
  );
};

export default Page;
