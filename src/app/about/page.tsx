import TeamMemberList from "@/components/TeamMemberList";
import Image from "next/image";

const Page = async () => {
  return (
    <main className="custom-container">
      <h1 className="text-4xl font-bold">About</h1>
      <hr className="" />
      <article className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          We’re a group of foodies who love cooking and the internet
        </h1>
        <div className="w-full max-w-full aspect-[16/9] relative">
          <Image
            src={`/Images/about-intro.jpg`}
            alt="intro"
            fill
            style={{ objectFit: "cover" }}
            sizes="100%"
            priority={true}
          />
        </div>
        <p className="text-lg md:text-xl lg:text-2xl">
          Every day, we explore new recipes, experiment with flavors, and share
          our culinary adventures with a vibrant online community. Whether
          it&apos;s rediscovering a family classic or diving into international
          cuisines, our love for food drives us to create, collaborate, and
          inspire others. With our fingertips on the pulse of digital
          innovation, we blend tradition with technology to bring mouthwatering
          recipes, cooking tips, and interactive experiences right to your
          screen. Join us on this delicious journey as we celebrate food,
          creativity, and the power of connection in the digital age.
        </p>
      </article>
      <article className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-6 w-full max-w-full lg:max-w-[456px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Simple, Easy Recipes for all
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            At our core, we believe that great meals should be accessible to
            everyone—without all the fuss. Our collection of recipes is designed
            to be simple, easy, and straightforward, so whether you&apos;re an
            experienced cook or just starting out, you can whip up delicious
            dishes with confidence. Each recipe is crafted to minimize
            complexity and maximize flavor, using common ingredients and clear,
            step-by-step instructions. Enjoy stress-free cooking and discover
            how effortlessly you can create meals that satisfy both your taste
            buds and your busy lifestyle.
          </p>
        </div>

        <div className="w-full max-w-full aspect-[9/10] relative">
          <Image
            src={`/Images/strawberry.jpg`}
            alt="intro"
            fill
            style={{ objectFit: "cover" }}
            sizes="100%"
            priority={false}
          />
        </div>
      </article>
      <article className="flex flex-col gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Meet Our Team
        </h1>
        <TeamMemberList />
      </article>
    </main>
  );
};

export default Page;
