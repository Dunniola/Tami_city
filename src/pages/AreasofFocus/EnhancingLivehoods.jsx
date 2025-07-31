import React from "react";
import bgImage from "/src/assets/images/enhanceLivehood.PNG";
import { Link } from "react-router-dom";
import Footer from "../../components/General/Footer";

function EnhancingLivehoods() {
  return (
    <>
      <div className="mt-20 font-sans">
        {/* Header Section with Background Image */}
        <section
          className="relative w-full h-[20rem] md:h-[25rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full px-4 text-white text-center">
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold">
              Enhancing Livelihoods
            </h1>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="px-5 md:px-10 lg:px-20 mt-8 text-secondary text-sm md:text-base">
          <nav>
            <ol className="flex flex-wrap items-center space-x-2 md:space-x-4">
              <li>
                <Link to="/" className="text-primary font-semibold hover:underline">
                  Home
                </Link>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li>
                <Link to="/" className="text-primary font-semibold hover:underline">
                  Areas of Focus
                </Link>
              </li>
              <li className="text-gray-500">&gt;</li>
              <li className="font-bold text-gray-700">Enhancing Livelihoods</li>
            </ol>
          </nav>
        </section>

        {/* Main Content Section */}
        <section className="px-5 md:px-10 lg:px-20 py-10 text-gray-800 text-[1rem] md:text-[1.1rem] leading-7">
          <p className="mb-6">
            At <strong>TamiCity</strong>, we recognize the vital role that smallholder farmers play in the global agricultural landscape. We are dedicated to improving their livelihoods by providing the necessary resources, knowledge, and opportunities to thrive in an ever-evolving industry.
          </p>
          <p className="mb-6">
            Our mission is to empower smallholder farmers worldwide, enabling them to achieve sustainable economic growth and enhance their quality of life. One of our key strategies is through fair financial support—helping farmers access capital for tools, equipment, and inputs to improve productivity.
          </p>
          <p className="mb-6">
            Additionally, we connect farmers with broader markets, ensuring fair pricing and better reach. Through these initiatives, we aim to foster long-lasting change that improves economic, social, and environmental well-being for farming communities.
          </p>
          <p className="mb-6">
            We believe that when farmers succeed, communities thrive, and the world’s food systems become more resilient. Our commitment to enhancing livelihoods is central to our vision of a sustainable and inclusive future.
          </p>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default EnhancingLivehoods;
