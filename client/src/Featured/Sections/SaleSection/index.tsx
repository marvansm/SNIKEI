import { ArrowRight } from "lucide-react";

const SaleSection = () => {
  return (
    <section className="container max-w-[1200px] mx-auto mt-[60px]">
      <div className="grid grid-cols-4">
        <div className="box">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6892144f750bf17c33b635e7_recycling-reproducing-svgrepo-com%201.svg"
            alt=""
            className="mb-2"
          />
          <h2 className="text-[20px] font-semibold leading-[30px] text-[#0c0407] font-inter">
            Sustainable Materials
          </h2>
          <p className="mt-2 max-w-[227px] text-[#0c0407] leading-5 text-[14px]">
            We believe great style shouldn’t come at the planet’s expense.
          </p>
        </div>
        <div className="box">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689214509e45233c0eac2f63_warranty-svgrepo-com%201.svg"
            alt=""
            className="mb-2"
          />
          <h2 className="text-[20px] font-semibold leading-[30px] text-[#0c0407] font-inter">
            Warranty Included
          </h2>
          <p className="mt-2 max-w-[227px] text-[#0c0407] leading-5 text-[14px]">
            Every pair comes with a hassle-free 6-month warranty
          </p>
        </div>
        <div className="box">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68921450b524ed88c4868689_delivery-fast-svgrepo.svg"
            alt=""
            className="mb-2"
          />
          <h2 className="text-[20px] font-semibold leading-[30px] text-[#0c0407] font-inter">
            Delivery & Shipping
          </h2>
          <p className="mt-2 max-w-[227px] text-[#0c0407] leading-5 text-[14px]">
            Your shoes will be dispatched within 1–2 business days
          </p>
        </div>
        <div className="box">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6892144f566712d4d864a312_eco-friendly-svgrepo-com%201.svg"
            alt=""
            className="mb-2"
          />
          <h2 className="text-[20px] font-semibold leading-[30px] text-[#0c0407] font-inter">
            Eco-Friendly Fabrics
          </h2>
          <p className="mt-2 max-w-[227px] text-[#0c0407] leading-5 text-[14px]">
            Crafted with sustainability in mind, our shoes feature eco-friendly
            fabrics
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-[60px] gap-5">
        <div className="left min-h-[313px] rounded-xl max-w-[589px] overflow-hidden relative">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6dcb52275b4d9821578c_Explore-Left_frame.png"
            alt=""
          />
          <div className="absolute top-0 p-5 flex flex-col justify-between h-full">
            <button className="rounded-lg font-semibold font-inter text-[#0c0407] max-w-[87px] py-2 px-3 text-[14px] leading-5 bg-white">
              20% OFF
            </button>
            <div>
              <h2 className="text-[32px] font-bold leading-[42px] text-white mb-4">
                Explore All <br /> Formal Shoes
              </h2>
              <button className="flex items-center gap-1 border border-[#e0e0e0] text-[#0c0407] bg-white rounded-xl px-4 py-3 text-[14px] font-semibold font-inter">
                Shop Now <ArrowRight size={14} className="font-bold" />
              </button>
            </div>
          </div>
        </div>
        <div className="left min-h-[313px] rounded-xl max-w-[589px] overflow-hidden relative">
          <img
            src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6dcb3e0d08d8984287ad_Explore-Right-Frame.png"
            alt=""
          />
          <div className="absolute top-0 p-5 flex flex-col justify-between h-full">
            <button className="rounded-lg font-semibold font-inter text-[#0c0407] max-w-[87px] py-2 px-3 text-[14px] leading-5 bg-white">
              25% OFF
            </button>
            <div>
              <h2 className="text-[32px] font-bold leading-[42px] text-white mb-4">
              Explore All <br />
              Formal Shoes
              </h2>
              <button className="flex items-center gap-1 border border-[#e0e0e0] text-[#0c0407] bg-white rounded-xl px-4 py-3 text-[14px] font-semibold font-inter">
                Shop Now <ArrowRight size={14} className="font-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
