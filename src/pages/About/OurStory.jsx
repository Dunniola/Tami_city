import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/General/Footer";
import { motion } from "framer-motion";
import whoWeAreImg from "/src/assets/images/whoWeAre.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurStory = () => {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-[30rem] bg-cover bg-center bg-no-repeat flex items-center  px-4"
        style={{ backgroundImage: `url(${whoWeAreImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="relative z-10 px-5 text-white lg:px-20 md:px-10 "
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="mb-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Story
          </h1>
          <p className="py-3 mx-auto text-sm font-light sm:text-base md:text-[1.3rem]">
            Advancing global agriculture through innovation, sustainability, and community-centered impact.
          </p>
        </motion.div>
      </div>

      {/* What We Do Section */}
      <motion.div
        className="py-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="px-5 lg:px-20 md:px-10">
          <h2 className="mb-6 text-2xl font-semibold leading-tight text-green-800 sm:text-3xl md:text-4xl">
            Our Mission, Our Impact
          </h2>

          {[
            "Tamicity was founded with a bold vision—to revolutionize agriculture on a global scale. What began as a regional initiative in West Africa has now grown into an international agribusiness impacting communities across continents.",
            "From Nigeria to global markets, we specialize in high-demand crops like cassava, cocoa, cashew, and coffee. We collaborate with farmers and processors worldwide, integrating smart technologies with traditional techniques to improve productivity, enhance product quality, and ensure food security.",
            "Our model is rooted in sustainability and equity. We promote fair trade, empower women and youth in agriculture, and advocate for responsible farming practices that protect the environment and future generations.",
            "Today, our reach spans across Africa, Europe, Asia, and North America—building a global supply chain that's ethical, efficient, and impactful. Every product we deliver carries a promise: quality that meets international standards and a story that reflects human dignity and progress.",
            "At Tamicity, we are not just growing crops—we are cultivating a sustainable future for the world."
          ].map((paragraph, index) => (
            <p key={index} className="mb-5 text-sm leading-7 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.section
        className="py-10 text-center bg-green-50 sm:py-14 md:py-20 lg:px-20 md:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-xl font-bold sm:text-2xl md:text-3xl text-secondary">
          Let’s Grow Together
        </h2>
        <p className="my-4 text-base font-semibold text-gray-700 sm:text-lg md:text-xl">
          Partner with Tamicity to drive agricultural transformation across the globe.
        </p>
        <div
          className="inline-flex items-center gap-2 transition cursor-pointer text-secondary hover:text-green-700"
          onClick={() => navigate("/contact")}
        >
          <FaArrowCircleRight size={28} />
          <span className="text-base font-semibold sm:text-lg md:text-xl">Contact Us</span>
        </div>
      </motion.section>

      <Footer />
    </section>
  );
};

export default OurStory;
