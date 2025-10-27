import HeadingText from "../../../Components/Common/HeadingText";
import ProductCard from "../../../Components/Products/ProductCard";

const NewArrivalsSection = () => {
  return (
    <section className="container mx-auto max-w-[1200px] py-[13px] my-[150px]">
      <div className="flex items-center justify-center mb-6">
        <HeadingText title="New Arrivals" />
      </div>
      <div className="grid grid-cols-4 gap-5 mt-6 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default NewArrivalsSection;
