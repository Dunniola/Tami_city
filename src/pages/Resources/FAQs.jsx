import React, { useState } from 'react';
import {FaChevronDown} from "react-icons/fa"
function FAQs() {
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

  // Function to toggle the active question
  const toggleAnswer = (index) => {
    // Toggle visibility of the clicked FAQ answer
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-8 bg-gray-100 faq-section mt-10">
      <div className="max-w-screen-lg px-4 mx-auto">
        <h2 className="mb-6 text-3xl font-semibold text-center">Frequently Asked Questions</h2>

        {/* Displaying FAQ items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 faq-item">
              {/* FAQ Question */}
              <div
                className="cursor-pointer flex justify-between items-center text-xl font-semibold"
                onClick={() => toggleAnswer(index)} // Toggle the answer on click
              >
                <span>{faq.question}</span>
                {/* Arrow indicator */}
                <span
                  className={`transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                    <FaChevronDown/>
                </span>
              </div>

              {/* FAQ Answer (Only visible if this FAQ is active) */}
              {activeIndex === index && (
                <div className="mt-2 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* "Show More" button */}
        <div className="mt-6 text-center">
          {/* Optionally, add a "Show More" button to toggle more FAQs */}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
