import React, { useState, useRef } from "react";
import { FaBell, FaMagnifyingGlass, FaRegBell } from "react-icons/fa6";
import { useAuthContext } from "../../context/AuthContext";
import { roles } from "../../utils/Helpers";
import MobileSidebar from "./MobileSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useClickAway } from "react-use";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Zoom } from "react-reveal";
import { Link } from "react-router-dom";
import { FaCarRear } from "react-icons/fa6";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { MdDashboard, MdOutlineHome } from "react-icons/md";
import { FaRegUser, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";

const Topbar = ({ text }) => {
  const { VITE_FULL_URL, VITE_IMAGE_URL } = import.meta.env;
  const { user, logout } = useAuthContext();
  const [mobileToggle, setMobileToggle] = useState(false);
  const ref = useRef(null);
  const handleOpenMobileToggle = () => setMobileToggle(true);
  const handleCloseMobileToggle = () => setMobileToggle(false);
  const [isMenu, setIsMenu] = useState(false);
  function openMenu() {
    setIsMenu(true);
  };

  useClickAway(ref, () => setIsMenu(false));

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
    window.location.href = "/";
  };

  return (
    <>
      <MobileSidebar
        isOpen={mobileToggle}
        handleClose={handleCloseMobileToggle}
      />
      <div className="justify-between items-center max-md:flex-wrap border-b  py-3 px-5 hidden lg:flex">
        <div>
          <h1 className="text-[20px] font-semibold text-[#020202] capitalize">
            {text}
          </h1>

          <p className="text-xs text-gray-400">TUE, NOV 14, 2024 11:30AM</p>
        </div>
        <div ref={ref} className="flex gap-[15px] items-center max-md:flex-wrap">

          <div className="relative">
            <FaRegBell className="fa-regular fa-bell text-[20px] text-gray-500" />
          </div>
          <button className="flex items-center gap-2" onClick={openMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            {
              user && user?.profile_pic != null ? <img
                src={`${VITE_FULL_URL}/${VITE_IMAGE_URL}/${user.profile_pic}`}
                className="h-[40px] w-[40px] object-cover rounded-full"
                alt=""
              /> :
                <HiOutlineUserCircle className="text-3xl" />
            }
          </button>
          {isMenu && (
            <Zoom top>
              <div className="shadow rounded absolute mx-2 py-4 px-4 space-y-2 end-0 z-10 top-14 right-4 bg-white text-gray-800 w-44">
                <div><Link to="/"><p className="font-normal text-sm inline-flex items-center gap-2"><MdOutlineHome />Home</p></Link></div>
                <div><Link to="/dashboard"><p className="font-normal text-sm inline-flex items-center gap-2"><MdDashboard />Dashboard</p></Link></div>
                <div><Link to="/marketplace"><p className="font-normal text-sm inline-flex items-center gap-2"><AiOutlineShoppingCart />Marketplace</p></Link></div>
                <div><Link to="/advertise"><p className="font-normal text-sm inline-flex items-center gap-2"><RiAdvertisementFill />Create an advert</p></Link></div>
                <div><Link to="/profile"><p className="font-normal text-sm inline-flex items-center gap-2"><FaRegUser />My Profile</p></Link></div>
                <div><Link to="/profile"><p className="font-normal text-sm inline-flex items-center gap-2"><IoIosSettings />Settings</p></Link></div>
                <hr />
                {
                  user ?
                    <div>
                      <button onClick={handleSubmit}><p className="font-normal text-sm">Log out</p></button>
                    </div>
                    :
                    <>
                      <div>
                        <Link to="/login"><p className="font-normal text-sm">Log in</p></Link>
                      </div>
                      <div>
                        <Link to="/register"><p className="font-normal text-sm">Sign up</p></Link>
                      </div>
                    </>
                }
              </div>
            </Zoom>
          )}
          <div className="flex items-center gap-[10px]">
            {/* <div className="w-[40px] h-[40px] bg-[#000] rounded-full">
              <img
                className="w-full rounded-full object-cover"
                src="/assets/profile.jpg"
                alt=""
              />
            </div> */}
            <div className="flex flex-col">
              <h2 className="font-semibold">{user?.name}</h2>
              <p className="font-thin">{roles[user?.role]}</p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 w-full bg-white h-[70px] py-4 border-b-2 z-50">
        <div className="flex items-center justify-between px-3">
          <img
            className="w-[70px]"
            src="/drivepadi.png"
            alt=""
          />

          <div className="flex items-center gap-[14px]">
            <GiHamburgerMenu size={30} onClick={handleOpenMobileToggle} />
            {
              user && user?.profile_pic != null ? <img
                src={`${VITE_FULL_URL}/${VITE_IMAGE_URL}/${user.profile_pic}`}
                className="h-[40px] w-[40px] object-cover rounded-full"
                alt=""
              /> :
                <HiOutlineUserCircle className="text-3xl" />
            }
            {/* <div className="flex flex-col">
                  <h2 className="font-semibold">{user?.name}</h2>
                  <p className="font-thin">{roles[user?.role]}</p>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
