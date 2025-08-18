// src/pages/Disclaimer.jsx
import React from "react";
import Footer from "../../components/General/Footer";

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex-grow px-4 pt-40 pb-16 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-10 text-2xl font-extrabold text-center text-green-900 sm:text-3xl">
            Disclaimer
          </h1>

          <section className="mb-8">
            <p className="text-sm leading-relaxed">
              The information provided on this website is for general informational purposes only. All content on Tamicity's platform is provided in good faith, but we make no representations or warranties regarding the accuracy, completeness, or reliability of any content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">No Professional Advice</h2>
            <p className="text-sm leading-relaxed">
              Nothing on this site constitutes professional advice — whether agricultural, financial, legal, or otherwise. Please consult with the appropriate professional for specific concerns or decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">External Links</h2>
            <p className="text-sm leading-relaxed">
              Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy or reliability of any information on these third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              Tamicity will not be held liable for any loss or damage resulting from the use of our website or reliance on any information provided. All actions taken based on our content are at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about this disclaimer, please contact us at{" "}
              <a href="mailto:tamicityl@gmail.com" className="underline text-primary">
                tamicityl@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;
