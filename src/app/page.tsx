import Hero from "@/components/Hero";
import { GetRecipeResponse } from "@/lib/api";
import Image from "next/image";

const Home = async () => {
  const recipe = await GetRecipeResponse();
  console.log(recipe);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
