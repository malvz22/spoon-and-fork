export interface Recipe {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  spoonacularScore: number;
  creditsText: string;
  sourceName: string;
}

export interface ApiProps {
  api: Recipe[];
}
