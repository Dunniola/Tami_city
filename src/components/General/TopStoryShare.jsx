
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import Share from "../../assets/blogImgs/share1.svg";
import ShareModal from "../modals/ShareModal";
import { LuShare } from "react-icons/lu";

const TopStoryShare = ({ slug }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <ShareModal slug={slug} isOpen={isOpen} onClose={onClose}/>
    <p
      className={` font-extrabold text-lg py-2 text-primary flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300`}
      onClick={onOpen}
    >
      {/* <img src={Share} alt="" className=" h-[20px] w-[20px]" /> */}
      <LuShare size={20}/>
      Share
    </p>
    </>
    
  );
};

export default TopStoryShare;
