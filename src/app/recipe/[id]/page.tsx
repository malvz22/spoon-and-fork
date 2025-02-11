import { getRecipeInfo, ratingConversion } from "@/lib/api";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { PiTimerFill } from "react-icons/pi";

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;

  const recipeData = await getRecipeInfo(id);

  console.log(recipeData);

  return (
    <div className="w-full flex flex-col max-w-[1240px] mx-auto px-4 lg:px-16 py-8 lg:py-10 gap-4">
      <div className="flex flex-row gap-4 items-center">
        <h1 className="text-4xl lg:text-5xl font-bold">{recipeData.title}</h1>
        <div className="flex gap-2 items-center text-xl">
          <FaStar color="#F15025" />
          <p>{ratingConversion(recipeData.spoonacularScore)}</p>
        </div>
      </div>
      <p>
        Submitted by <strong>{recipeData.sourceName}</strong>
      </p>
      <div className="w-full max-w-full h-[500px] relative rounded-[14px] overflow-hidden">
        <Image
          src={recipeData.image}
          alt="food"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
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
      {recipeData.extendedIngredients.map(
        (ingredient: string, index: number) => {
          return (
            <ul key={index} className="list-disc list-inside text-lg">
              <li>{ingredient.original}</li>
            </ul>
          );
        }
      )}
      <h2 className="text-3xl font-bold">Instructions</h2>
      {recipeData.analyzedInstructions[0].steps.map(
        (step: string, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-row gap-2 justify-start items-start text-lg"
            >
              <p className="">{step.number}.</p>
              <p className="">{step.step}</p>
            </div>
          );
        }
      )}
      <div className="bg-[#F9F9F9] w-full max-w-full px-4 py-7 flex flex-col">
        <h2 className="text-3xl font-bold mb-2">Nutrition Facts</h2>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p>Calories</p>
            <p>{recipeData.nutrition.nutrients[0].amount}</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Total Fat</p>
            <p>{recipeData.nutrition.nutrients[1].amount} g</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Saturated Fat</p>
            <p>{recipeData.nutrition.nutrients[2].amount} g</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Cholestrol</p>
            <p>{recipeData.nutrition.nutrients[6].amount} mg</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Sodium</p>
            <p>{recipeData.nutrition.nutrients[7].amount} mg</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Potassium</p>
            <p>{recipeData.nutrition.nutrients[24].amount} mg</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Carbohydrates</p>
            <p>{recipeData.nutrition.nutrients[3].amount} g</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Sugar</p>
            <p>{recipeData.nutrition.nutrients[0].amount} g</p>
          </div>
          <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
          <div className="flex flex-row justify-between">
            <p>Protein</p>
            <p>{recipeData.nutrition.nutrients[0].amount} g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
