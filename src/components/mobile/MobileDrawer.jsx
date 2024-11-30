import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { IoChatbubblesOutline, IoWalletOutline } from "react-icons/io5";
import { RiBankFill, RiChatVoiceLine } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import { Link } from "react-router-dom";

const MobileDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Damx Studio</DrawerHeader>
        <DrawerBody>
          <ul>
            <Link to="/">
              <li className="text-gray-700 flex py-2 pl-6 gap-2">
                {/* <FiHome className="text-gray-700" size={24} /> */}
                <p className="pt-1">Home</p>
              </li>
            </Link>
            
            <Link to="/discover">
              <li className="text-gray-700 flex py-2 pl-6 gap-2">
                {/* <RiBankFill className="text-gray-700" size={24} /> */}
                <p className="pt-1">Discover</p>
              </li>
            </Link>

            <Link to="/about">
              <li className="text-gray-700 flex py-2 pl-6 gap-2">
                {/* <IoChatbubblesOutline className="text-gray-700" size={24} /> */}
                <p className="pt-1">About</p>
              </li>
            </Link>

            <Link to="/contact">
              <li className="text-gray-700 flex py-2 pl-6 gap-2">
                {/* <RiChatVoiceLine className="text-gray-700" size={24} /> */}
                <p className="pt-1">Contact</p>
              </li>
            </Link>
            {/* <Link to="/mybusiness/card-deck?activeTab=my_cards">
              <li className="text-gray-700 flex py-2 pl-6 gap-2">
                <FaRegAddressCard className="text-gray-700" size={24} />
                <p className="pt-1">V Cards</p>
              </li>
            </Link>
            <Link to="/dashboard/addresses">
              <li className="text-gray-700 flex py-2 pl-6 gap-2">
                <TbWorldWww className="text-gray-700" size={24} />
                <p className="pt-1">Websites</p>
              </li>
            </Link>
            <Link to="/wallet">
              <li className="text-gray-700 flex py-2 pl-6 gap-2">
                <IoWalletOutline className="text-gray-700" size={24} />
                <p className="pt-1">Wallet</p>
              </li>
            </Link> */}
          </ul>
          {/* <h3 className="uppercase border-y-[0.1px] border-y-black border-opacity-20 text-gray-700 py-4 pl-6 mt-4">
            Extras
          </h3>

          <ul>
            <Link to={`/category/privacy-policy`}>
              <li className="text-gray-700 flex py-2 pl-6 gap-2 active:opacity-70 active:scale-110 transition-all">
                <p className="pt-1">Support</p>
              </li>
            </Link>
            <Link to={`/category/privacy-policy`}>
              <li className="text-gray-700 flex py-2 pl-6 gap-2 active:opacity-70 active:scale-110 transition-all">
                <p className="pt-1">Privacy policy</p>
              </li>
            </Link>
            <Link to={`/category/privacy-policy`}>
              <li className="text-gray-700 flex py-2 pl-6 gap-2 active:opacity-70 active:scale-110 transition-all">
                <p className="pt-1">Terms and Conditions</p>
              </li>
            </Link>
          </ul> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
