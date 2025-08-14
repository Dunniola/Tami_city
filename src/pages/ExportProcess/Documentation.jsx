import React from "react";
import bgImage from "../../assets/images/ExportDocumentation.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../../components/General/Footer";
import { useNavigate } from "react-router-dom";

const ExportDocumentation = () => {
  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Header */}
      <header
        className="relative w-full h-[30rem]  lg:h-[30rem] flex items-center justify-center px-4 md:px-10 lg:px-20 text-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: bgImage ? "transparent" : "#f0f0f0",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <span className="block text-lg font-semibold sm:text-xl md:text-2xl">
            Export Documentation
          </span>
          <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Ensuring Compliance and Smooth Trade Processes
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20 text-[0.95rem] sm:text-base leading-7 text-gray-700">
        {/* Title */}
        <h2 className="text-2xl font-bold text-green-700 sm:text-3xl md:text-4xl">
          Professional Export Documentation Services
        </h2>

        {/* Paragraphs */}
        <p className="mt-4 text-sm sm:text-base">
          Exporting agricultural products requires strict adherence to international trade regulations.
          At <strong>Tamicity</strong>, we handle all necessary export documentation to ensure a smooth
          and hassle-free process. Our experienced team manages everything from commercial invoices and
          certificates of origin to packing lists and quality assurance certifications.
        </p>

        <p className="mt-6 text-sm sm:text-base">
          We understand the importance of compliance, so we work closely with relevant authorities to
          ensure that every shipment meets the highest standards. Our documentation process is thorough
          and transparent, guaranteeing that our customers receive all necessary paperwork for their records.
        </p>

        <p className="mt-6 text-sm sm:text-base">
          By managing the documentation process, we enable our clients to focus on their core business
          activities while we handle the complexities of international trade.
        </p>

        {/* Call to Action */}
        <div className="px-5 py-10 mt-16 text-center rounded-md md:px-10 bg-green-50">
          <h2 className="text-xl font-semibold text-green-700 sm:text-2xl">
            Let Us Handle Your Export Documentation!
          </h2>
          <p className="mt-4 mb-8 text-sm text-gray-600 sm:text-base">
            Experience seamless international trade with Tamicity. Reach out to us today to learn how
            we can assist in simplifying your export process.
          </p>
          <div
            className="inline-flex items-center gap-2 font-semibold text-green-700 cursor-pointer hover:underline"
            onClick={() => navigate("/contact")}
          >
            <span>Contact Us</span>
            <FaArrowCircleRight size={24} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExportDocumentation;
