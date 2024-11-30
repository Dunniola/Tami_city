import React from "react";

const PillSelect = ({ selected, value, name, onChange, text }) => {
  return (
    <>
      <div
        onClick={() => onChange(name, value)}
        className={`h-[40px] px-5 flex justify-center items-center rounded-full min-w-[150px] cursor-pointer transition-all duration-500 ${
          selected === value
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        {text}
      </div>
    </>
  );
};

export default PillSelect;
