import React from 'react';
import ArticleCard from "/src/components/General/ArticleCard";

const Blogs = () => {
  const articles = [
    { id: 1, title: "Exporting Agricultural Goods: Key Trends to Watch in 2024", excerpt: "In 2024, the agro-exportation sector will see significant shifts as new technologies and sustainability practices come into play.", image: "https://via.placeholder.com/300", link: "/blog/article1" },
    { id: 2, title: "The Future of Agro-Exports: Sustainable Farming Practices", excerpt: "Sustainability is becoming a key driver in the agro-export industry. This article explores the role of sustainable farming.", image: "https://via.placeholder.com/300", link: "/blog/article2" },
    { id: 3, title: "How to Ensure Quality Control in Agro-Exports", excerpt: "Quality control is crucial for maintaining high standards. Here’s how you can ensure your products are top-notch.", image: "https://via.placeholder.com/300", link: "/blog/article3" },
    { id: 4, title: "Agro-Tech Innovations Transforming Export Practices", excerpt: "Agri-tech is changing the way we export. From AI to automation, here's how these innovations improve export efficiency.", image: "https://via.placeholder.com/300", link: "/blog/article4" },
    { id: 5, title: "Boosting Sustainability in Agro-Export Business", excerpt: "A closer look at the sustainable practices reshaping the agro-export landscape and how businesses can adopt them.", image: "https://via.placeholder.com/300", link: "/blog/article5" },
    { id: 6, title: "The Role of Logistics in Agro-Exports", excerpt: "Logistics is a key component of successful agro-exportation. Learn about the challenges and solutions in this area.", image: "https://via.placeholder.com/300", link: "/blog/article6" },
    { id: 7, title: "Trends in Agro-Export Marketing for 2024", excerpt: "What marketing strategies will dominate in the agro-export industry? Here's what to expect in 2024.", image: "https://via.placeholder.com/300", link: "/blog/article7" },
    { id: 8, title: "The Impact of Climate Change on Agro-Exports", excerpt: "How climate change is affecting the agro-export industry and what we can do to mitigate its effects.", image: "https://via.placeholder.com/300", link: "/blog/article8" },
  ];

  return (
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <h1 className="mb-8 text-4xl font-bold text-center">All Articles</h1>
      <p className="mb-12 text-lg text-center text-gray-600">Explore all the latest articles about agro-exportation.</p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      
    </div>
  );
};

export default Blogs;
