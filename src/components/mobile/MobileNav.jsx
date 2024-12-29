import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "/src/assets/icons/tamoi ws.png";
import {useDisclosure } from "@chakra-ui/react";
import SearchModal from "../modals/SearchModal";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

function MobileNavbar({ black }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const location = useLocation();
  const { pathname } = location;
  const [navMenu, setNavMenu] = useState(false); // Track if the nav menu is open

  // Manage dropdowns independently using an object
  const [activeDropdowns, setActiveDropdowns] = useState({
    about: false,
    products: false,
    export: false,
    contact: false,
    resources: false,
  });

  // Toggle the dropdown state
  const handleDropdownToggle = (dropdown) => {
    setActiveDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  // Handle search modal toggle
  const handleSearchClick = () => {
    onOpen();
    setActiveDropdowns({
      about: false,
      products: false,
      export: false,
      contact: false,
      resources: false,
    });
  };

  // Toggle the navigation menu visibility
  const toggleNavMenu = () => {
    setNavMenu((prevState) => !prevState);
  };

  return (
    <>
      <SearchModal isOpen={isOpen} onClose={onClose} />

      

      <header
        className={`grid md:hidden sm:w-[40rem] max-md:w-[30rem]place-content-center grid-cols-2 ${
          isOpen ? "bg-opacity-80" : "opacity-100"
        } overflow-hidden shadow-lg `}
      >
        <nav
          className={`flex gap-[15rem] px-3 fixed bg-white opacity-100 items-center inset-0 h-[4rem] z-10 ${
            isOpen ? "pointer-events-none" : ""
          }`}
        >
          <div className="flex ">
            <Link to={"/"}>
            <div className="w-[8rem]">
              <img
                src={Icon}
                alt="TamiCity-icon w-0"
                className="cursor-pointer"
              />
            </div>
            </Link>
            <div>
              <BiSearchAlt
                className="absolute top-[1.2rem] text-xl cursor-pointer right-[4rem] text-secondary"
                onClick={handleSearchClick}
                size={30}
              />
            </div>
            <div className="font-light">
              {navMenu ? (
                <AiOutlineClose
                  className="absolute top-[1.4rem] z-20 font-light cursor-pointer text-secondary right-2 icon"
                  size={24}
                  onClick={toggleNavMenu} // Close menu
                />
              ) : (
                <AiOutlineMenu
                  className="absolute cursor-pointer text-secondary  top-[1.3rem] right-4 icon"
                  size={24}
                  onClick={toggleNavMenu} // Open menu
                />
              )}
            </div>
          </div>

          {/* Mobile menu */}
          <ul
            className={`absolute top-[-3rem] right-0 gap-[1.5rem] whitespace-nowrap px-10 py-1 text-secondary text-[1rem] mt-10  w-[20rem] bg-white shadow-lg min-h-screen  z-0 ${
              navMenu ? "block" : "hidden cursor-pointer"
            }`} 
          >
            {/* HOME */}
            <Link to={"/"}>
              <li
                className={`border-y-4 border-transparent w-[50px] hover:border-b-primary mt-20 hover:border-dashed hover:font-bold ${
                  pathname === "/" ? "border-b-primary" : ""
                }`}
              >
                Home
              </li>
            </Link>

            {/* ABOUT US */}
            <Link to={"/about"}>
              <div className="flex my-2 flex-between">
                <div>
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[70px] hover:border-b-primary hover:font-bold ${
                      pathname === "/about" ||
                      pathname === "/about/our-story" ||
                      pathname === "/about/team" ||
                      pathname === "/about/sustainability"
                        ? "border-b-primary"
                        : ""
                    }`}
                  >
                    About Us
                  </li>

                  {activeDropdowns.about && (
                    <div className="px-8 py-1 font-normal">
                      <Link to={"/about/our-story"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[90px]">
                          Our Story
                        </li>
                      </Link>
                      <Link to={"/about/team"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Meet Our Team
                        </li>
                      </Link>
                      <Link to={"/about/sustainability"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Sustainability
                        </li>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="absolute right-5"
                  onClick={() => handleDropdownToggle("about")}
                >
                  {activeDropdowns.about ? <FaChevronDown /> : <FaChevronUp />}
                </div>
              </div>
            </Link>

            {/* PRODUCTS */}
            <Link to={"/products"}>
              <div className="flex items-start my-2">
                <div>
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[70px] hover:border-b-primary hover:font-bold ${
                      pathname === "/products" ||
                      pathname === "/products/categories" ||
                      pathname === "/products/details" ||
                      pathname === "/products/quote"
                        ? "border-b-primary"
                        : ""
                    }`}
                  >
                    Products
                  </li>

                  {activeDropdowns.products && (
                    <div className="items-center px-8 py-1 font-normal">
                      <Link to={"/products/categories"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Product Categories
                        </li>
                      </Link>
                      <Link to={"/products/details"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Product Details
                        </li>
                      </Link>
                      <Link to={"/products/quote"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Request a Quote
                        </li>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="absolute right-5"
                  onClick={() => handleDropdownToggle("products")}
                >
                  {activeDropdowns.products ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronUp />
                  )}
                </div>
              </div>
            </Link>

            {/* EXPORT PROCESS */}
            <Link to={"/export-process"}>
              <div className="flex my-1">
                <div>
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[110px] hover:border-b-primary hover:font-bold ${
                      pathname === "/export-process" ||
                      pathname === "/export-process/how-it-works" ||
                      pathname === "/export-process/shipping" ||
                      pathname === "/export-process/documentation"
                        ? "border-b-primary"
                        : ""
                    }`}
                  >
                    Export Process
                  </li>

                  {activeDropdowns.export && (
                    <div className="items-center px-8 pr-[4rem] font-normal text-start">
                      <Link to={"/export-process/how-it-works"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[100px]">
                          How It Works
                        </li>
                      </Link>
                      <Link to={"/export-process/shipping"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Shipping & Delivery
                        </li>
                      </Link>
                      <Link to={"/export-process/documentation"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Export Documentation
                        </li>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="absolute right-5"
                  onClick={() => handleDropdownToggle("export")}
                >
                  {activeDropdowns.export ? <FaChevronDown /> : <FaChevronUp />}
                </div>
              </div>
            </Link>

            {/* CONTACT */}
            <Link to={"/contact"}>
              <li
                className={`border-y-4 border-transparent w-[60px] hover:border-b-primary hover:border-dashed hover:font-bold ${
                  pathname === "/contact" ? "border-b-primary" : ""
                }`}
              >
                Contact
              </li>
            </Link>

            {/* RESOURCES */}
            <Link to={"/resources"}>
              <div className="flex my-1">
                <div>
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[80px] hover:border-b-primary hover:font-bold ${
                      pathname === "/resources" ||
                      pathname === "/resources/blogs" ||
                      pathname === "/resources/FAQs"
                        ? "border-b-primary"
                        : ""
                    }`}
                  >
                    Resources
                  </li>

                  {activeDropdowns.resources && (
                    <div className="items-center px-8 pr-[4rem] font-normal text-start">
                      <Link to={"/resources/blog"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[100px]">
                          Blogs and Articles
                        </li>
                      </Link>
                      <Link to={"/resources/FAQs"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          FAQs
                        </li>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="absolute right-5"
                  onClick={() => handleDropdownToggle("resources")}
                >
                  {activeDropdowns.resources ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronUp />
                  )}
                </div>
              </div>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MobileNavbar;
