import React from "react";
const ServicesCard = ({ data }) => {
  return (
    <div className="p-3">
      <span className="mb-2"> {data?.icon}</span>

      <h2 className="text-lg font-semibold mb-2">{data?.title}</h2>
      <p className="text-gray-500 text-sm mb-3">{data?.description}</p>

      <button class="inline-block bg-black px-8 py-3 text-xs font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
        Learn more
      </button>
    </div>
  );
};

export default ServicesCard;
