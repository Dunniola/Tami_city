import React from "react";
import bgImage from "/src/assets/images/howItWorks.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/General/Footer";

const ExportProcessFullPage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <header
        className="relative w-full h-[30rem] leading-[4rem] px-6 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold md:text-5xl">How It Works</h1>
          <p className="max-w-2xl mx-auto mt-3 text-lg font-light md:text-xl">
            From sourcing the finest crops to seamless global delivery — discover our step-by-step export process.
          </p>
        </div>

        {/* SVG Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg
            viewBox="0 0 500 50"
            preserveAspectRatio="none"
            className="w-full h-[60px]"
          >
            <path
              d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z"
              style={{ fill: "#ffffff" }}
            ></path>
          </svg>
        </div>
      </header>

      {/* Shortened Export Story */}
      <main className="  py-12  text-[1.1rem] leading-7 text-gray-700 flex flex-col justify-center px-5 lg:px-20 md:px-10">
        <p className="mb-5">
          At Tamicity, our export process begins with partnering directly with trusted local farmers who grow high-quality crops such as cassava, cocoa, cashew, and coffee using sustainable practices. These partnerships ensure product quality, fair trade, and consistent supply.
        </p>
        <p className="mb-5">
          After harvesting, we conduct strict quality checks and package the products using eco-friendly materials to preserve freshness. Our team leverages modern storage and handling techniques to ensure the goods retain their natural quality for international markets.
        </p>
        <p>
          We manage logistics, documentation, and shipping with precision—ensuring timely delivery and real-time tracking for clients. From sourcing to global distribution, we deliver value, transparency, and excellence at every step of the export journey.
        </p>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 text-white transition bg-green-700 rounded-lg hover:bg-green-800"
          >
            Contact Us to Start Exporting
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExportProcessFullPage;
