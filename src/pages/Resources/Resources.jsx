import React from "react";
import Footer from "../../components/General/Footer";
import resources from "/src/assets/images/resources.JPG";
import { Link } from "react-router-dom";

function Resources() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <header
        className="relative w-full h-[30rem] leading-[4rem] px-[2rem] text-center "
        style={{
          backgroundImage: `url(${resources})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative top-[12rem] text-gray-100 font-bold text-center text-[1.2rem]">
          <h1 className="text-[3rem] max-md:text-[3.5rem]">
            Resources
          </h1>
        </div>
      </header>

      {/* Content Section */}
      <div className="flex flex-col justify-center px-5 py-10 bg-white lg:px-20 md:px-10">
        <section>
          <div className="space-y-10 ">
            {/* Resources Overview */}
            <section>
              <p className="mt-4 text-lg gray-700 max-md:text-[0.9rem]">
                At Tamicity, we believe in empowering our customers and partners
                with the right information. This Resources page is designed to
                guide you through our agricultural export services,
                sustainability practices, and how we work with clients globally
                to deliver high-quality produce like cassava, coffee cashew and
                cocoa.
              </p>
            </section>

            {/* FAQ Intro and Link */}
            <section className="flex flex-col py-10 mt-20 text-center bg-green-50">
              <h2 className="font-bold text-center text-1xl text-secondary semibold">
                Need Help? Explore Our FAQ
              </h2>
              <p className="mb-8 text-[3rem] max-md:text-[1.5rem] md:leading-[3rem] tracking-tight text-center text-gray-600 font-bold ">
                Get quick answers to common questions about our products,
                processes, and how to get started with exports.
              </p>
              <Link to={"/resources/FAQs"} className="font-semibold hover:text-secondary">
              Go to Frequently Asked Questions →
              </Link>
               
            
            </section>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Resources;
