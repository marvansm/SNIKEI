import ProductCard from "../../../Components/Products/ProductCard";

const ExploreOurShop = () => {
  return (
    <section className="container mx-auto max-w-[1200px]">
      <div className="flex items-center justify-center my-20">
        <h2 className="text-[100px] font-semibold font-inter leading-[100%]">
          Explore Our Shop
        </h2>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOurShop;
