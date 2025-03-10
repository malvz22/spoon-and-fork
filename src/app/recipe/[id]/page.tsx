import {
  getDetailedRecipe,
  getRandomRecipe,
  getRecipeResponse,
} from "@/lib/api";
import Image from "next/image";
import { MdPeople } from "react-icons/md";
import { PiTimerFill } from "react-icons/pi";
import parse from "html-react-parser";
import DisplayRandomRecipe from "@/components/DisplayRandomRecipe";
import DisplayRecipeAside from "@/components/DisplayRecipeAside";
import DisplayIngredients from "@/components/DisplayIngredients";
import DisplayInstructions from "@/components/DisplayInstructuions";
import DisplayNutritionFacts from "@/components/DisplayNutritionFacts";
import RecipeHeader from "@/components/RecipeHeader";

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
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
      <RecipeHeader api={recipeData} />
      <hr className="border-[#E8E8E8] border-solid border-[1px] my-1" />
      <article>{parse(recipeData.summary)}</article>
      <div className="w-full max-w-full aspect-video relative rounded-[14px] overflow-hidden">
        <Image
          src={recipeData.image}
          alt="food"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
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
          <DisplayIngredients api={recipeData} />
          <DisplayInstructions api={recipeData} />
        </div>
        <div className="flex flex-col ps-3 w-full max-w-full md:max-w-[300px] gap-8">
          <DisplayNutritionFacts api={recipeData} />
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Popular Recipes</h2>
            <DisplayRecipeAside api={popularRecipeData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-full gap-4">
        <h2 className="text-3xl font-bold mb-4">You might also like</h2>
        <DisplayRandomRecipe api={randomRecipeData} />
      </div>
    </div>
  );
};

export default Page;
