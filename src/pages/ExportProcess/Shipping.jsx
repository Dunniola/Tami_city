import React, { useRef, useState, useEffect } from "react";
import order from "/src/assets/images/orderProcess(new).JPG";
import packaging from "/src/assets/images/packaging(new).JPG";
import shippingBg from "/src/assets/images/deliveryBg.jpg";
import delivery from "/src/assets/images/delivery(new).jpg";
import shipping from "/src/assets/images/shipping(new).jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../../components/General/Footer";
import { useNavigate } from "react-router-dom";

const ShippingAndDelivery = () => {
  const navigate = useNavigate();

  const orderRef = useRef(null);
  const packagingRef = useRef(null);
  const shippingRef = useRef(null);
  const deliveryRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - 50,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const sections = [
      { ref: orderRef, id: "order" },
      { ref: packagingRef, id: "packaging" },
      { ref: shippingRef, id: "shipping" },
      { ref: deliveryRef, id: "delivery" },
    ];

    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.ref.current.offsetTop;
      const sectionHeight = section.ref.current.offsetHeight;

      if (
        scrollPosition >= sectionTop - 50 &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Header with Background Image */}
      <header
        className="relative w-full h-[30rem] leading-[4rem] flex flex-col justify-center px-5 lg:px-20 md:px-10 text-center"
        style={{
          backgroundImage: `url(${shippingBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative top-[5rem] max-md:top-[3rem] text-white font-bold">
          <span className="text-[1.5rem] font-semibold">
            Shipping and Delivery
          </span>
          <h1 className="text-[3rem] max-md:text-[2.5rem] tracking-tight max-md:leading-10">
            Efficient Exportation of High-Quality Agro-Products
          </h1>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky md:top-[2.5rem] top-[4rem] z-50 py-4 bg-gray-100 shadow-md mt-5">
        <div className="container flex md:justify-end gap-10 max-md:gap-3 px-2 lg:px-20 md:px-10 text-primary text-[0.8rem]">
          {[
            { label: "Order Processing", id: "order", ref: orderRef },
            { label: "Packaging", id: "packaging", ref: packagingRef },
            { label: "Shipping", id: "shipping", ref: shippingRef },
            { label: "Delivery Updates", id: "delivery", ref: deliveryRef },
          ].map((section) => (
            <button
              key={section.id}
              className={`hover:underline ${
                activeSection === section.id ? "font-bold" : ""
              }`}
              onClick={() => scrollToSection(section.ref)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex flex-col justify-center px-2 lg:px-20 md:px-10">
        {/* Overview Section */}
        <section className="py-12 md:py-20" ref={orderRef}>
          <div className="max-w-screen-xl px-2 mb-10">
            <h1 className="text-3xl font-bold text-green-700 md:text-4xl">
              Shipping and Delivery
            </h1>
            <p className="mt-4 leading-relaxed text-gray-700 text-[0.9rem]">
              Tamicity ensures the smooth exportation of fresh agro-products
              from Nigeria to international markets. Our commitment is not just
              to meet the expectations of our customers, but to exceed them,
              with reliable and on-time delivery. From the moment you place your
              order, our team works tirelessly to ensure that your products
              arrive on time and in pristine condition.
            </p>
          </div>

          {/* Step 1: Order Processing */}
          <div className="px-2">
            <div className="flex items-center mb-8 max-md:flex-col">
              <img
                src={order}
                alt="Order Processing"
                className="w-full rounded-lg shadow-lg mb-4 object-cover object-top flex-1 h-[150px] sm:h-[200px] md:h-[350px]"
              />
              <div className="flex-1 md:w-1/2 md:text-left md:pl-8">
                <h2 className="text-2xl font-semibold text-green-700">
                  Fast and Efficient Order Processing
                </h2>
                <p className="mt-4 text-gray-600">
                  Once you place your order, we initiate swift processing to
                  ensure a fast turnaround. Your agro-products are prioritized
                  to meet deadlines and ensure timely shipping. From confirming
                  product availability to ensuring all required documents are in
                  order, we take the necessary steps to avoid delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Packaging */}
        <div
          className="flex items-center mb-8 max-md:flex-col-reverse"
          ref={packagingRef}
        >
          <div className="flex-1 md:w-1/3 md:pl-8 px-2">
            <h2 className="text-2xl font-semibold text-green-700">
              Packaging
            </h2>
            <p className="mt-4 text-gray-600">
              At Tamicity, packaging is a critical aspect of the shipping
              process. We ensure that each order is carefully packaged,
              preserving the quality and freshness of the agro-products. Our
              eco-friendly packaging is not only designed to protect the
              products during transit, but also to minimize waste.
            </p>
          </div>
          <img
            src={packaging}
            alt="Packaging"
            className="w-full rounded-lg shadow-lg mb-4 object-cover object-top h-[150px] sm:h-[200px] md:h-[350px] flex-1 md:w-1/3"
          />
        </div>

        {/* Step 3: Shipping */}
        <div
          className="flex items-center mb-8 max-md:flex-col px-2"
          ref={shippingRef}
        >
          <img
            src={shipping}
            alt="Shipping"
            className="w-full rounded-lg shadow-lg mb-4 object-cover object-top h-[150px] sm:h-[200px] md:h-[350px] flex-1 md:w-1/3"
          />
          <div className="flex-1 md:w-1/3 md:pl-8">
            <h2 className="text-2xl font-semibold text-green-700">Shipping</h2>
            <p className="mt-4 text-gray-600">
              Tamicity partners with trusted global couriers to ensure timely
              and safe delivery of your orders across international markets. We
              offer flexible delivery timelines and end-to-end tracking.
            </p>
          </div>
        </div>

        {/* Step 4: Delivery Updates */}
        <section className="mt-12 md:flex md:gap-12 px-2" ref={deliveryRef}>
          <div className="flex items-center mb-8 max-md:flex-col-reverse">
            <div className="flex-1 md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-semibold text-green-700">
                Delivery Updates
              </h2>
              <p className="mt-4 text-gray-600">
                We provide comprehensive tracking and timely updates. Our
                customer support is always available to help you with any
                shipping inquiries, offering peace of mind until delivery is
                complete.
              </p>
            </div>
            <img
              src={delivery}
              alt="Delivery Updates"
              className="w-full rounded-lg shadow-lg mb-4 object-cover object-top h-[150px] sm:h-[200px] md:h-[350px] flex-1 md:w-1/3"
            />
          </div>
        </section>
      </section>

      {/* CTA Section */}
      <div className="flex flex-col items-center px-5 py-10 mt-20 text-center bg-green-50">
        <h2 className="text-2xl font-semibold text-green-700">
          Ready to Export Your Agro-Products with Confidence?
        </h2>
        <p className="mt-4 mb-8 text-lg text-gray-600">
          With Tamicity, your agro-products are in safe hands. Get started today
          and experience the ease and reliability of international
          agro-product exportation with us.
        </p>
        <div
          className="flex flex-col items-center w-full gap-3 px-10 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary"
          onClick={() => navigate("/contact")}
        >
          <FaArrowCircleRight size={40} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShippingAndDelivery;
