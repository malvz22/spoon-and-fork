import {
  getDetailedRecipe,
  getRandomRecipe,
  getRecipeResponse,
  ratingConversion,
} from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { PiTimerFill } from "react-icons/pi";

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const excludeNutrients = [
    "Alcohol",
    "Alcohol %",
    "Vitamin A",
    "Fiber",
    "Vitamin K",
    "Folate",
    "Manganese",
    "Vitamin B6",
    "Vitamin B3",
    "Vitamin C",
    "Vitamin B1",
    "Phosphorus",
    "Iron",
    "Copper",
    "Vitamin B5",
    "Magnesium",
    "Vitamin E",
    "Zinc",
    "Selenium",
    "Vitamin B2",
    "Vitamin B12",
  ];

  const id = (await params).id;

  const recipeData = await getDetailedRecipe(id);
  const randomRecipeData = await getRandomRecipe();
  const popularRecipeData = await getRecipeResponse(
    `recipes/complexSearch`,
    `&sort=meta-score&number=5&addRecipeInformation=true`
  );

  return (
    <div className="w-full flex flex-col max-w-[1240px] mx-auto px-4 lg:px-16 py-8 lg:py-10 gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold">{recipeData.title}</h1>
      <div className="flex flex-row gap-4 items-center">
        <p>
          Submitted by <strong>{recipeData.sourceName}</strong>
        </p>
        <div className="flex gap-2 items-center text-xl">
          <FaStar color="#F15025" />
          <p>{ratingConversion(recipeData.spoonacularScore)}</p>
        </div>
      </div>
      <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
      <div className="w-full max-w-full aspect-video relative rounded-[14px] overflow-hidden">
        <Image
          src={recipeData.image}
          alt="food"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 lg:gap-8">
        <div className="flex flex-col pe-3 gap-4">
          <div className="flex flex-row text-[#737373] gap-3">
            <div className="flex flex-row items-center gap-2">
              <PiTimerFill size={24} />
              <p>{recipeData.readyInMinutes} Mins</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MdPeople size={24} />
              <p>{recipeData.servings} Servings</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold">Ingredients</h2>
          {recipeData.extendedIngredients.map((ingredient, index) => {
            return (
              <ul key={index} className="list-disc list-inside text-lg">
                <li>{ingredient.original}</li>
              </ul>
            );
          })}
          <h2 className="text-3xl font-bold">Instructions</h2>
          {recipeData.analyzedInstructions[0].steps.map((step, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-start items-start text-lg"
              >
                <span className="w-6 h-6 aspect-[1/1] flex justify-center items-center bg-[#F15025] rounded-full text-white">
                  {step.number}
                </span>
                <p className="ps-3 md:px-7 text-start w-full max-w-[800px] leading-[24px]">
                  {step.step}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col ps-3 w-full max-w-full md:max-w-[300px] gap-8">
          <div className="bg-[#F9F9F9] w-full max-w-full p-6 flex flex-col rounded-xl">
            <h2 className="text-3xl font-bold mb-2">Nutrition Facts</h2>
            {recipeData.nutrition.nutrients
              .filter((nutrient) => !excludeNutrients.includes(nutrient.name))
              .map((nutrient, index) => {
                return (
                  <div key={index} className="flex flex-col">
                    <div className="flex flex-row justify-between">
                      <p>{nutrient.name}</p>
                      <p>
                        {nutrient.amount} {nutrient.unit}
                      </p>
                    </div>
                    <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
                  </div>
                );
              })}
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-2">Popular Recipes</h2>
            <div className="flex flex-col gap-4">
              {popularRecipeData.map((recipeData) => {
                return (
                  <Link key={recipeData.id} href={`/recipe/${recipeData.id}`}>
                    <div className="flex flex-row justify-start items-center gap-3">
                      <div className="relative w-full max-w-[110px] aspect-[13/10] rounded-sm overflow-hidden">
                        <Image
                          src={recipeData.image}
                          alt="food"
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="100%"
                        />
                      </div>
                      <h3 className="text-md font-bold">{recipeData.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-full gap-4">
        <h2 className="text-3xl font-bold mb-4">You might also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {randomRecipeData.map((recipeData) => {
            return (
              <Link key={recipeData.id} href={`/recipe/${recipeData.id}`}>
                <div className="flex flex-col gap-3">
                  <div className="relative w-full max-w-full aspect-[4/3] rounded-md overflow-hidden">
                    <Image
                      src={recipeData.image}
                      fill
                      alt="food"
                      style={{ objectFit: "cover" }}
                      sizes="100%"
                    />
                  </div>
                  <p className="font-bold">{recipeData.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
