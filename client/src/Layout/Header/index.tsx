import { navbaritems } from "../../Constants/navbar";
import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-999 shadow-md">
      <nav className="grid grid-cols-12 container mx-auto max-w-[1200px] py-[13px] items-center">
        <div className="col-span-3">
          <div className="flex items-center justify-start ">
            <Link to={"/"}>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891d3fc55b949949257a5df_Logo.svg"
                alt=""
                className="max-w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-6">
          <ul className="flex items-center gap-10 justify-center text-[#0c0407] text-[14px] leading-5 font-inter">
            {navbaritems().map((item: any) => (
              <Link to={item?.path}>
                <li key={item?.id} className="cursor-pointer">
                  {item?.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-span-3">
          <ul className="flex items-center justify-end gap-[23px]">
            <li>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891d8c426fcceb02301fedb_search-icon.svg"
                alt=""
                className="w-5 h-5 object-contain cursor-pointer"
              />
            </li>
            <li className="relative">
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891d8c4de9974f2aaedfef9_cart-icon.svg"
                alt=""
                className="w-5 h-5 object-contain cursor-pointer"
              />
              <span className="absolute -top-2.5 right-[-9px] bg-[#0c0407] rounded-[20px] w-[21px] h-[21px] font-semibold text-[12px] text-white flex items-center justify-center font-inter border-2 border-white">
                0
              </span>
            </li>
            <li>
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891d8c4ca612247b3bb158a_profile-icon.svg"
                alt=""
                className="w-5 h-5 object-contain cursor-pointer"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
