export const GetRecipeResponse = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=chicken&cuisine=american`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const recipeData = await response.json();

  return recipeData;
};
