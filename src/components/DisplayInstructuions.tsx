import { DetailedApiProps } from "@/types/recipe";

const DisplayInstructions: React.FC<DetailedApiProps> = ({ api }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold mb-3">Instructions</h2>
      {api.analyzedInstructions[0].steps.map((step, index) => {
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
  );
};

export default DisplayInstructions;
