import { Spinner } from "@chakra-ui/react";
import React from "react";
const Loading = () => {
  return (
    <>
    <div className="fixed top-0 left-0 bottom-0 right-0 z-[9999] h-[100vh] w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100 flex justify-center items-center">
    <Spinner className="text-primary" size={"xl"} thickness="4px" />
    </div>
    </>
  );
};

export default Loading;
