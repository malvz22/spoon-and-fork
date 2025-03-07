import { Member } from "@/types/member";
import { DetailedRecipe, Recipe } from "@/types/recipe";

export const ratingConversion = (rating: number) => {
  const convertedRating: number = Number(((rating / 100) * 5).toFixed(1));
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

export const getRandomRecipe = async (): Promise<Recipe[]> => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipes/random?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&number=8`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const recipeData = await response.json();

  return recipeData.recipes;
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

export const getDetailedRecipe = async (
  recipeId: number
): Promise<DetailedRecipe> => {
  if (!recipeId) throw new Error("Invalid recipe ID");

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipes/${recipeId}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&includeNutrition=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const recipeData: DetailedRecipe = await response.json();

  return recipeData;
};

export const getSimilarRecipe = async (recipeId: number): Promise<Recipe[]> => {
  if (!recipeId) throw new Error("Invalid recipe ID");

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipes/${recipeId}/similar?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const recipeData: Recipe[] = await response.json();

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

export const getRandomUserData = async (): Promise<Member[]> => {
  const url = `https://randomuser.me/api/?results=8&inc=name,picture&nat=us&seed=f98f6806b42d999c`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
