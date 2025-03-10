export interface Recipe {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  spoonacularScore: number;
  sourceName: string;
}

export interface DetailedRecipe extends Recipe {
  summary: string;
  occasions: string[];
  extendedIngredients: {
    original: string;
  }[];
  analyzedInstructions: {
    steps: {
      number: number;
      step: string;
    }[];
  }[];
  nutrition: {
    nutrients: {
      name: string;
      amount: number;
      unit: string;
    }[];
  };
}

export interface ApiProps {
  api: Recipe[];
}

export interface DetailedApiProps {
  api: DetailedRecipe;
}
