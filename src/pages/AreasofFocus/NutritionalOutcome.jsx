import React from "react";
import bgImage from "/src/assets/images/nutritionalOutcome.PNG";
import { Link } from "react-router-dom";
import Footer from "../../components/General/Footer";

function NutritionalOutcome() {
  return (
    <>
      <div className="font-sans ">
        {/* Header Section */}
        <section
          className="relative w-full h-[30rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative flex items-center h-full px-5 text-center text-white lg:px-20 md:px-10"> 
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold">
              Nutritional Outcome
            </h1>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="px-5 mt-8 text-sm md:px-10 lg:px-20 text-secondary md:text-base">
          <nav>
            <ol className="flex flex-wrap items-center space-x-2 md:space-x-4">
              <li>
                <Link to="/" className="font-semibold text-primary hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li>
                <Link to="/" className="font-semibold text-primary hover:underline">
                  Areas of Focus
                </Link>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li className="font-bold text-gray-700">Nutritional Outcome</li>
            </ol>
          </nav>
        </section>

        {/* Main Content */}
        <section className="px-5 md:px-10 lg:px-20 py-10 text-gray-800 text-[1rem] md:text-[1.1rem] leading-7">
          <p className="mb-6">
            At <strong>TamiCity</strong>, we are dedicated to increasing the availability of nutritious, locally-adapted foods to ensure better health and nutrition worldwide. Our approach addresses the growing need for food systems that prioritize both quantity and quality—delivering agricultural products that promote well-being at every level of society.
          </p>
          <p className="mb-6">
            By leveraging our expertise in agro-exportation, we focus on creating products that are not only rich in essential nutrients but also tailored to meet the dietary preferences and cultural needs of diverse communities. Our cassava and yam-based products are carefully processed to retain their natural benefits, offering high-quality options that support healthier lifestyles.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default NutritionalOutcome;
