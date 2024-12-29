
import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle email subscription logic here
    console.log('Subscribed with email:', email);
  };

  return (
    <footer className="px-3 py-8 text-white bg-green-950">
      <div className="container mx-auto">
        {/* Grid Layout with responsive column sizes */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">TamiCity</h3>
            <p className="text-sm">Sustainably sourced agricultural products from Africa. Connecting farmers and global markets.</p>
            <p className="text-sm"> Lagos, Nigeria</p>
            <p className="text-sm">Email: <a href="mailto:enquiries@tamicity.com" className="text-blue-400 hover:underline">info@tamicity.com</a></p>
            <p className="text-sm">Tel: +234 8107843355</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/products" className="hover:text-blue-400">Our Products</a></li>
              <li><a href="/export" className="hover:text-blue-400">Export Process</a></li>
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="/faqs" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2 ">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="flex space-x-2 text-[0.9rem">
              <a href="https://twitter.com/tamicity" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
              <a href="https://facebook.com/tamicity" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
              <a href="https://linkedin.com/company/tamicity" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
              <a href="https://youtube.com/c/TamiCity" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">YouTube</a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm">Want to stay updated with the latest from TamiCity? Subscribe to our newsletter!</p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your email"
                className="p-2 border border-gray-300 rounded-md"
                required
              />
              <button type="submit" className="py-2 text-white rounded-md bg-primary hover:bg-blue-600">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 text-sm text-center text-gray-400">
          <p>© {new Date().getFullYear()} TamiCity. All Rights Reserved.</p>
          <p>Site by TamiCity. Created with love & passion.</p>
          <div className="mt-4 space-x-4">
            <a href="/terms-of-use" className="hover:text-blue-400">Terms of Use</a>
            <a href="/cookie-policy" className="hover:text-blue-400">Cookie Policy</a>
            <a href="/ecoom-disclaimer" className="hover:text-blue-400">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
