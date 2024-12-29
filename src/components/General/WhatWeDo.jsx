import { FaArrowCircleRight } from "react-icons/fa";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function WhoWeAreAndWhatWeDo() {
  const navigate = useNavigate();

  // Sections combining 'What We Do', 'Export Process', and 'Our Products'
  const sections = [
    {
      title: "What We Do",
      description:
        "At TamiCity, we connect farmers, suppliers, and buyers to create a transparent and efficient marketplace. Our focus is on innovation and sustainability. We build long-term partnerships to shape the future of agriculture.",
      link: "/about",
      image: "/src/assets/images/image8.avif"
    },
    {
      title: "Export Process",
      description:
        "Our export process ensures a smooth experience, handling everything from logistics to customs clearance. We prioritize reliability and transparency. Your order reaches its destination efficiently and on time.",
      link: "/export/how-it-works",
      image: "/src/assets/images/imageBg4.jpg"
    },
    {
      title: "Our Products",
      description:
        "We offer premium, sustainably sourced agricultural products like cassava, cocoa, cashew nuts, and plantain flour. Each product meets international quality standards. Our goal is to provide consistent, top-tier products for global markets.",
      link: "/products",
      image: "/src/assets/images/imageBg5.jpg"
    },
  ];

  return (
    <>
      {/* Main Section for 'Who We Are: Our World - What’s Happening' */}
      <section className="grid py-16 m-auto my-10 bg-gray-100 place-content-center">
        <div className="mx-auto">
          <h2 className="px-10 text-3xl font-semibold max-md:px-10 text-secondary">Who We Are</h2>
          <h3 className="px-10 mb-8 text-5xl font-bold text-gray-600 max-md:px-10">Our World - What’s Happening</h3>

          {/* Flex container for Section 1 and Section 2 + Section 3 */}
          <div className="flex gap-10 max-md:grid">
            {/* Section 1 - Takes full height */}
            <div
              className="relative lg:w-1/2 "
              style={{
                backgroundImage: `url(${sections[0].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Set a minimum height for mobile view
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black rounded-lg opacity-40"></div>

              {/* Content of Section 1 */}
              <div className="relative  text-white rounded-lg  sm:mt-[15rem]">
                <p className=" text-[1rem] leading-6 mt-24 max-md:px-[2rem] md:mt-[40rem] ">{sections[0].description}</p>
                <div
                  className="flex items-center gap-4 lg:gap-10 w-full text-white font-semibold rounded-md mt-5 text-[1rem] cursor-pointer px-[1rem]"
                  onClick={() => navigate("/about/sustainability")}
                >
                  <FaArrowCircleRight size={40} />
                  <span className="hover:underline">Read More here</span>
                </div>
              </div>
            </div>

            {/* Section 2 + Section 3 - Side by side (flex container) */}
            <div className="flex flex-col w-full gap-10 max-md:w-full lg:w-1/2">
              {/* Section 2 */}
              <div
                className="relative flex-1 w-full"
                style={{
                  backgroundImage: `url(${sections[1].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black rounded-lg opacity-40"></div>

                {/* Content of Section 2 */}
                <div className="relative p-6 text-white rounded-lg shadow-md md:mt-[12rem] px-[1rem]">
                  <h2 className="text-5xl font-semibold ">{sections[1].title}</h2>
                  <p className="mt-4 text-[0.8rem]">{sections[1].description}</p>
                  <div
                    className="flex items-center gap-4 lg:gap-10 w-full text-white font-semibold rounded-md mt-5 text-[1rem] cursor-pointer"
                    onClick={() => navigate("/about/sustainability")}
                  >
                    <FaArrowCircleRight size={40} />
                    <span className="hover:underline">Read More about our Export Process</span>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div
                className="relative flex-1 w-full"
                style={{
                  backgroundImage: `url(${sections[2].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black rounded-lg opacity-40"></div>

                {/* Content of Section 3 */}
                <div className="relative p-6 text-white rounded-lg shadow-md mt-[12rem] px-[2rem]">
                  <h2 className="text-5xl font-semibold">{sections[2].title}</h2>
                  <div
                    className="flex items-center gap-4 lg:gap-10 w-full text-white font-semibold rounded-md mt-10 text-[1rem] cursor-pointer"
                    onClick={() => navigate("/about/sustainability")}
                  >
                    <FaArrowCircleRight size={40} />
                    <span className="hover:underline">Read on our Product</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAreAndWhatWeDo;
