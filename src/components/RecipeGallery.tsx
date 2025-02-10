"use client";

import { useState } from "react";
import Button from "./Button";

const category = [
  "breakfast",
  `main course`,
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];

const RecipeGallery = () => {
  const [selected, setSelected] = useState<string>("breakfast");

  const filterRecipe = (category: string) => {
    setSelected(category);
  };

  return (
    <div className="flex flex-col gap-10 w-full max-w-full">
      <div className="flex flex-row gap-3 overflow-x-scroll scrollbar-hide w-full max-w-full">
        {category.map((cat: string, index) => {
          return <Button key={index}>{cat.toUpperCase()}</Button>;
        })}
      </div>
      <p>Food Here</p>
    </div>
  );
};

export default RecipeGallery;
