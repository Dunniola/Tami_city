import { Spinner } from "@chakra-ui/react";
import React from "react";

const Button = ({ isLoading, text, customClass, onClick, icon, type }) => {
  return (
    <>
      <button
        className={
          type === "primary"
          ? "py-2 h-[40px] px-2 w-full flex justify-center items-center rounded bg-primary border border-primary"
          : "py-2 h-[40px] px-2 w-full flex justify-center items-center rounded bg-white border border-primary"
        }
        onClick={!isLoading && onClick ? onClick : null}
      >
        {isLoading ? (
          <Spinner size="sm" className="text-white" />
        ) : (
          <span className={
            type === "primary"
            ? "text-white text-sm flex items-center gap-2"
            : "text-primary text-sm flex items-center gap-2"
          }>{text} {icon}</span>
        )}
      </button>
    </>
  );
};

export default Button;
