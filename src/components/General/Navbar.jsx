import React from "react";
import MobileNav from "../mobile/MobileNav";
import { Link, useLocation } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { LuShoppingBag } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";
import SearchModal from "../modals/SearchModal";

const Navbar = ({ black }) => {
  const location = useLocation();
  const { pathname } = location;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SearchModal isOpen={isOpen} onClose={onClose} />
      <div
        className={`${
          black ? "bg-black" : "bg-white"
        }  w-full z-20 max-md:hidden`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 py-3 px-10 items-center max-w-screen-xl  mx-auto">
          <Link className="flex items-center" to={"/"}>
            <img src="/damx.png" className="w-[50px]" />
            <p className="text-gray-900 font-semibold text-xl pt-1">
              Damx Studio
            </p>
          </Link>
          <div>
            <ul className="flex justify-between items-center py-2 px-3 text-gray-900 bg-tetiary relative z-50">
              <div className="flex justify-center items-center">
                <Link
                  to={"/"}
                  className={`border-y-4 border-transparent ${
                    pathname === "/" && "border-b-primary"
                  } hover:border-b-primary hover:border-dashed`}
                >
                  <li
                    className={` py-2 rounded-full uppercase font-semibold w-[110px] text-center`}
                  >
                    Home
                  </li>
                </Link>
                
                <Link
                  to={"/discover?date=latest"}
                  className={`border-y-4 border-transparent ${
                    pathname === "/discover" && "border-b-primary"
                  } hover:border-b-primary hover:border-dashed`}
                >
                  <li
                    className={`  py-2 rounded-full uppercase font-semibold w-[110px] text-center`}
                  >
                    Discover
                  </li>
                </Link>
                <Link
                  to={"/about"}
                  className={`border-y-4 border-transparent ${
                    pathname === "/about" && "border-b-primary"
                  } hover:border-b-primary hover:border-dashed`}
                >
                  <li
                    className={`  py-2 rounded-full uppercase font-semibold w-[110px] text-center`}
                  >
                    About
                  </li>
                </Link>
                <Link
                  to={"/contact"}
                  className={`border-y-4 border-transparent ${
                    pathname === "/contact" && "border-b-primary"
                  } hover:border-b-primary hover:border-dashed`}
                >
                  <li
                    className={`  py-2 rounded-full uppercase font-semibold w-[110px] text-center`}
                  >
                    Contact
                  </li>
                </Link>
              </div>

              <div className="flex justify-center items-center">
                <li className=" pr-4 relative cursor-pointer">
                  <BiSearchAlt size={30} onClick={onOpen}/>
                </li>
                {/* <li className="pr-4 relative">
                  <LuShoppingBag size={20} />
                </li>
                <li className="pr-4 relative">
                  <BsPersonFill size={20} />
                </li> */}
              </div>
            </ul>
          </div>
          {/* <div className="flex justify-end">
          <a
            class="inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-gray-700 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
      
          >
            Get Started
          </a>
        </div> */}
        </div>
      </div>
      <MobileNav />
    </>
  );
};

export default Navbar;
