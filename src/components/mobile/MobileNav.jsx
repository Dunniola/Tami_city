import React from "react";
import Fade from "react-reveal/Fade";
// import BosskardImg from "../../assets/bosskard.png";
import { useAuthContext } from "../../context/AuthContext";
import { AiOutlineBell } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { Avatar, useDisclosure } from "@chakra-ui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";
import { LuMenu } from "react-icons/lu";
const MobileNav = () => {
  const { user } = useAuthContext();
  const { VITE_FULL_URL, VITE_IMAGE_URL } = import.meta.env;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="h-[80px] py-3 px-4 flex items-center justify-between  fixed z-50 w-full bg-white lg:hidden">
        <Link to={"/"}>
          {/* <img src={BosskardImg} alt="" className=""/> */}
          <p className="font-semibold text-lg ">Damx Studio</p>
        </Link>

        <div className="flex items-center  gap-4">
          <LuMenu size={30} onClick={onOpen}/>
        </div>
      </div>

      <MobileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default MobileNav;
