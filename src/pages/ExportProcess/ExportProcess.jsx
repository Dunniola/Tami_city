import React, { useRef } from "react";
import bgImage from "/src/assets/images/imageBg5.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../../components/General/Footer";
import { useNavigate } from "react-router-dom";
import shippingBg from "/src/assets/images/shipping.png";
import shippingDelivery from "/src/assets/images/SHIPPING AND DELIVERY.jpg";
import howItWorks from "/src/assets/images/howItWorksImage.png";

function ExportProcess() {
  const navigate = useNavigate();
  const howItWorksRef = useRef(null);
  const shippingDeliveryRef = useRef(null);
  const exportDocumentationRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - 60,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header Section */}
      <header
        className="relative w-full h-[30rem] leading-[4rem] px-[2rem] text-center"
        style={{
          backgroundImage: `url(${shippingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative top-[12rem] max-md:top-[10rem] text-white font-bold text-center text-[1.2rem]">
          <h1 className="text-[3rem] max-md:text-[2.5rem] ">
            Streamlined Export Solutions for Agro-Products
          </h1>
        </div>
      </header>

      {/* 🔥 Sticky Navigation - Must Be Outside of Scrolling Content */}
      {/* <nav className="sticky top-0 z-50 shadow-md bg-green-50">
    <ul className="flex gap-4 px-5 py-2 md:gap-8">
      <li>
        <button
          className="text-lg font-semibold transition-all duration-300 hover:text-green-700"
          onClick={() => scrollToSection(howItWorksRef)}
        >
          How It Works
        </button>
      </li>
      <li>
        <button
          className="text-lg font-semibold transition-all duration-300 hover:text-green-700"
          onClick={() => scrollToSection(shippingDeliveryRef)}
        >
          Shipping and Delivery
        </button>
      </li>
      <li>
        <button
          className="text-lg font-semibold transition-all duration-300 hover:text-green-700"
          onClick={() => scrollToSection(exportDocumentationRef)}
        >
          Export Documentation
        </button>
      </li>
    </ul>
  </nav> */}

      <div className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
        {/* Export Process Section */}
        <div className="">
          <h1 className="mt-6 mb-4 font-bold text-secondary text-[1.5rem] ">
            Export Process
          </h1>
          <p className="text-[1rem]">
            At Tamicity, we specialize in exporting cassava, cocoa, coffee, and
            cashew directly sourced from trusted local farmers. Our streamlined
            process ensures fresh, high-quality products that meet international
            standards.
          </p>
          <br />
          <p className="text-[1rem]">
            We focus on minimal handling, preserving the natural quality, taste,
            and nutritional value of our products. This approach guarantees that
            our clients receive the best of what nature has to offer.
          </p>
          <br />
          <p className="text-[1rem]">
            Our logistics are optimized for efficiency and sustainability, with
            secure packaging and real-time tracking, ensuring reliable delivery
            across international markets.
          </p>
        </div>
        <nav className="sticky md:top-[2.5rem] top-[4rem] z-50 py-4 bg-gray-100 shadow-md mt-5">
            <ul className="flex justify-end gap-8 ">
              <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => scrollToSection(howItWorksRef)}
              >
                How It Works
              </li>
              <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => scrollToSection(shippingDeliveryRef)}
              >
               Shipping & Delivery
              </li>
              <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => scrollToSection(exportDocumentationRef)}
              >
               Export Documentation
              </li>
              {/* <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => handleNavigation(partnershipsRef)}
              >
                Partnerships and Accreditations
              </li> */}
            </ul>
          </nav>

        {/* Main Section */}
        <main className="">
          {/* How It Works */}
          <section id="how-it-works" className="mb-12" ref={howItWorksRef}>
            <h2 className="mt-10 mb-4 text-2xl font-bold text-green-700 md:text-3xl">
              How It Works
            </h2>
            <div className="flex flex-col-reverse gap-6 md:flex-row">
              <div className="md:w-1/2">
                <p className="mb-4">
                  At Tamicity, we believe in creating a seamless process for
                  exporting agricultural products. Our journey begins with
                  establishing relationships with local farmers, ensuring fair
                  trade practices and sustainable farming techniques. We work
                  closely with these farmers to procure cassava, cocoa, coffee,
                  and cashew in their purest form.
                </p>
                <p className="mb-4">
                  After harvesting, our team ensures that the products are
                  stored and packaged using the latest technology to maintain
                  their natural freshness. Unlike other exporters, we avoid
                  unnecessary processing, ensuring that the products retain
                  their natural quality and are ready for international markets.
                </p>
                <p>
                  By investing in both local farming communities and advanced
                  logistics, we create a reliable supply chain that guarantees
                  timely and efficient delivery to our international partners.
                </p>
                <div
                  className="flex items-center w-full gap-3 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary"
                  onClick={() => navigate("/export-process/how-it-works")}
                >
                  <FaArrowCircleRight size={30} />
                  <span className="hover:underline ">
                    Read More on How It Works
                  </span>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src={howItWorks}
                  alt="How It Works"
                  className="h-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Shipping and Delivery */}
          <section
            id="shipping-delivery"
            className="mb-12 bg-gray-100 rounded-lg shadow-lg "
            ref={shippingDeliveryRef}
          >
            <h2 className="mb-4 text-2xl font-bold text-green-700 md:text-3xl">
              Shipping and Delivery
            </h2>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={shippingDelivery}
                  alt="Shipping and Delivery"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <p className="mb-4">
                  Tamicity partners with top-tier logistics companies to ensure
                  that our agro-products reach their destinations efficiently
                  and safely. Whether shipping cassava, cocoa, coffee, or
                  cashew, we prioritize robust packaging to prevent damage
                  during transit and preserve the quality of the products.
                </p>
                <p className="mb-4">
                  With our advanced tracking systems, customers can monitor
                  their shipments in real time, ensuring transparency and peace
                  of mind. We manage the entire logistics process, from loading
                  at the source to final delivery at the port of destination.
                </p>
                <p>
                  Our commitment to reliable delivery extends to offering
                  flexible shipping options tailored to the needs of our diverse
                  international clientele.
                </p>
                <div
                  className="flex items-center w-full gap-3 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary"
                  onClick={() => navigate("/export-process/shipping")}
                >
                  <FaArrowCircleRight size={30} />
                  <span className="hover:underline ">
                    Read More on Shipping and Delivery{" "}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Export Documentation */}
          <section
            id="export-documentation"
            className="mb-12"
            ref={exportDocumentationRef}
          >
            <h2 className="mb-4 text-2xl font-bold text-green-700 md:text-3xl">
              Export Documentation
            </h2>
            <div
              className="p-6 bg-center bg-cover rounded-lg shadow-lg md:p-10"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-6 bg-white rounded-lg bg-opacity-80 md:p-10">
                <p className="mb-4">
                  Exporting agricultural products requires strict adherence to
                  international trade regulations. At Tamicity, we handle all
                  necessary export documentation to ensure a smooth and
                  hassle-free process. Our experienced team manages everything
                  from commercial invoices and certificates of origin to packing
                  lists and quality assurance certifications.
                </p>
                <p className="mb-4">
                  We understand the importance of compliance, so we work closely
                  with relevant authorities to ensure that every shipment meets
                  the highest standards. Our documentation process is thorough
                  and transparent, guaranteeing that our customers receive all
                  necessary paperwork for their records.
                </p>
                <p>
                  By managing the documentation process, we enable our clients
                  to focus on their core business activities while we handle the
                  complexities of international trade.
                </p>
                <div
                  className="flex items-center w-full gap-3 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary"
                  onClick={() => navigate("/export-process/documentation")}
                >
                  <FaArrowCircleRight size={30} />
                  <span className="hover:underline ">
                    Read More on Export Documentation
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center py-10 mt-10 text-center bg-green-50">
            <h2 className="font-bold text-center text-1xl text-secondary semibold">
              Reach Out to Us
            </h2>
            <p className="mb-8 text-[3rem] leading-[3rem] tracking-tight text-center text-gray-600 font-bold">
              Connect with Tamicity and our expert teams for assistance
            </p>
            <div
              className="flex flex-col items-center w-full gap-3 px-10 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary"
              onClick={() => navigate("/contact")}
            >
              <FaArrowCircleRight size={40} />
            </div>
          </section>
        </main>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ExportProcess;
