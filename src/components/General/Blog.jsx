import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import ArticleCard from './ArticleCard';
import { FaArrowCircleRight } from 'react-icons/fa';

const Blog = () => {
  const articles = [
    { id: 1, title: "Exporting Agricultural Goods: Key Trends to Watch in 2024", excerpt: "In 2024, the agro-exportation sector will see significant shifts as new technologies and sustainability practices come into play.", image: "https://via.placeholder.com/300", link: "/blog/article1" },
    { id: 2, title: "The Future of Agro-Exports: Sustainable Farming Practices", excerpt: "Sustainability is becoming a key driver in the agro-export industry. This article explores the role of sustainable farming.", image: "https://via.placeholder.com/300", link: "/blog/article2" },
    { id: 3, title: "How to Ensure Quality Control in Agro-Exports", excerpt: "Quality control is crucial for maintaining high standards. Here’s how you can ensure your products are top-notch.", image: "https://via.placeholder.com/300", link: "/blog/article3" },
    // Additional articles...
  ];

  // State to manage whether to show all articles or only a few
  const [showAll, setShowAll] = useState(false);

  // Limit the number of articles shown initially (let's say 3)
  const articlesToShow = showAll ? articles : articles.slice(0, 3);

  return (
    <div className="px-6 py-12 mx-auto max-w-7xl sm:px-8 lg:px-12">
      <h1 className="mb-8 text-4xl font-bold text-center">Welcome to the Tami City Blog</h1>
      <p className="mb-12 text-lg text-center text-gray-600">Your source for insights, trends, and news in agro-exportation.</p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articlesToShow.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* "View All" Button */}
      <div className="px-5 mt-12 text-center">
        <Link
          to="/blog" // Update to the correct link if you have a page for more articles
          className="flex items-center justify-center gap-3 text-lg font-semibold text-secondary hover:underline"
        >
          <FaArrowCircleRight size={35} />
          <span>Read More on Our Blog</span>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
