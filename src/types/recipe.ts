export interface Recipe {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  spoonacularScore: number;
  creditsText: string;
}

export interface ApiProps {
  api: Recipe[];
}
