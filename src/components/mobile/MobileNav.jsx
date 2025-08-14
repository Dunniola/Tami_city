import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "/src/assets/icons/tamoi ws.png"; // Make sure to replace with correct path
import { useDisclosure } from "@chakra-ui/react";
import SearchModal from "../modals/SearchModal"; // Ensure the correct path to your SearchModal component
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

  // useEffect with 2000ms delay
  useEffect(() => {
    if (navMenu) {
      const timer = setTimeout(() => {
        console.log("Menu opened for 2 seconds");
        // Add any other logic you want to run after 2 seconds here
      }, 2000);

      // Cleanup function to clear the timeout
      return () => clearTimeout(timer);
    }
  }, [navMenu]);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <>
      <SearchModal isOpen={isOpen} onClose={onClose} />

      <header
        className={`md:hidden ${
          isOpen ? "bg-black bg-opacity-50 z-20" : "bg-black bg-opacity-0"
        } shadow-xl overflow-hidden`}
      >
        <nav
          className={`flex gap-[15rem] px-3 fixed bg-white shadow-lg opacity-100 items-center inset-0 h-[4rem] z-10 ${
            isOpen ? "pointer-events-none" : ""
          }`}
        >
          <div className="flex">
            <Link to={"/"}>
              <div className="w-[8rem]">
                <img
                  src={Icon}
                  alt="TamiCity-icon"
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
                  className="absolute cursor-pointer text-secondary top-[1.3rem] right-4 icon"
                  size={24}
                  onClick={toggleNavMenu} // Open menu
                />
              )}
            </div>
          </div>

          {/* Mobile menu */}
          <ul
            className={`absolute top-[1.5rem] right-0 gap-[1.5rem] whitespace-nowrap px-10 text-[1.2rem] leading-[2rem] mt-10 w-full bg-green-50 shadow-lg min-h-screen z-100 ${
              navMenu ? "block" : "hidden cursor-pointer"
            } transition-all duration-300 ease-in-out transform ${
              navMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* HOME */}
            <Link to={"/"} onClick={() => setNavMenu(false)}>
              <li
                className={`border-y-4 border-transparent w-[80px] hover:border-b-primary mt-10 hover:border-dashed hover:font-bold ${
                  pathname === "/" ? "border-b-primary" : ""
                } transition-all duration-300`}
              >
                Home
              </li>
              <hr className="mt-5" />
            </Link>

            {/* ABOUT US */}
            <div className="flex my-2">
              <div>
                <Link
                  to={"/about"}
                  onClick={(e) => {
                    setNavMenu(false);
                  }}
                >
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[120px] hover:border-b-primary hover:font-bold ${
                      pathname === "/about" ||
                      pathname === "/about/our-story" ||
                      pathname === "/about/team" ||
                      pathname === "/about/sustainability"
                        ? "border-b-primary"
                        : ""
                    } transition-all duration-300`}
                  >
                    About Us
                  </li>
                </Link>

                {activeDropdowns.about && (
                  <div className="px-8 py-1 font-normal transition-all duration-300 ease-in-out">
                    <Link
                      to={"/about/our-story"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[120px]">
                        Our Story
                      </li>
                    </Link>

                    <Link
                      to={"/about/sustainability"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Sustainability
                      </li>
                    </Link>
                    <Link
                      to={"/about/areas-of-focus"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Areas of Focus
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
            <hr className="mt-5" />

            {/* PRODUCTS */}
            <div className="flex items-start my-2">
              <div>
                <Link
                  to={"/products"}
                  onClick={(e) => {
                    setNavMenu(false);
                  }}
                >
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[120px] hover:border-b-primary hover:font-bold ${
                      pathname === "/products" ||
                      pathname === "/products/cocoa" ||
                      pathname === "/products/coffee" ||
                      pathname === "/products/cassava" ||
                      pathname === "/products/cashew" ||
                      pathname === "/products/risk-management" ||
                      pathname === "/products/sustainability"
                        ? "border-b-primary"
                        : ""
                    } transition-all duration-300`}
                  >
                    Products
                  </li>
                </Link>

                {activeDropdowns.products && (
                  <div className="items-center px-8 py-1 font-normal transition-all duration-300 ease-in-out">
                    <Link
                      to={"/products/cocoa"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Cocoa
                      </li>
                    </Link>
                    <Link
                      to={"/products/cassava"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Cassava
                      </li>
                    </Link>
                    <Link
                      to={"/products/coffee"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Coffee
                      </li>
                    </Link>

                    <Link
                      to={"/products/cashew"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Cashew
                      </li>
                    </Link>

                    <Link
                      to={"/products/risk-management"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Risk Management
                      </li>
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="absolute right-5"
                onClick={() => handleDropdownToggle("products")}
              >
                {activeDropdowns.products ? <FaChevronDown /> : <FaChevronUp />}
              </div>
            </div>
            <hr className="mt-5" />

            {/* Export Process */}
            <div className="flex my-1">
              <div>
                <Link
                  to={"/export-process"}
                  onClick={(e) => {
                    setNavMenu(false);
                  }}
                >
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[180px] hover:border-b-primary hover:font-bold ${
                      pathname === "/export-process" ||
                      pathname === "/export-process/how-it-works" ||
                      pathname === "/export-process/shipping" ||
                      pathname === "/export-process/documentation"
                        ? "border-b-primary"
                        : ""
                    } transition-all duration-300`}
                  >
                    Export Process
                  </li>
                </Link>

                {activeDropdowns.export && (
                  <div className="items-center px-8 pr-[4rem] font-normal text-start transition-all duration-300 ease-in-out">
                    <Link
                      to={"/export-process/how-it-works"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[150px]">
                        How It Works
                      </li>
                    </Link>
                    <Link
                      to={"/export-process/shipping"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                        Shipping & Delivery
                      </li>
                    </Link>
                    <Link
                      to={"/export-process/documentation"}
                      onClick={() => setNavMenu(false)}
                    >
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
            <hr className="mt-5" />

            {/* CONTACT */}
            <Link to={"/contact"} onClick={() => setNavMenu(false)}>
              <li
                className={`border-y-4 border-transparent w-[100px] hover:border-b-primary hover:border-dashed hover:font-bold ${
                  pathname === "/contact" ? "border-b-primary" : ""
                } transition-all duration-300`}
              >
                Contact
              </li>
              <hr className="mt-5" />
            </Link>

            {/* RESOURCES */}
            <div className="flex my-1">
              <div>
                <Link
                  to={"/resources"}
                  onClick={(e) => {
                    setNavMenu(false);
                  }}
                >
                  <li
                    className={`border-y-4 hover:border-dashed border-transparent w-[150px] hover:border-b-primary hover:font-bold ${
                      pathname === "/resources" ||
                      pathname === "/resources/blogs" ||
                      pathname === "/resources/FAQs"
                        ? "border-b-primary"
                        : ""
                    } transition-all duration-300`}
                  >
                    Resources
                  </li>
                </Link>

                {activeDropdowns.resources && (
                  <div className="items-center px-8 pr-[4rem] font-normal text-start transition-all duration-300 ease-in-out">
                    {/* <Link to={"/resources/blog"} onClick={() => setNavMenu(false)}>
                      <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[200px]">
                        Blogs and Articles
                      </li>
                    </Link> */}
                    <Link
                      to={"/resources/FAQs"}
                      onClick={() => setNavMenu(false)}
                    >
                      <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[90px]">
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
            <hr className="mt-5" />
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MobileNavbar;
