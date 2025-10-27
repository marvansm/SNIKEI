import ArticlesCards from "../../../Components/ArticlesCards";
import HeadingText from "../../../Components/Common/HeadingText";

const articlesData = [
  {
    image:
      "https://cdn.prod.website-files.com/689251469afed457b38b7028/68936f69d26c6e5db9cc1769_image%20(21).png",
    category: "Entertainment",
    date: "April 20, 2025",
    title: "Budget Travel: Exploring the World Affordably",
  },
  {
    image:
      "https://cdn.prod.website-files.com/689251469afed457b38b7028/68aadb260f8df4cb22ccfd94_image.png",
    category: "Lifestyle",
    date: "May 10, 2025",
    title: "Improving Sleep Hygiene for Better Rest",
  },
  {
    image:
      "https://cdn.prod.website-files.com/689251469afed457b38b7028/68936ff678d0bc75fa61f4b1_image%20(23).png",
    category: "Lifestyle",
    date: "May 10, 2025",
    title: "Top 10 Rendering Software for Stunning Visuals",
  },
  {
    image:
      "https://cdn.prod.website-files.com/689251469afed457b38b7028/6893702aa38c9ed97b708268_image%20(24).png",
    category: "Lifestyle",
    date: "May 10, 2025",
    title: "10 must-have wardrobe staples every fashion Lover",
  },
];

const ArticlesSection = () => {
  return (
    <section className="container mx-auto max-w-[1200px] py-[13px] my-[150px]">
      <div className="flex items-center justify-center mb-6 ">
        <HeadingText title="Articles & Resources" />
      </div>

      <div className="grid grid-cols-4 gap-5 mt-4">
        {articlesData.map((article, index) => (
          <ArticlesCards
            key={index}
            image={article.image}
            category={article.category}
            date={article.date}
            title={article.title}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
