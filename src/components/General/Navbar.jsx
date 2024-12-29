import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "/src/assets/icons/tamoi ws.png";
import { useDisclosure } from "@chakra-ui/react";
import SearchModal from "../modals/SearchModal";
import { BiSearchAlt } from "react-icons/bi";
import MobileNavbar from "../mobile/MobileNav";

function Navbar({ black }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = location;

  // Effect to animate the dropdown
  useEffect(() => {
    const dropdownElements = document.querySelectorAll(".dropdown-menu");
    dropdownElements.forEach((el) => {
      el.style.transition = "transform 0.3s ease-out";
      el.style.transform = "translateY(-10px)";
    });

    if (activeDropdown) {
      const activeElement = document.getElementById(activeDropdown);
      if (activeElement) {
        activeElement.style.transform = "translateY(0)";
      }
    }
  }, [activeDropdown]);

  const handleSearchClick = () => {
    onOpen(); // Open the search modal
    setActiveDropdown(null); // Close any active dropdowns when the modal is opened
  };

  return (
    <>
      <SearchModal isOpen={isOpen} onClose={onClose} />

      <div className="overflow-x-hidden overflow-y-hidden">
        <header
          className={`max-md:hidden ${isOpen ? "bg-opacity-80" : "opacity-100"} shadow-lg overflow-hidden`}
        >
          <nav className="fixed top-0 left-0 z-10 flex items-center justify-between w-full px-2 bg-white shadow-lg opacity-100">
            <Link to={"/"}>
            <div className="mx-6">
              <img
                src={Icon}
                alt="TamiCity-icon"
                className="w-[7rem] cursor-pointer"
              />
            </div>
            </Link>

            <ul className="flex whitespace-nowrap items-center py-2  font-bold text-center md:text-[0.8rem] gap-2 shadow-lg ">
              {/* HOME */}
              <Link to={"/"} onMouseEnter={() => setActiveDropdown("home")}>
                <li
                  className={` border-y-4 border-transparent w-[90px] ${
                    pathname === "/" ? "border-b-primary" : ""
                  } hover:border-b-primary hover:text-secondary hover:border-dashed group hover:font-bold`}
                >
                  HOME
                  <div
                    id="home"
                    className={`absolute top-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ${
                      pathname === "/" ? "border-b-primary" : ""
                    } dropdown-menu z-10`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div
                      className={`items-center font-normal bg-white w-[10rem] py-1 ${pathname === "/" ? "border-b-primary" : ""} text-center rounded z-1 text-[1rem]`}
                    >
                      Home
                    </div>
                  </div>
                </li>
              </Link>

              {/* ABOUT US */}
              <Link to={"/about"} onMouseEnter={() => setActiveDropdown("about")}>
                <li
                  className={` border-y-4 border-transparent w-[90px] hover:border-b-primary hover:border-dashed group text-secondary hover:font-bold ${
                    pathname === "/about" ||
                    pathname === "/about/our-story" ||
                    pathname === "/about/team" ||
                    pathname === "/about/sustainability"
                      ? "border-b-primary"
                      : ""
                  }`}
                >
                  ABOUT US
                  <div
                    id="about"
                    className="absolute py-2 top-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out dropdown-menu z-10"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="w-[12rem] px-[2rem] py-1 font-normal bg-white rounded-lg text-start text-[1rem]">
                      <Link to={"/about/our-story"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[90px]">
                          Our Story
                        </li>
                      </Link>
                      <Link to={"/about/team"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed ">
                          Meet Our Team
                        </li>
                      </Link>
                      <Link to={"/about/sustainability"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed ">
                          Sustainability
                        </li>
                      </Link>
                    </div>
                  </div>
                </li>
              </Link>

              {/* PRODUCTS */}
              <Link to={"/products"} onMouseEnter={() => setActiveDropdown("products")}>
                <li
                  className={` border-y-4 border-transparent w-[90px] hover:border-b-primary hover:border-dashed group hover:font-bold ${
                    pathname === "/products" ||
                    pathname === "/products/categories" ||
                    pathname === "/products/details" ||
                    pathname === "/products/quote"
                      ? "border-b-primary"
                      : ""
                  }`}
                >
                  PRODUCTS
                  <div
                    id="products"
                    className="absolute py-2 top-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out dropdown-menu text-start z-10"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="items-center px-10 py-1 font-normal bg-white rounded-lg text-[1rem]">
                      <Link to={"/products/categories"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed ">
                          Product Categories
                        </li>
                      </Link>
                      <Link to={"/products/details"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed ">
                          Product Details
                        </li>
                      </Link>
                      <Link to={"/products/quote"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Request a Quote
                        </li>
                      </Link>
                    </div>
                  </div>
                </li>
              </Link>

              {/* EXPORT PROCESS */}
              <Link to={"/export-process"} onMouseEnter={() => setActiveDropdown("export")}>
                <li
                  className={` border-y-4 border-transparent w-[110px] hover:border-b-primary hover:border-dashed group hover:font-bold ${
                    pathname === "/export-process" ||
                    pathname === "/export-process/how-it-works" ||
                    pathname === "/export-process/shipping" ||
                    pathname === "/export-process/documentation"
                      ? "border-b-primary"
                      : ""
                  }`}
                >
                  EXPORT PROCESS
                  <div
                    id="export"
                    className="absolute py-2 top-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out dropdown-menu z-10"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="items-center max-w-lg py-1 bg-white rounded pl-[2rem] pr-[2rem] font-normal text-start text-[1rem]">
                      <Link to={"/export-process/how-it-works"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed w-[150px]">
                          How It Works
                        </li>
                      </Link>
                      <Link to={"/export-process/shipping"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed ">
                          Shipping & Delivery
                        </li>
                      </Link>
                      <Link to={"/export-process/documentation"}>
                        <li className="my-3 border-transparent border-y-4 hover:border-b-primary hover:border-dashed">
                          Export Documentation
                        </li>
                      </Link>
                    </div>
                  </div>
                </li>
              </Link>

              {/* CONTACT */}
              <Link to={"/contact"} onMouseEnter={() => setActiveDropdown("contact")}>
                <li
                  className={` border-y-4 border-transparent w-[90px] hover:border-b-primary hover:border-dashed group hover:font-bold ${
                    pathname === "/contact" || pathname === "/contact"
                      ? "border-b-primary"
                      : ""
                  }`}
                >
                  CONTACT
                  <Link to={"/contact"}>
                    <div
                      id="contact"
                      className="absolute w-[10rem] top-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out dropdown-menu z-10"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="items-center py-1 font-normal text-center bg-white rounded dropdown-menu text-[1rem]">
                        Contact
                      </div>
                    </div>
                  </Link>
                </li>
              </Link>

              {/* RESOURCES */}
              <Link to={"/resources"} onMouseEnter={() => setActiveDropdown("resources")}>
                <li
                  className={` border-y-4 border-transparent w-[90px] hover:border-b-primary hover:border-dashed group hover:font-bold ${
                    pathname === "/resources" ||
                    pathname === "/resources/blog" ||
                    pathname === "/resources/FAQs"
                      ? "border-b-primary"
                      : ""
                  }`}
                >
                  RESOURCES
                  <div
                    id="resources"
                    className="absolute py-2 top-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out dropdown-menu z-10"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="w-[8rem] py-1 font-normal bg-white text-center rounded-lg text-[1rem]">
                      <Link to={"/resources/blog"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed ">
                          Blog and Articles
                        </li>
                      </Link>
                      <Link to={"/resources/FAQs"}>
                        <li className="my-1 border-transparent border-y-4 hover:border-b-primary hover:border-dashed ">
                          FAQs
                        </li>
                      </Link>
                    </div>
                  </div>
                </li>
              </Link>

              {/* SEARCH ICON */}
              <BiSearchAlt
                className="text-xl cursor-pointer"
                onClick={handleSearchClick}
                size={24}
              />
            </ul>
          </nav>
        </header>

        <MobileNavbar />
      </div>
    </>
  );
}

export default Navbar;
