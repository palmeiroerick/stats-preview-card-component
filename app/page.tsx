import Image from "next/image";

const Home = () => {
  return (
    <main className="w-80 overflow-hidden rounded-lg bg-darkDesaturatedBlue">
      <div className="relative">
        <Image
          className="blur-[0.7px]"
          src="/assets/image-mobile.jpg"
          alt=""
          width={320}
          height={235}
        />
        <div className="absolute inset-0 bg-SoftViolet opacity-35"></div>
        <div className="absolute inset-0 bg-darkDesaturatedBlue opacity-30"></div>
      </div>
      <div className="flex flex-col items-center gap-4 p-8 pt-10">
        <h1 className="text-center font-lexendDeca text-[1.75rem] font-bold leading-tight text-white">
          Get <span className="text-SoftViolet">insights</span> that help your
          business grow.
        </h1>
        <p className="mb-4 text-center text-sm leading-6 text-slightlyTransparentWhiteMain">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-inter text-2xl font-bold text-white">10k+</h2>
          <h3 className="font-lexendDeca text-xs uppercase tracking-widest text-slightlyTransparentWhiteStat">
            companies
          </h3>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-inter text-2xl font-bold text-white">314</h2>
          <h3 className="font-lexendDeca text-xs uppercase tracking-widest text-slightlyTransparentWhiteStat">
            templates
          </h3>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h2 className="font-inter text-2xl font-bold text-white">12m+</h2>
          <h3 className="font-lexendDeca text-xs uppercase tracking-widest text-slightlyTransparentWhiteStat">
            queries
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Home;
