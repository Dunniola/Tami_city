import React, { useState, useEffect } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import content from "../General/Contents"; // Ensure this import is correct

function HeroSection() {
  const navigate = useNavigate();
  const contents = content; // Importing content from your file
  
  // State for controlling background image index for the sliding effect
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images for the sliding effect
  const images = [
    "/src/assets/images/image11.webp", // Your initial static image
    "/src/assets/images/imageBg6.jpg",  // Second image
    "/src/assets/images/imageBg4.jpg",  // Third image
    "/src/assets/images/imageBg5.jpg",  // Fourth image
    "/src/assets/images/imageBg2.jpg",  // Fifth image
  ];

  // UseEffect to switch images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {/* Sliding Background Image and Content Section */}
      <div className="relative h-[20rem] md:h-[30rem] lg:h-[40rem] overflow-hidden z-0">
        {/* Sliding Background Image */}
        <div
          className="absolute w-full h-full transition-all duration-700 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>

        {/* Content overlay that slides with background image */}
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-700 bg-black bg-opacity-50">
          <div className="text-center text-white px-5 md:px-10 lg:px-[12rem]">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] py-5 mb-5 font-bold leading-tight">
              {contents[currentImageIndex].title} {/* Dynamically renders the title */}
            </h1>
            <p className="text-sm sm:text-base lg:text-[1.2rem] mb-5 leading-6 sm:leading-7">
              {contents[currentImageIndex].text} {/* Dynamically renders the description */}
            </p>
            {/* CTA Button */}
            <div
              className="flex items-center justify-center w-full max-w-[18rem] mx-auto text-center text-secondary font-semibold rounded-md bg-primary cursor-pointer mt-5"
              onClick={() => navigate("/about")}
            >
              <span className="px-5 py-2 text-sm sm:text-base">Learn More</span>
              <FaArrowCircleRight size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Original Hero content */}
      <div className="px-5 ">
        <div className="flex items-center justify-center my-16 text-center">
          <div className="text-sm sm:text-base lg:text-[1.2rem]">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] py-5 mb-5  max-md:px-5 font-bold leading-tight">
              Driving Sustainable Agriculture Innovation Globally
            </h1>
            <p className="mb-5 leading-7 tracking-tight max-md:px-8 sm:leading-8">
              <strong>TamiCity</strong> is a dynamic organization committed to driving agricultural innovation to address global challenges such as hunger, malnutrition, poverty, and environmental degradation.
              We collaborate with partners worldwide to improve <strong>livelihoods, enhance food and nutrition security, create employment opportunities,</strong> and <strong>promote sustainable resource management globally.</strong>
            </p>
            {/* CTA Button */}
            <div
              className="flex items-center justify-center w-full max-w-[18rem] m-auto text-center text-secondary font-semibold rounded-md bg-primary cursor-pointer mt-5 text-sm sm:text-base"
              onClick={() => navigate("/about")}
            >
              <span className="px-5 py-2">Learn More</span>
              <FaArrowCircleRight size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
