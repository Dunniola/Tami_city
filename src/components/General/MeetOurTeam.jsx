import React from "react";
import { Link } from "react-router-dom";
import bgImage3 from "/src/assets/images/imageBg.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

function MeetOurTeam() {
  return (
    <section className="flex flex-col items-center px-5 py-10 mt-20 text-center bg-green-50">
     <h2 className="font-bold text-center text-1xl text-secondary semibold">
       Reach Out to Us
     </h2>
     <p className="mb-8 text-[3rem] leading-[3rem] tracking-tight text-center text-gray-600 font-bold">
       Connect with Tamicity and our expert teams for assistance
     </p>
     <div className="flex flex-col items-center w-full gap-3 px-10 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary" onClick={() => navigate("/contact")}>
       <FaArrowCircleRight size={40} />
     </div>
   </section>
  );
}

export default MeetOurTeam;
