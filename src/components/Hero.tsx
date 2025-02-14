import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
      <section className="w-full relative aspect-[3/4] md:aspect-[16/9] bg-[url(/Images/snf-hero.jpg)] bg-cover bg-top">
        <div className="mix-blend-normal bg-[#1f1f1f]/30 flex justify-center items-center w-full max-w-full h-full text-white text-center">
          <div className="w-full max-w-[1240px] flex flex-col justify-center items-center px-4 md:px-10 lg:px-16">
            <div className=" flex flex-col gap-4 w-full mb-10">
              <h1 className="text-4xl lg:text-5xl">
                Explore Diverse Recipes for Every Plate
              </h1>
              <p className="text-1xl">
                Explore our collection of diverse recipes, offering something
                delicious for every palate.
              </p>
            </div>
            <SearchBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
