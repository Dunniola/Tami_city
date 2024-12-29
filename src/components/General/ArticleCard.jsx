import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="overflow-hidden transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg">
      <img src={article.image} alt={article.title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">{article.title}</h2>
        <p className="mb-4 text-gray-600">{article.excerpt}</p>
        <a href={article.link} className="font-bold text-green-800 hover:text-green-600">Read More</a>
      </div>
    </div>
  );
};

export default ArticleCard;
