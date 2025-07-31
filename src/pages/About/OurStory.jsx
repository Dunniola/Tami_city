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
    <section className="font-sans bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <div
        className="relative w-full h-[18rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${whoWeAreImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Our Story
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-light">
            Advancing global agriculture through innovation, sustainability, and community-centered impact.
          </p>
        </motion.div>
      </div>

      {/* What We Do Section */}
      <motion.div
        className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-12 md:py-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-tight text-green-800">
            Our Mission, Our Impact
          </h2>

          {[
            "Tamicity was founded with a bold vision—to revolutionize agriculture on a global scale. What began as a regional initiative in West Africa has now grown into an international agribusiness impacting communities across continents.",
            "From Nigeria to global markets, we specialize in high-demand crops like cassava, cocoa, cashew, and coffee. We collaborate with farmers and processors worldwide, integrating smart technologies with traditional techniques to improve productivity, enhance product quality, and ensure food security.",
            "Our model is rooted in sustainability and equity. We promote fair trade, empower women and youth in agriculture, and advocate for responsible farming practices that protect the environment and future generations.",
            "Today, our reach spans across Africa, Europe, Asia, and North America—building a global supply chain that's ethical, efficient, and impactful. Every product we deliver carries a promise: quality that meets international standards and a story that reflects human dignity and progress.",
            "At Tamicity, we are not just growing crops—we are cultivating a sustainable future for the world."
          ].map((paragraph, index) => (
            <p key={index} className="mb-5 text-sm sm:text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.section
        className="bg-green-50 text-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">
          Let’s Grow Together
        </h2>
        <p className="my-4 text-base sm:text-lg md:text-xl font-semibold text-gray-700">
          Partner with Tamicity to drive agricultural transformation across the globe.
        </p>
        <div
          className="inline-flex items-center gap-2 text-secondary hover:text-green-700 cursor-pointer transition"
          onClick={() => navigate("/contact")}
        >
          <FaArrowCircleRight size={28} />
          <span className="text-base sm:text-lg md:text-xl font-semibold">Contact Us</span>
        </div>
      </motion.section>

      <Footer />
    </section>
  );
};

export default OurStory;
