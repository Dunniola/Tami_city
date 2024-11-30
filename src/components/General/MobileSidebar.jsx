import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

import {
  FaArrowRight,
} from "react-icons/fa";
import { menuItems } from "./MenuItems";

const getName = (url, array) => {
  const menuItem = array.find((item) => item.url === url);
  if (menuItem) {
    console.log(menuItem.name);
    return menuItem.name;
  }
  return "";
};
  
const MobileSidebar = ({ isOpen, handleClose }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  const activeTab = location.pathname;
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-modal-open");
    } else {
      document.body.classList.remove("body-modal-open");
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.classList.remove("body-modal-open");
  }, [activeTab])
  
  return (
    <>
      <div
        className={`bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 overflow-hidden z-[99] ${
          !isOpen && "hidden"
        }`}
        onClick={handleClose}
      ></div>
      <div
        className={
          isOpen
            ? "h-screen fixed top-0 bg-gray-50 w-[74vw] translate-x-[-25px]  shadow-xl  z-[999]  transition-all duration-300 lg:hidden  overflow-y-auto"
            : " -translate-x-96 overflow-hidden h-screen fixed top-0 bg-primary  z-[999]  transition-all duration-300 lg:hidden overflow-y-auto"
        }
      >
        <div className="flex flex-col ">
          <div className="w-[120px] mb-10 mt-10 mx-auto">
            <img
              className="w-full object-cover"
              src="/drivepadi.png"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center flex-col w-full gap-[10px]">
            {menuItems.map((item, index) => (
              <>
                {item.roles.includes(user?.role) ? (
                  <Link
                    key={index}
                    to={item.url}
                    className={`flex items-center justify-start text-gray-700 gap-[15px] p-[10px] ps-[10px] cursor-pointer rounded-md w-[200px] hover:bg-primary hover:bg-opacity-15 ${
                      activeTab.includes(item.url) && "bg-primary bg-opacity-15"
                    }`}
                  >
                    {activeTab.includes(item.url) ? item.activeIcon : item.icon}
                    <p className="self-start text-sm">{item.name}</p>
                  </Link>
                ) : null}
              </>
            ))}
          </div>
        </div>
        {/* <button className="px-[40px] py-[10px] rounded-lg bg-[#ff7043] text-[#fff]">
            Log out <FaArrowRight />
          </button> */}
        <div className="px-10 py-3">
          <button className="dp-button">Logout</button>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
