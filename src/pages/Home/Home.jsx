import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductSection from "../../components/General/ProductSection";
import AreaFocus from "../../components/General/AreaFocus";
import { FaArrowCircleRight } from "react-icons/fa";
import HeroSection from "../../components/General/HeroSection";
import WhatWeDo from "../../components/General/WhatWeDo";
import Blog from "../../components/General/Blog";
import Footer from "../../components/General/Footer";
import FAQ from "../../components/General/FAQ";

// Reusable Section Card Component for Focus Areas and Products

const Home = () => {
 

  return (
    <div className="grid min-h-screen text-[1rem] overflow-x-hidden">
    
      <HeroSection/>
       <AreaFocus/>
    
      <ProductSection/>
      <WhatWeDo/>
      <Blog/>
      <FAQ/>
      <Footer/>
      </div>
  
   
  );
};

export default Home;
