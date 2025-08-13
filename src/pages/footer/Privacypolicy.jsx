// src/pages/PrivacyPolicy.jsx
import React from "react";
import Footer from "../../components/General/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 bg-white">
      <main className="flex-grow px-4 pt-40 pb-16 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="mb-10 text-2xl font-extrabold text-center text-green-900 sm:text-3xl">
            Privacy Policy
          </h1>

          <section className="mb-8">
            <p className="text-sm leading-relaxed">
              At <strong>Tamicity</strong>, we take your privacy seriously. This Privacy Policy outlines how we collect,
              use, and protect your personal data when you interact with our services — whether you're visiting
              our website, making inquiries, or subscribing to our newsletter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-secondary sm:text-xl">Information We Collect</h2>
            <p className="text-sm leading-relaxed">
              We collect both personal and non-personal information. Personal information may include your name,
              email address, phone number, and any message you choose to provide. Non-personal data might
              include your browser type, IP address, pages visited, and time spent on the site.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              This information helps us understand how users interact with our site and improve your experience.
              We do not knowingly collect data from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-secondary sm:text-xl">How We Use Your Information</h2>
            <ul className="space-y-1 text-sm leading-relaxed list-disc list-inside">
              <li>To provide and maintain our services.</li>
              <li>To personalize user experience and improve our platform.</li>
              <li>To send newsletters, promotional materials, and service updates.</li>
              <li>To respond to customer service requests and inquiries.</li>
              <li>To analyze trends and monitor usage for security and diagnostics.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-secondary sm:text-xl">Cookies & Tracking</h2>
            <p className="text-sm leading-relaxed">
              We may use cookies and similar tracking technologies to enhance your experience. Cookies are
              small data files stored on your device that help us understand user behavior, save preferences,
              and improve loading speeds. You can modify your browser settings to disable cookies, but doing so
              may affect site functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-secondary sm:text-xl">Your Rights</h2>
            <p className="text-sm leading-relaxed">
              You have the right to access, update, or delete your personal information. You may opt out of
              receiving our emails at any time by clicking the unsubscribe link included in all communications,
              or by emailing us directly at:{" "}
              <a
                href="mailto:tamicityl@gmail.com"
                className="underline text-primary hover:font-semibold"
              >
                tamicityl@gmail.com
              </a>.
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              We will respond to such requests in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-secondary sm:text-xl">Data Security</h2>
            <p className="text-sm leading-relaxed">
              We implement appropriate security measures to safeguard your data. This includes encryption,
              access restrictions, and regular audits. However, no method of transmission over the Internet
              is 100% secure, so we cannot guarantee absolute protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-secondary sm:text-xl">Changes to This Policy</h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy occasionally to reflect changes in our practices, technologies,
              or legal requirements. We encourage you to review it periodically. Continued use of our services
              constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-lg font-semibold text-secondary sm:text-xl">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              For questions, concerns, or requests related to this Privacy Policy or your personal data, please
              reach out to us at:{" "}
              <a
                href="mailto:tamicityl@gmail.com"
                className="underline text-primary hover:font-semibold"
              >
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

export default PrivacyPolicy;
