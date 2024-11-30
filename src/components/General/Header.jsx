import { Avatar } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center  border-b border-b-gray-700 justify-between fixed top-0 w-full px-8 py-2">
        <Link to={'/'}>
        <img src="/dey-play.png" alt="" className="w-[50px]"/>
        </Link>

        <div className="flex items-center gap-2">
          <Avatar name="A" size={"sm"} backgroundColor={"red"}/>
          <p className=" text-white font-semibold max-md:text-sm">Anonymous</p>
        </div>
      </div>
    </>
  );
};

export default Header;
