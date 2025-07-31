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
      className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-white shadow-lg rounded-lg cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className={`text-3xl sm:text-4xl p-4 rounded-full ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-700">{description}</p>
        <button
          onClick={onClick}
          className="mt-3 inline-block text-sm font-medium text-primary border border-primary px-4 py-1 rounded-md hover:bg-primary hover:text-white transition"
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
        className=" bg-cover bg-center flex items-center justify-center text-white relative w-full h-[35rem] md:h-[40rem] px-6 md:px-12"
        style={{ backgroundImage: `url(${bgHeader})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 md:px-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">Our Areas of Focus</h1>
          <p className="mt-3 text-sm md:text-lg max-w-2xl mx-auto text-gray-200">
            Empowering agriculture through innovation, sustainability, and community impact.
          </p>
        </div>
      </header>

      {/* 🔹 Focus Areas */}
      <section className="bg-gray-50 px-4 sm:px-8 md:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
