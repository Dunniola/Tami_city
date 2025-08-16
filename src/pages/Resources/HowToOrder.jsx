import React from "react";
import Footer from "../../components/General/Footer";
import orderImage from "/src/assets/images/placeOrderImg.jpg"; // add your own image

function HowToOrder() {
  const steps = [
    {
      title: "Step 1: Browse Products",
      description:
        "Go to our Contact page and view the list of agricultural products such as cassava, cocoa, cashew nuts, and coffee.",
    },
    {
      title: "Step 2: Select Your Product",
      description:
        "Click on the product you want to purchase.",
    },
    {
      title: "Step 3: Fill the Order Form",
      description:
        "On the contact form, provide your name, email, phone number, and what you are interested in.",
    },
    {
      title: "Step 4: Submit Your Request",
      description:
        "Once you submit the form, our team will receive your request immediately and reach out to you.",
    },
    {
      title: "Step 5: Confirm Payment & Shipping",
      description:
        "Our sales representative will contact you to confirm your order, discuss payment options, and arrange delivery.",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <header
        className="relative w-full h-[25rem] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${orderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold">How to Place an Order</h1>
          <p className="mt-2 text-lg font-medium">
            A step-by-step guide to purchasing from TamiCity
          </p>
        </div>
      </header>

      {/* Steps Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-screen-lg mx-auto px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 mb-6 bg-white rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-green-700">
                {step.title}
              </h2>
              <p className="mt-2 text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HowToOrder;
