import React from 'react';
import { FaCog, FaLeaf, FaShippingFast, FaUsers } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function AreaFocus() {
  const navigate = useNavigate();
  
  const handleFocusAreaClick = (path) => {
    navigate(path);
  };

  const SectionCard = ({ icon, title, description, onClick, iconColor }) => {
    return (
      <div
        className="flex items-start gap-6 py-4 mb-8 transition-all shadow-lg cursor-pointer hover:scale-105 focus-area-card"
        onClick={onClick}
      >
        <div className={`mb-4 text-4xl bg-white px-5 py-5 rounded-full ${iconColor}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="mt-2">{description}</p>
          <span
            className="block mt-3 text-primary border rounded-md w-[8rem] px-6 py-1 border-primary cursor-pointer"
            onClick={onClick}
          >
            Read More
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="flex-col gap-6 px-6 py-6 mb-8 text-white transition-all rounded-lg shadow-lg bg-green-950 bg-items-start ">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold px-[5rem]">Our Areas of Focus</h2>
          <p className="mt-4 text-lg md:px-[10rem] max-md:px-10">
            At TamiCity, we are committed to revolutionizing global agriculture through innovation, sustainability, and empowerment. Explore our key focus areas that drive our mission across continents.{" "}
            <span
              className="cursor-pointer text-primary"
              onClick={() => navigate("/focus-areas")}
            >
              Read More
            </span>
          </p>
        </div>

        {/* Focus Areas Grid with 1 Column on Mobile and 2 Columns on Desktop */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 sm:px-12 ">
          {/* Promoting Sustainable Development */}
          <SectionCard
            icon={<FaLeaf />}
            title="Promoting Sustainable Development"
            description="At TamiCity, we are committed to fostering sustainable agricultural practices that ensure long-term growth and resilience for communities worldwide."
            onClick={() => handleFocusAreaClick("/sustainable-development")}
            iconColor="text-primary"
          />

          {/* Enhancing Livelihoods */}
          <SectionCard
            icon={<FaUsers />}
            title="Enhancing Livelihoods"
            description="We aim to improve the quality of life for smallholder farmers worldwide by providing access to resources, education, and market access."
            onClick={() => handleFocusAreaClick("/empowering-livelihoods")}
            iconColor="text-primary"
          />

          {/* Improving Nutritional Outcomes */}
          <SectionCard
            icon={<FaCog />}
            title="Improving Nutritional Outcomes"
            description="At TamiCity, we focus on increasing the availability of nutritious, locally-adapted foods to ensure better health and nutrition globally."
            onClick={() => handleFocusAreaClick("/nutritional-outcomes")}
            iconColor="text-primary"
          />

          {/* Innovating for Crop Resilience */}
          <SectionCard
            icon={<FaShippingFast />}
            title="Innovating for Crop Resilience"
            description="We are developing resilient crops that can withstand pests, diseases, and climate change to ensure global food security."
            onClick={() => handleFocusAreaClick("/crop-resilience")}
            iconColor="text-primary"
          />
        </div>
      </section>
    </>
  );
}

export default AreaFocus;
