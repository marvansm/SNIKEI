import ArticlesSection from "../Sections/Home/ArticlesSection";
import BannerSection from "../Sections/Home/BannerSection";
import BestSection from "../Sections/Home/BestSellerSection";
import CommentsSection from "../Sections/Home/CommentsSection";
import NewArrivalsSection from "../Sections/Home/NewArrivalsSection";
import OurCategoriesSection from "../Sections/Home/OurCategoriesSection";
import SaleSection from "../Sections/Home/SaleSection";

const Hometemplates = () => {
  return (
    <div>
      <BannerSection />
      <SaleSection />
      <BestSection />
      <OurCategoriesSection />
      <NewArrivalsSection />
      <CommentsSection />
      <ArticlesSection />
    </div>
  );
};

export default Hometemplates;
