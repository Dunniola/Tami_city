// src/pages/TermsOfService.jsx
import React from "react";
import Footer from "../../components/General/Footer";

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex-grow px-4 pt-40 pb-16 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-10 text-2xl font-extrabold text-center text-green-900 sm:text-3xl">
            Terms of Service
          </h1>

          <section className="mb-8">
            <p className="text-sm leading-relaxed">
              Welcome to <strong>Tamicity</strong>. By accessing our website and using our services, you agree to be bound by the following terms and conditions. If you do not agree with these terms, please do not use our site or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">1. Use of Our Services</h2>
            <p className="text-sm leading-relaxed">
              You agree to use our website and services only for lawful purposes and in accordance with these Terms. Any unauthorized use may result in termination of access and legal action.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">2. Intellectual Property</h2>
            <p className="text-sm leading-relaxed">
              All content, logos, images, text, and designs on this site are the intellectual property of Tamicity unless otherwise stated. You may not copy, distribute, or modify any part without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">3. Product Descriptions</h2>
            <p className="text-sm leading-relaxed">
              We strive to provide accurate information on our products and services, but we do not warrant that descriptions, pricing, or availability are always accurate or up-to-date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">4. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              Tamicity shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our website or services. Use of our platform is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">5. Termination</h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to suspend or terminate access to our services if any terms are violated or for any other reason at our sole discretion, with or without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-2 text-lg font-semibold text-secondary">6. Governing Law</h2>
            <p className="text-sm leading-relaxed">
              These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-secondary">7. Contact Us</h2>
            <p className="text-sm leading-relaxed">
              For any questions regarding these Terms, please contact us at{" "}
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

export default TermsOfService;

