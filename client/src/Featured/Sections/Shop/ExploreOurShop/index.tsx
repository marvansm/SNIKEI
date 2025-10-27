import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../../Components/Products/ProductCard";
import FilterPanel from "../../../Components/Products/ProductsFilter";
import { queryKeys } from "../../../../Constants/queryKeys";
import ApiServices from "../../../../Services/http";

const ExploreOurShop = () => {
  const api = new ApiServices("http://localhost:1337/api/");
  const { data } = useQuery({
    queryKey: [queryKeys.product],
    queryFn: () => api.getData("products?populate=*"),
  });
  console.log(data);
  return (
    <section className="container mx-auto max-w-[1200px]">
      <div className="flex items-center justify-center my-20">
        <h2 className="text-[100px] font-semibold font-inter leading-[100%]">
          Explore Our Shop
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-3">
          <FilterPanel />
        </div>
        <div className="col-span-9">
          <div className="grid grid-cols-3 gap-5">
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
        </div>
      </div>
    </section>
  );
};

export default ExploreOurShop;
