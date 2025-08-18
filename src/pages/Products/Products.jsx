import React from "react";
import bgImage from "/src/assets/images/imageBg5.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/General/Footer";
import { FaArrowCircleRight } from "react-icons/fa";
import productBg from "/src/assets/images/productBg.png";
import cashew from "/src/assets/images/CASHEW 2.jpg";
import cocoa from "/src/assets/images/COCOA.jpg";
import coffee from "/src/assets/images/COFFEE.jpg";
import cassava from "/src/assets/images/cassava.jpg";
import sustainable from "/src/assets/images/sustainabilityImageProduct.png";
import riskManagement from "/src/assets/images/riskManagementProduct.png";

function Products() {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-10 overflow-hidden font-sans">
        <section>
          <div
            className="relative w-full h-[35rem] leading-[4rem] px-[2rem]"
            style={{
              backgroundImage: `url(${productBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="relative top-[6rem] text-[1rem] text-white font-bold text-center">
              <span className="text-[2rem] relative font-bold top-[1rem] max-md:top-[5rem]">
                Products
              </span>
              <h1 className="relative leading-[3.5rem] max-md:text-[3rem] text-center text-[3rem] max-md:top-[5rem]">
                Sustainable <br /> Agro-Products for Global Growth
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
            <section>
              <nav className="my-4 font-bold text-[1.3rem] text-secondary">
                Products
              </nav>
            </section>

            <div>
              <h2 className="text-[3rem] max-md:leading-[2rem] leading-[4rem] font-semibold tracking-tight max-md:text-[1.5rem]">
                Tamicity, is a fully integrated agribusiness, providing
                traceable, sustainable, and client-centric supply chain
                solutions
              </h2>
              <p className="md:text-[1.2rem] text-[0.9rem] mt-4">
                We plant and collaborate with other farmers to deliver best
                quality across the continents, ensuring excellence through
                sustainable practices and innovation
              </p>
            </div>

            {/* What We Offer Section */}
           {/* What We Offer Section */}
<div className="my-10">
  <h2 className="text-[2rem] leading-[3rem] font-semibold tracking-tight py-2">
    What We Offer
  </h2>

  {/* Scroll hint for mobile */}
  <p className="mb-3 text-sm text-center text-gray-500 md:hidden">
    Swipe right to explore more →
  </p>

  <div className="relative">
    <div className="flex gap-3 overflow-x-auto scrollbar-hide md:grid md:grid-rows-2 md:grid-cols-3 ">
      {/* CARD COMPONENTS */}
      {[{
        title: "Cocoa",
        image: cocoa,
        desc: "Tamicity Cocoa supplies quality, sustainable cocoa beans and ingredients to top chocolate brands.",
        route: "/products/cocoa"
      },
      {
        title: "Coffee",
        image: coffee,
        desc: "Tamicity Coffee sources and delivers premium coffee beans across six continents.",
        route: "/products/coffee"
      },
      {
        title: "Cassava",
        image: cassava,
        desc: "We ensure high-quality cassava supply chains through direct farmer partnerships.",
        route: "/products/cassava"
      },
      {
        title: "Cashew",
        image: cashew,
        desc: "Tamicity provides premium cashew nuts, sustainably sourced and globally compliant.",
        route: "/products/cashew"
      },
      {
        title: "Sustainability",
        image: sustainable,
        desc: "We empower rural communities through sustainable, farmer-focused solutions and innovation.",
        route: "/about/sustainability"
      },
      {
        title: "Risk Management",
        image: riskManagement,
        desc: "We use advanced strategies to reduce market risks and secure your agricultural value chain.",
        route: "/products/risk-management"
      }].map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0  md:w-auto max-w-[400px]  bg-white rounded-md shadow "
        >
          <img src={item.image} alt={item.title} className="object-cover w-full h-48 rounded md:h-64" />
          <h3 className="text-[1.5rem] font-semibold mt-4 px-4">{item.title}</h3>
          <p className="px-4 mt-2 text-sm text-gray-600">{item.desc}</p>
          <div
            className="flex items-center gap-3 px-4 py-2 mt-6 text-sm font-semibold cursor-pointer text-secondary"
            onClick={() => navigate(item.route)}
          >
            <FaArrowCircleRight size={30} />
            <span className="hover:underline">Read More</span>
          </div>
        </div>
      ))}
    </div>

    {/* Gradient fade on the right (mobile only) */}
    <div className="absolute top-0 right-0 hidden w-12 h-full pointer-events-none md:hidden bg-gradient-to-l from-white to-transparent" />
  </div>
</div>

          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Products;
