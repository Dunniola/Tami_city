import React, { useState } from 'react';
import { FaArrowCircleRight, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function FAQ() {
  // State to track the index of the active (expanded) question
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TamiCity?",
      answer: "TamiCity connects farmers, suppliers, and buyers to create a sustainable, transparent, and efficient marketplace for agricultural products."
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order through our online platform by selecting the product and following the checkout process."
    },
    {
      question: "What is your shipping policy?",
      answer: "We offer international shipping and work with trusted logistics partners to ensure timely delivery."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer discounts for bulk orders. Please contact our sales team for more information."
    },
    {
      question: "What products do you sell?",
      answer: "We sell a variety of agricultural products such as cassava, cocoa, cashew nuts, and plantain flour."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via email or through our contact form on the website."
    }
  ];

  const navigate = useNavigate();

  // Function to toggle the active question
  const toggleAnswer = (index) => {
    // Toggle visibility of the clicked FAQ answer
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-gray-100 faq-section">
      <div className="max-w-screen-lg mx-auto md:px-[2rem] max-md:px-5">
        <h2 className="mb-6 text-3xl font-semibold text-center">Frequently Asked Questions</h2>

        {/* Displaying the first 3 FAQ items */}
        <div className="faq-list">
          {faqs.slice(0, 3).map((faq, index) => (
            <div key={index} className="mb-4 faq-item">
              {/* FAQ Question */}
              <div
                className="flex items-center justify-between py-3 text-lg font-semibold transition-all border-b border-gray-300 rounded-md cursor-pointer sm:text-xl hover:bg-gray-50"
                onClick={() => toggleAnswer(index)} // Toggle the answer on click
              >
                <span>{faq.question}</span>
                {/* Arrow indicator */}
                <span
                  className={`transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}
                >
                  <FaChevronDown size={20} />
                </span>
              </div>

              {/* FAQ Answer (Only visible if this FAQ is active) */}
              {activeIndex === index && (
                <div className="px-5 pb-3 mt-2 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* "Read More" button to navigate to the full FAQ page */}
        <div className="mt-6 text-center">
          <div
            className="flex items-center justify-center w-full gap-4 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-10 text-secondary"
            onClick={() => navigate("/resources/FAQs")}
          >
            <FaArrowCircleRight size={35} />
            <span className="hover:underline">Click to View All</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
