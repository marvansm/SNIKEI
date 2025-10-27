import { ChevronUp } from "lucide-react";
import { useState } from "react";
import ApiServices from "../../../../Services/http";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../Constants/queryKeys";

export default function FilterPanel() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedProduct, setSelectedProduct] = useState("$0 - $100");
  const [selectedColor, setSelectedColor] = useState("Black");

  const api = new ApiServices("http://localhost:1337/api/");
  const { data: categoryData } = useQuery({
    queryKey: [queryKeys.category],
    queryFn: () => api.getData("categories?populate=*"),
  });
  const { data: colorsData } = useQuery({
    queryKey: [queryKeys.colors],
    queryFn: () => api.getData("colors?populate=*"),
  });
  const priceRanges = [
    "$0 - $100",
    "$101 - $200",
    "$201 - $300",
    "$301 - $400",
    "401 - $500",
    "501 - $600",
  ];

  return (
    <div className="w-full max-w-md bg-white  ">
      <div className="border border-gray-200 mb-2 rounded-2xl overflow-hidden">
        <button
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
          <ChevronUp
            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
              isCategoriesOpen ? "" : "rotate-180"
            }`}
          />
        </button>

        {isCategoriesOpen && (
          <div className="pb-2">
            {categoryData?.data?.map((category: any) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.attributes.name)}
                className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">{category.attributes.name}</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedCategory === category
                      ? "border-gray-900 bg-gray-900"
                      : "border-gray-300"
                  }`}
                >
                  {selectedCategory === category && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="border border-gray-200 mb-2 rounded-2xl overflow-hidden">
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-lg font-semibold text-gray-900">Price Ranges</h2>
          <ChevronUp
            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
              isPriceOpen ? "" : "rotate-180"
            }`}
          />
        </button>

        {isPriceOpen && (
          <div className="pb-2">
            {priceRanges.map((price) => (
              <button
                key={price}
                onClick={() => setSelectedProduct(price)}
                className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">{price}</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedProduct === price
                      ? "border-gray-900 bg-gray-900"
                      : "border-gray-300"
                  }`}
                >
                  {selectedProduct === price && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="border border-gray-200 mb-2 rounded-2xl overflow-hidden">
        <button
          onClick={() => setIsColorOpen(!isColorOpen)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-lg font-semibold text-gray-900">Colors</h2>
          <ChevronUp
            className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
              isColorOpen ? "" : "rotate-180"
            }`}
          />
        </button>

        {isColorOpen && (
          <div className="pb-2">
            {colorsData?.data?.map((color: any) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.attributes.name)}
                className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-900">{color.attributes.name}</span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedColor === color
                      ? "border-gray-900 bg-gray-900"
                      : "border-gray-300"
                  }`}
                >
                  {selectedColor === color && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
