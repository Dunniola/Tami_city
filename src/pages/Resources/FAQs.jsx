import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import Footer from '../../components/General/Footer';
import faqImage from "/src/assets/images/faqs.JPG";

// Background image import or URL

 // replace with actual path

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TamiCity?",
      answer: "TamiCity connects farmers, suppliers, and buyers to create a sustainable, transparent, and efficient marketplace for agricultural products."
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order through our contact page by selecting the product or  through our how to order page and follow the process."
    },
    {
      question: "What is your shipping policy?",
      answer: "We offer international shipping  with trusted logistics partners to ensure timely delivery."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer discounts for bulk orders. Please contact our sales team for more information."
    },
    {
      question: "What products do you sell?",
      answer: "We sell a variety of agricultural products such as cassava, cocoa, cashew nuts, and coffee."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email or through our contacts on the website."
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Header with Background */}
      <header
        className="relative w-full h-[30rem] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${faqImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Header content */}
        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-2 text-lg font-medium">Find answers to common questions about our services and products</p>
        </div>
      </header>

      {/* FAQ List */}
      <section className="py-10 bg-gray-100 faq-section">
        <div className="max-w-screen-lg px-4 mx-auto">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="p-4 mb-4 bg-white rounded-md shadow-sm">
                <div
                  className="flex items-center justify-between text-xl font-semibold cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <FaChevronDown />
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="mt-2 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}

export default FAQs;
