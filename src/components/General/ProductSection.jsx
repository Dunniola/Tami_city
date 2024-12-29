import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductSection() {
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState("sustainability");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/src/assets/images/imageBg5.jpg",
    "/src/assets/images/backGroundImage2.jpg",
  ];

  // Handle content change (on button click)
  const handleContentChange = (contentType) => {
    setActiveContent(contentType); // Change active content (either "sustainability" or "products")
  };

  // Sustainability Content
  const sustainabilityContent = (
    <div className="px-5 content-slide sm:px-10">
      <h2 className="mb-4 text-2xl font-bold leading-tight text-gray-800 sm:text-3xl text-secondary">
        Our Commitment to Sustainability
      </h2>
      <p className="mb-4 text-sm tracking-tight sm:text-base">
        At Tami City, sustainability is at the heart of everything we do. As a company that exports high-quality agricultural products to international markets, we recognize our responsibility to not only provide exceptional products but to do so in a way that positively impacts the environment, society, and the global food system.
      </p>
      <p className="text-sm tracking-tight sm:text-base">
        We are committed to implementing sustainable practices across every aspect of our business from the way we source and grow our products to how we manage our supply chains and engage with local communities. Our goal is to create long-term value not just for our customers, but for the planet and future generations.
      </p>
    </div>
  );

  // Products Content
  const productsContent = (
    <div className="px-5 content-slide sm:px-10">
      <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl text-secondary">
        Our Products
      </h2>
      <p className="mb-4 text-sm tracking-tight sm:text-base">
        At Tami City, we offer a diverse range of high-quality, sustainably sourced agricultural products designed to meet the growing demands of global markets. Our products include Cassava Flour, Cocoa, Cashew Nuts, and Plantain Flour—each crafted with care and expertise to provide exceptional quality and nutritional benefits.
      </p>
      <p className="text-sm tracking-tight sm:text-base">
        We are committed to sustainable sourcing and ensuring that our products meet the highest standards of excellence. By supporting local farmers and implementing ethical practices, we strive to make a positive impact on both the environment and the communities we work with.
      </p>
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContent((prevContent) =>
        prevContent === "sustainability" ? "products" : "sustainability"
      );
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeContent === "sustainability") {
      setCurrentImageIndex(0);
    } else if (activeContent === "products") {
      setCurrentImageIndex(1);
    }
  }, [activeContent]);

  return (
    <div>
      {/* Sliding Content (Sustainability vs Products) */}
      <section className="flex flex-col gap-5 mt-12 md:flex-row lg:gap-8">
        <div className="relative flex-1">
          {/* Image Slideshow with Sliding Effect */}
          <div
            className={`relative w-full h-[50vh] lg:h-[60vh] overflow-hidden transition-transform duration-1000 ease-in-out ${
              activeContent === "sustainability" ? "transform-x-[-100%]" : "transform-x-0"
            }`}
          >
            <img
              src={images[currentImageIndex]}
              alt="Background"
              className="absolute object-cover w-full h-full transition-opacity duration-1000 opacity-100"
            />
          </div>

          {/* Image Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-6 mb-10 lg:gap-10">
            <button
              onClick={() => handleContentChange("sustainability")}
              className={`h-8 w-8 text-white rounded-full ${
                activeContent === "sustainability" ? "bg-green-800" : "bg-gray-300"
              }`}
            >
              1
            </button>
            <button
              onClick={() => handleContentChange("products")}
              className={`h-8 w-8 text-white rounded-full ${
                activeContent === "products" ? "bg-green-800" : "bg-gray-300"
              }`}
            >
              2
            </button>
          </div>
        </div>

        {/* Content Area with Sliding Effect */}
        <div
          className={`flex-1 transition-transform duration-1000 ease-in-out ${
            activeContent === "sustainability" ? "transform-x-[-100%]" : "transform-x-0"
          }`}
        >
          {activeContent === "sustainability" ? sustainabilityContent : productsContent}

          {/* Read More Button */}
          {activeContent === "sustainability" && (
            <div
              className="flex items-center w-full gap-6 mt-5 text-sm font-semibold rounded-md cursor-pointer lg:gap-10 text-secondary max-md:px-10"
              onClick={() => navigate("/about/sustainability")}
            >
              <FaArrowCircleRight size={35} />
              <span className="hover:underline">Read More on Sustainability</span>
            </div>
          )}

          {activeContent === "products" && (
            <div
              className="flex items-center w-full gap-4 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-10 text-secondary max-md:px-10"
              onClick={() => navigate("/products")}
            >
              <FaArrowCircleRight size={30} />
              <span className="hover:underline">Read More on Products</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductSection;
