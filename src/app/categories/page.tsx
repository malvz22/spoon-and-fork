import Image from "next/image";
import Link from "next/link";

const category = [
  {
    name: "main course",
    image: "/Images/category/main-course.jpg",
  },
  {
    name: "side dish",
    image: "/Images/category/side-dish.jpg",
  },
  {
    name: "dessert",
    image: "/Images/category/dessert.jpg",
  },
  {
    name: "appetizer",
    image: "/Images/category/appetizer.jpg",
  },
  {
    name: "salad",
    image: "/Images/category/salad.jpg",
  },
  {
    name: "bread",
    image: "/Images/category/bread.jpg",
  },
  {
    name: "breakfast",
    image: "/Images/category/breakfast.jpg",
  },
  {
    name: "soup",
    image: "/Images/category/soup.jpg",
  },
  {
    name: "beverage",
    image: "/Images/category/beverage.jpg",
  },
  {
    name: "sauce",
    image: "/Images/category/sauce.jpg",
  },
  {
    name: "marinade",
    image: "/Images/category/marinade.jpg",
  },
  {
    name: "fingerfood",
    image: "/Images/category/fingerfood.jpg",
  },
  {
    name: "snack",
    image: "/Images/category/snack.jpg",
  },
  {
    name: "drink",
    image: "/Images/category/drink.jpg",
  },
];

const Page = () => {
  return (
    <main className="custom-container">
      <h1 className="text-2xl">Explore Food Categories</h1>

      <div className="w-full max-w-full grid grid-cols-2 md:grid-cold-3 lg:grid-cols-4 mx-auto gap-5">
        {category.map((cat, index) => {
          return (
            <Link key={index} href={`/categories/${cat.name}`}>
              <div className="flex flex-col justify-center items-center w-full max-w-full gap-4">
                <div className="relative w-full max-w-full aspect-[1/1] rounded-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt="category"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100%"
                    priority
                  />
                </div>
                <h1 className="text-2xl capitalize">{cat.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};
export default Page;
