// src/components/Footer.js
import React, { useState } from "react";
import axios from "axios";
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import Icon from "/src/assets/icons/tamoi ws.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/newsletter-subscribe",
        {
          email: formData.email,
        }
      );

      console.log("Submitted successfully:", response.data);
      alert("Subscribed successfully!");

      setFormData({ email: "" });
    } catch (error) {
      console.error("Submission error:", error.response || error.message);
      alert("Subscription failed. Please try again.");
    }
  };

  return (
    <footer className="w-full py-8 text-white ">
      <div className="container text-[0.95rem] ">
        {/* Newsletter Section */}

        {/* Footer Main Content */}
        <div className="grid md:grid-cols-4 w-screen  bg-green-950 px-[2rem] py-[5rem] ">
          <div className="mr-8 md:border-r border-r-gray-500">
            <div>
              <img src={Icon} alt="" className="w-[10rem]" />
            </div>

            <div class="contact-info mt-6 py-5 leading-[3rem] ">
              <h2 className="font-bold text-[1.2rem]">Tamicity Headquarters</h2>
              <p>
                <strong>Address:</strong> Km 16 Free Trade zone. Ibeju lekki,
                Lagos, Nigeria.
              </p>
              <p>
                <strong>Tel:</strong> +234 8155781237{" "}
              </p>
              <p>
                <strong>Mobile:</strong> 09092451507
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tamicity@gmail.com"
                target="_blank"
                rel="noopener noreferrer "
                className="hover:underline"
              >
                tamicity@gmail.com
              </a>
            </div>
            <hr className="mt-5 border-t-2 border-gray-300 opacity-15 md:hidden" />
          </div>
          {/* Products Section */}
          <div className="flex-1 md:border-r md:border-r-gray-500 mr-9 ">
            <div className="leading-8 ">
              <h3 className="mb-2 text-xl font-semibold max-md:mt-10">
                Products
              </h3>
              <ul>
                <Link to={"/products/cassava"}>
                  <li className="hover:underline"> Cassava</li>
                </Link>

                <Link to={"/products/cocoa"}>
                  <li className="hover:underline"> Cocoa</li>
                </Link>

                <Link to={"/products/cashew"}>
                  <li className="hover:underline"> Cashew</li>
                </Link>

                <Link to={"/products/coffee"}>
                  <li className="hover:underline"> Coffee</li>
                </Link>
              </ul>
            </div>
            <hr className="mt-5 border-t-2 border-gray-300 opacity-15 md:hidden" />

            {/* Resources Section */}
            <div className="my-20 leading-8 max-md:mt-10 ">
              <h3 className="text-xl font-semibold">Resources</h3>
              <ul>
                {/* <Link to={"/resources/blog"}>
                  <li className="hover:underline">Blogs and Articles</li>
                </Link> */}
                <Link to={"/resources/FAQS"}>
                  <li className="hover:underline"> FAQS</li>
                </Link>
              </ul>
            </div>
          </div>
          <hr className="mt-5 border-t-2 border-gray-300 opacity-15 md:hidden" />

          <div className="flex-1">
            {/* Top Commodities Section */}

            {/* About Us Section */}
            <div className="leading-8 outline-none ">
              <h3 className="mb-2 text-xl font-semibold max-md:mt-10">
                About Us
              </h3>
              <ul>
                <Link to={"/about/our-story"}>
                  <li className="hover:underline"> Our Story</li>
                </Link>

                {/* <Link to={"/about/team"}>
                  <li className="hover:underline"> Our Team</li>
                </Link> */}

                <Link to={"/about"}>
                  <li className="hover:underline"> About</li>
                </Link>

                <Link to={"/contact"}>
                  <li className="hover:underline"> Contact Us</li>
                </Link>

                {/* <li><a href="#partnerships" className="hover:underline ">Partnerships</a></li> */}
              </ul>
            </div>
            <hr className="mt-6 border-t-2 border-gray-300 opacity-15 md:hidden" />
          </div>

          <div className="relative leading-8 border-gray-500 max-md:grid max-md:mt-10 md:pl-5 md:border-l ">
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">Newsletter</h2>
              <p className="mb-6">
                Get TamiCity updates and industry news straight to your inbox.
              </p>
              <div className="grid gap-6 text-start">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ email: e.target.value })}
                  placeholder="name@company.com"
                  className="p-2 font-semibold border-2 border-gray-300 rounded-md text-secondary"
                />

                <button
                  className="px-5 py-1  rounded-md bg-primary text-secondary font-semibold w-[8rem]"
                  onClick={handleSubmit}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 ">
              {/* Social Media Links */}
              <div className="absolute flex gap-10 md:right-0 md:bottom-0 max-md:gap-6">
                <a
                  href="https://www.linkedin.com"
                  className="text-white hover:text-gray-300"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="text-white hover:text-gray-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-white hover:text-gray-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://www.facebook.com"
                  className="text-white hover:text-gray-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://wa.me/2348089535285" // replace with your actual WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>

              <div
                className="fixed flex bg-white rounded-full shadow-lg cursor-pointer bottom-8 right-3 text-secondary"
                onClick={handleScrollUp}
              >
                <AiOutlineArrowUp size={35} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col-reverse justify-between py-3 md:items-center font-semibold bg-white text-secondary px-[2rem]">
        <p className="py-4 text-gray-500">
          &copy; 2024 TamiCity. All rights reserved.
        </p>

        <div className="flex gap-5 md:px-5">
          <Link to="/privacy-policy" className="text-gray-600 hover:underline">
            Privacy
          </Link>
          <Link to="/disclaimer" className="text-gray-600 hover:underline">
            Disclaimer
          </Link>
          <Link to="/terms" className="text-gray-600 hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
