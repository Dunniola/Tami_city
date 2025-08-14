import React from 'react';
import bgImage from "/src/assets/images/cropInnovation.JPG";
import { Link } from "react-router-dom";
import Footer from "../../components/General/Footer";

function CropInnovation() {
  return (
    <>
      <div className="font-sans ">
        {/* Header Section with Background Image */}
        <section className="relative w-full h-[30rem]  bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative flex items-center h-full px-5 text-center text-white lg:px-20 md:px-10">
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold">
              Crop Innovation
            </h1>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <nav className="px-5 mt-8 text-sm md:px-10 lg:px-20 text-secondary md:text-base">
          <ol className="flex flex-wrap items-center space-x-2 md:space-x-4">
            <li>
              <Link to="/" className="font-semibold text-primary hover:underline">Home</Link>
            </li>
            <li className="text-gray-500">&gt;</li>
            <li>
              <Link to="/" className="font-semibold text-primary hover:underline">Areas of Focus</Link>
            </li>
            <li className="text-gray-500">&gt;</li>
            <li className="font-bold text-gray-700">Crop Innovation</li>
          </ol>
        </nav>

        {/* Content Section */}
        <section className="px-5 md:px-10 lg:px-20 py-10 text-gray-800 text-[1rem] md:text-[1.1rem] leading-7">
          <p className="mb-6">
            At <strong>TamiCity</strong>, we are at the forefront of developing resilient crops that can thrive under challenging conditions, including pests, diseases, and the effects of climate change. Our mission is to ensure global food security by equipping farmers with the tools and innovations needed to protect their crops and sustain their livelihoods.
          </p>
          <p className="mb-6">
            To achieve this, we collaborate with agricultural scientists and research institutions to create crop varieties that are not only resistant to common threats but also adaptable to diverse climates. By integrating advanced genetic research and traditional farming knowledge, we help farmers around the world grow more robust and productive crops.
          </p>
          <p className="mb-6">
            Our focus on climate-resilient crops ensures that farmers can maintain stable yields despite increasingly unpredictable weather. This includes drought-resistant varieties and crops that can tolerate flooding, high temperatures, and poor soil. These innovations are vital for safeguarding food production in vulnerable regions.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default CropInnovation;
