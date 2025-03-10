import { DetailedApiProps } from "@/types/recipe";

const DisplayNutritionFacts: React.FC<DetailedApiProps> = ({ api }) => {
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

  return (
    <div className="bg-[#F9F9F9] w-full max-w-full p-6 flex flex-col rounded-xl">
      <h2 className="text-3xl font-bold mb-2">Nutrition Facts</h2>
      {api.nutrition.nutrients
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
  );
};

export default DisplayNutritionFacts;
