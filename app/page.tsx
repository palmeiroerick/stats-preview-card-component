import Image from "next/image";

const Home = () => {
  return (
    <main className="w-80 overflow-hidden rounded-lg bg-darkDesaturatedBlue lg:grid lg:w-[1080px] lg:grid-cols-2">
      <div className="relative w-full lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
        <Image
          className="lg:hidden"
          src="/assets/image-mobile.jpg"
          alt=""
          width={320}
          height={235}
        />
        <Image
          className="hidden object-contain lg:block"
          src="/assets/image-desktop.jpg"
          alt=""
          fill
        />
        <div className="absolute inset-0 bg-SoftViolet opacity-35"></div>
        <div className="absolute inset-0 bg-darkDesaturatedBlue opacity-30"></div>
      </div>
      <div className="flex flex-col items-center gap-4 p-8 pt-10 lg:items-start lg:gap-8 lg:p-16 lg:pr-28">
        <h1 className="text-center font-inter text-[1.75rem] font-bold leading-tight text-white lg:text-start lg:text-[2.125rem]">
          Get <span className="text-SoftViolet">insights</span> that help your
          business grow.
        </h1>
        <p className="text-center text-sm leading-6 text-slightlyTransparentWhiteMain lg:text-start">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="mt-4 flex flex-col gap-4 lg:mt-12 lg:flex-row lg:gap-12">
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <h2 className="font-inter text-2xl font-bold text-white">10k+</h2>
            <h3 className="font-lexendDeca text-xs uppercase tracking-widest text-slightlyTransparentWhiteStat">
              companies
            </h3>
          </div>
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <h2 className="font-inter text-2xl font-bold text-white">314</h2>
            <h3 className="font-lexendDeca text-xs uppercase tracking-widest text-slightlyTransparentWhiteStat">
              templates
            </h3>
          </div>
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <h2 className="font-inter text-2xl font-bold text-white">12m+</h2>
            <h3 className="font-lexendDeca text-xs uppercase tracking-widest text-slightlyTransparentWhiteStat">
              queries
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
