import { DetailedApiProps } from "@/types/recipe";

const DisplayIngredients: React.FC<DetailedApiProps> = ({ api }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-3">Ingredients</h2>
      {api.extendedIngredients.map((ingredient, index) => {
        return (
          <ul key={index} className="list-disc list-inside text-lg">
            <li>{ingredient.original}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default DisplayIngredients;
