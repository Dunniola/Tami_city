import React from "react";
import bgImage from "/src/assets/images/sustainable.JPG";
import { Link } from "react-router-dom";
import Footer from "../../components/General/Footer";

function SuistanableDev() {
  return (
    <>
      <div className="font-sans ">
        {/* Header Section with Background */}
        <section
          className="relative w-full h-[30rem]  px-5 lg:px-20 md:px-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative flex items-center h-full px-4 text-white ">
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold">
              Promoting Sustainable Development
            </h1>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="px-5 mt-8 text-sm md:px-10 lg:px-20 text-secondary md:text-base">
          <nav>
            <ol className="flex flex-wrap space-x-2 md:space-x-4">
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
              <li className="font-bold text-gray-700">
                Promoting Sustainable Development
              </li>
            </ol>
          </nav>
        </section>

        {/* Main Content */}
        <section className="px-5 md:px-10 lg:px-20 py-10 text-gray-800 text-[1rem] md:text-[1.1rem] leading-7">
          <p className="mb-6">
            At <strong>TamiCity</strong>, we are deeply committed to promoting sustainable development in every aspect of our operations. We believe that sustainable agricultural practices are key to ensuring long-term growth, resilience, and food security for communities around the world. Our efforts focus on creating a balanced approach that nurtures both people and the planet, fostering prosperity while minimizing environmental impacts.
          </p>
          <p className="mb-6">
            One of our core initiatives is improving resource efficiency across our supply chain. By utilizing precision farming techniques, we help farmers optimize the use of water, soil, and nutrients, reducing waste and improving yields. This not only increases productivity but also helps conserve valuable natural resources, ensuring that future generations can continue to benefit from fertile and healthy land.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default SuistanableDev;
