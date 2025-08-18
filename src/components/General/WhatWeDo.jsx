import { FaArrowCircleRight } from "react-icons/fa";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from "/src/assets/images/SHIPPING AND DELIVERY.jpg";
import bgImage2 from "/src/assets/images/homepage.jpg";
import bgImage3 from "/src/assets/images/riskManagement.png";



function WhoWeAreAndWhatWeDo() {
  const navigate = useNavigate();

  // Sections combining 'What We Do', 'Export Process', and 'Our Products'
  const sections = [
    {
      title: "What We Do",
      description:
        "At TamiCity, we connect farmers, suppliers, and buyers to create a transparent and efficient marketplace. Our focus is on innovation and sustainability. We build long-term partnerships to shape the future of agriculture.",
      link: "/about",
      image: bgImage2
    },
    {
      title: "Export Process",
      description:
        "Our export process ensures a smooth experience, handling everything from logistics to customs clearance. We prioritize reliability and transparency. Your order reaches its destination efficiently and on time.",
      link: "/export/how-it-works",
      image: bgImage
    },
    {
      title: "Risk Management",
      description:
        "We identify and mitigate potential risks in agricultural trade to ensure smooth global transactions. Our strategies safeguard supply chains, maintaining quality and compliance. With proactive risk assessment, we guarantee secure and sustainable operations.",
      link: "/products/risk-management",
      image: bgImage3
      
    },
  ];

  return (
    <>
      {/* Main Section for 'Who We Are: Our World - What’s Happening' */}
      <section className="grid my-10 bg-gray-100 place-content-center ">
        <div className="">
          <h2 className="px-10 mt-10 mb-3 text-3xl font-semibold max-md:px-10 text-secondary">Who We Are</h2>
          <h3 className="px-10 mb-8 font-bold text-gray-600 text-[3rem] max-md:text-[2rem] max-md:px-10 ">Our World - What’s Happening</h3>

          {/* Flex container for Section 1 and Section 2 + Section 3 */}
          <div className="flex gap-4 max-md:grid md:h-[30rem] ">
            {/* Section 1 - Takes full height */}
            <div 
              className="relative flex-1 lg:w-1/2"
              style={{
                backgroundImage: `url(${sections[0].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Set a minimum height for mobile view
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black rounded-lg opacity-20 "></div>

              {/* Content of Section 1 */}
              <div className="relative  text-white rounded-lg  sm:mt-[13rem] sm:mb-[1rem]">
                <p className=" text-[1rem] leading-6 max-md:mt-20 px-[2rem] ">{sections[0].description}</p>
                <div
                  className="flex items-center gap-4 lg:gap-5 w-full text-white font-semibold rounded-md  text-[1rem] cursor-pointer px-[2rem] "
                  onClick={() => navigate("/about/sustainability")}
                >
                  <FaArrowCircleRight size={40} />
                  <span className="hover:underline max-md:py-[2rem]">Read More here</span>
                </div>
              </div>
            </div>

            {/* Section 2 + Section 3 - Side by side (flex container) */}
            <div className="flex-1 w-full">
              <div className="grid w-full h-full gap-4 max-md:w-full lg:w-full">
                {/* Section 2 */}
                <div
                  className="relative w-full h-full"
                  style={{
                    backgroundImage: `url(${sections[1].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 bg-black rounded-lg opacity-50"></div>

                  {/* Content of Section 2 */}
                  <div className="relative max-md:p-6 text-white rounded-lg  max-md:pt-[5rem] max-md:pb-[3rem] px-[1rem] md:top-[3rem] w-full ">
                    <h2 className="mb-4 text-2xl font-semibold ">{sections[1].title}</h2>
                    <p className=" md:text-[0.9rem] ">{sections[1].description}</p>
                    <div
                      className="flex gap-5 items-center max-md:gap-2 lg:gap-5  text-white font-semibold rounded-md max-md:mt-3 md:text-[1rem] cursor-pointer md:top-[1rem] relative"
                      onClick={() => navigate("/export-process")}
                    >
                      <FaArrowCircleRight size={40} />
                      <span className="relative hover:underline ">Read More about our Export Process</span>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div
                  className="relative w-full h-full"
                  style={{
                    backgroundImage: `url(${sections[2].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Overlay for better text visibility */}
                  <div className="absolute inset-0 w-full bg-black rounded-lg opacity-20"></div>

                  {/* Content of Section 3 */}
                  <div className="relative max-md:p-6 text-white rounded-lg max-md:mt-[6rem] px-[2rem] md:top-[3rem] w-full ">
                    <h2 className="mb-2 text-4xl font-semibold md:text-3xl relative md:top-[rem]">{sections[2].title}</h2>
                    <p className=" md:text-[0.9rem] ">{sections[2].description}</p>
                    <div
                      className="flex items-center gap-4  w-full text-white font-semibold rounded-md max-md:mt-10 text-[1.1rem] cursor-pointer relative md:top-[1rem]"
                      onClick={() => navigate("/products/risk-management")}
                    >
                      <FaArrowCircleRight size={40} />
                      <span className="hover:underline">Read more</span>
                    </div>
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
