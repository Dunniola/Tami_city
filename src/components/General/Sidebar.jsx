import Header from "./Header";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { FaArrowRight } from "react-icons/fa6";
import { menuItems } from "./MenuItems";
import Topbar from "./Topbar";
import { BiLogOut } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

const getName = (url, array) => {
  const menuItem = array.find((item) => url.includes(item.url));
  if (menuItem) {
    console.log(menuItem.name);
    return menuItem.name;
  }
  return "";
};

const Sidebar = ({ children, nav = true }) => {
  const location = useLocation();
  const activeTab = location.pathname;
  const { user, logout } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
    window.location.href = "/";
  };
  return (
    <>
      {/* <Header /> */}
      {nav ? (
        <section className="w-full">
          <div className="bg-gray-50 h-screen overflow-y-scroll hide-scrollbar border-r w-[240px] fixed top-0 flex flex-col py-[5px] justify-between max-lg:hidden">
            <div className="flex flex-col ">
              <div className="w-[150px] mb-10 mt-10 mx-auto">
                <Link to="/">
                  <img
                    className="w-full object-cover"
                    src="/assets/mboard.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center flex-col w-full gap-[10px]">
                {menuItems.map((item, index) => (
                  <>
                    {item.roles.includes(user?.role) ? (
                      <Link
                        key={index}
                        to={item.url}
                        className={`flex items-center justify-start text-gray-500 gap-[15px] p-[10px] ps-[20px] cursor-pointer hover:bg-primary hover:bg-opacity-15 rounded-md w-[210px] ${
                          activeTab.includes(item.url) &&
                          " text-white bg-primary"
                        }`}
                      >
                        {activeTab.includes(item.url)
                          ? item.activeIcon
                          : item.icon}
                        <p
                          className={`self-start text-sm ${
                            activeTab.includes(item.url) && "text-white"
                          }`}
                        >
                          {item.name}
                        </p>
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
              {/* <button className="flex items-center text-red-500 gap-2 text-sm" onClick={handleSubmit}>Logout <FiLogOut/></button> */}
              <p className="text-gray-400 text-xs font-thin">
                All rights reserved, Copyright Mboard 2024
              </p>
              <div className="flex items-center gap-3">
                <Link className=" underline text-xs font-thin text-gray-400">
                  Privacy policy
                </Link>
                <Link className=" underline text-xs font-thin text-gray-400">
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
          <div className="min-h-screen bg-gray-50 lg:ml-[240px]">
            <Topbar text={getName(activeTab, menuItems)} />
            <div className=" max-md:pt-14">{children}</div>
          </div>
        </section>
      ): <>{children}</>}
    </>
  );
};

export default Sidebar;
