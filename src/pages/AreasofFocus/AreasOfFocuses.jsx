import React from 'react';
import { FaCog, FaLeaf, FaShippingFast, FaUsers } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import bgHeader from "/src/assets/images/areaFocus.JPG"; // Your background image path
import Footer from '../../components/General/Footer';

function AreaFocus() {
  const navigate = useNavigate();

  const handleFocusAreaClick = (path) => {
    navigate(path);
  };

  const SectionCard = ({ icon, title, description, onClick, iconColor }) => (
    <div
      className="flex flex-col items-start gap-4 p-6 transition-transform bg-white rounded-lg shadow-lg cursor-pointer sm:flex-row hover:scale-105"
      onClick={onClick}
    >
      <div className={`text-3xl sm:text-4xl p-4 rounded-full ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold sm:text-xl text-primary">{title}</h3>
        <p className="mt-2 text-sm text-gray-700 sm:text-base">{description}</p>
        <button
          onClick={onClick}
          className="inline-block px-4 py-1 mt-3 text-sm font-medium transition border rounded-md text-primary border-primary hover:bg-primary hover:text-white"
        >
          Read More
        </button>
      </div>
    </div>
  );

  return (
    <div className="font-sans">
      {/* 🔹 Header Section */}
      <header
        className=" bg-cover bg-center flex items-center  text-white relative w-full h-[30rem]  px-5 lg:px-20 md:px-10"
        style={{ backgroundImage: `url(${bgHeader})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-4 md:px-10">
          <h1 className="text-3xl font-bold leading-snug md:text-5xl">Our Areas of Focus</h1>
          <p className="mx-auto mt-3 text-[1rem] py-3 text-gray-200 md:text-[1.3rem]">
            Empowering agriculture through innovation, sustainability, and community impact.
          </p>
        </div>
      </header>

      {/* 🔹 Focus Areas */}
      <section className="px-4 py-12 bg-gray-50 sm:px-8 md:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <SectionCard
            icon={<FaLeaf />}
            title="Promoting Sustainable Development"
            description="Fostering eco-friendly agriculture that ensures long-term environmental and economic sustainability."
            onClick={() => handleFocusAreaClick("/sustainability-development")}
            iconColor="text-green-600"
          />
          <SectionCard
            icon={<FaUsers />}
            title="Enhancing Livelihoods"
            description="Empowering smallholder farmers with resources, training, and fair market access."
            onClick={() => handleFocusAreaClick("/enhancing-livehoods")}
            iconColor="text-blue-600"
          />
          <SectionCard
            icon={<FaCog />}
            title="Improving Nutritional Outcomes"
            description="Boosting access to nutrient-rich, locally adapted foods for healthier communities."
            onClick={() => handleFocusAreaClick("/nutritional-outcome")}
            iconColor="text-orange-500"
          />
          <SectionCard
            icon={<FaShippingFast />}
            title="Innovating for Crop Resilience"
            description="Developing climate-smart, pest-resistant crops to ensure long-term food security."
            onClick={() => handleFocusAreaClick("/crop-innovation")}
            iconColor="text-purple-600"
          />
        </div>
      </section>
       <Footer/>
    </div>
   
  );
}

export default AreaFocus;
