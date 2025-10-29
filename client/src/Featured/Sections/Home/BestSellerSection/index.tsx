import { useQuery } from "@tanstack/react-query";
import ApiServices from "../../../../Services/http";
import HeadingText from "../../../Components/Common/HeadingText";
import ProductCard from "../../../Components/Products/ProductCard";
import { queryKeys } from "../../../../Constants/queryKeys";

const BestSection = () => {
  const api = new ApiServices("http://localhost:1337/api/");
  const { data } = useQuery({
    queryKey: [queryKeys.product],
    queryFn: () => api.getData("products?populate=*"),
  });
  return (
    <section className="container mx-auto max-w-[1200px] py-[13px] my-[150px]">
      <div className="flex items-center justify-center mb-6">
        <HeadingText title="Best Sellers" />
      </div>
      <div className="grid grid-cols-4 gap-5 mt-6 ">
        {data?.data.map((item: any) => (
          <ProductCard
            key={item?.id}
            title={item?.name}
            image={`http://localhost:1337${item?.image?.url}`}
            rating={item?.rating}
            price={item?.price}
            discount={item?.discount}
          />
        ))}
      </div>
    </section>
  );
};

export default BestSection;
