import ArticlesSection from "../Sections/ArticlesSection";
import BannerSection from "../Sections/BannerSection";
import BestSection from "../Sections/BestSellerSection";
import CommentsSection from "../Sections/CommentsSection";
import NewArrivalsSection from "../Sections/NewArrivalsSection";
import OurCategoriesSection from "../Sections/OurCategoriesSection";
import SaleSection from "../Sections/SaleSection";

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
