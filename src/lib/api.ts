import { Recipe } from "@/types/recipe";

export const ratingConversion = (rating: number) => {
  const convertedRating: number = Number(((rating / 100) * 5).toFixed(2));
  return convertedRating;
};

export const getRecipeResponse = async (resource: string, query: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const recipeData = await response.json();

  const recipes: Recipe[] = recipeData.results;

  return recipes;
};

export const getRecipeInfo = async (recipeId: number): Promise<Recipe> => {
  if (!recipeId) throw new Error("Invalid recipe ID");

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipes/${recipeId}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&includeNutrition=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const recipeData: Recipe = await response.json();

  return recipeData;
};

export const getMultipleRecipes = async (
  recipeId: number[]
): Promise<Recipe[]> => {
  if (!recipeId.length) throw new Error("No recipe IDs provided");

  const recipeInfo: Recipe[] = await Promise.all(
    recipeId.map((id: number) => getRecipeInfo(id))
  );

  return recipeInfo;
};
