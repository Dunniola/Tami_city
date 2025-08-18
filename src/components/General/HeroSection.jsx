import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import content from "../General/Contents";
import cocoa from "/src/assets/images/COCOA.jpg";
import cassava from "/src/assets/images/cassavaBg.png";
import cashew from "/src/assets/images/cashewBg.png";
import coffee  from "/src/assets/images/coffeeBg.png";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const images = [cocoa, cassava, coffee,cashew];
  const currentContent = content[currentImageIndex] || {};

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup to prevent memory leaks
  }, []);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div>
      <div className="relative h-[35rem]   overflow-hidden w-full z-0">
        {/* Dynamic Background Image */}
        <div className="absolute w-full h-full">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentImageIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute w-full  h-[35rem] bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
            ></motion.div>
          </AnimatePresence>
        </div>

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-40">
          <div className="text-center text-white px-4 sm:px-10 md:px-[8rem]">
            <h1 className="text-2xl sm:text-[2rem] tracking-wide lg:text-[2.5rem] py-3 font-bold leading-8">
              {currentContent.title || "Default Title"}
            </h1>
            <p className="mb-4 text-sm leading-6 sm:text-base lg:text-lg">
              {currentContent.text || "Default description text goes here."}
            </p>
            <div
              className="flex items-center justify-center w-full max-w-[8rem] mx-auto text-center italic text-secondary font-semibold rounded-md bg-primary cursor-pointer py-2 sm:py-3"
              onClick={() => navigate("/about-tamicity")}
            >
              <span className="px-3 text-sm sm:text-base">Learn More</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Section */}
      <div className="px-4 py-4 my-8 text-center bg-gray-50 sm:px-10 md:px-16 place-items-center">
        <h1 className="text-xl sm:text-[2rem] md:text-[2rem] leading-[2rem] my-6">
          Africa’s Fast Growing  Agro-Exporter,{" "}
          <strong>Connecting Global Markets</strong>
        </h1>
        <p className="text-sm leading-7 sm:text-[1.2rem] md:text-lg sm:leading-7">
          TamiCity is an agro-exportation company dedicated to transforming the
          agricultural landscape <br />
          by exporting high-quality cocoa, coffee, cassava, and cashew nut
          products. We{" "}
          <strong>
            support farmers across the world to <br /> enhance food security, and promote
            sustainable farming practices.
          </strong>{" "}
          While our focus begins in Africa, <br />
          our impact extends globally,{" "}
          <strong>
            connecting agricultural potential with international markets.
          </strong>
        </p>

        <Link to="/about-tamicity">
          <button className="flex items-center gap-2 px-6 py-2 mt-5 font-semibold text-center rounded-md bg-primary text-secondary">
            Know more about Tamicity
            <FaArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
