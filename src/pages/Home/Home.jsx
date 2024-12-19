import React from "react";
import Navbar from "../../components/General/Navbar";
import Hero from "../../components/General/Hero";
import Services from "../../components/General/Services";
import Explore from "../../components/General/Explore";
import Blog from "../../components/General/Blog";
import Faq from "../../components/General/Faq";
import Testimonials from "../../components/General/Testimonials";
import Cta from "../../components/General/Cta";
import Footer from "../../components/General/Footer";
import ProductSection from "../../components/General/ProductSection";
import FeaturedBlogs from "../../components/General/FeaturedBlogs";
import { Navigate } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Navigate to={"/school-info"}/>

    
      {/* <Navigate to={"/dashboard"}/>  */}
      {/* <Navbar /> */}

      {/* <Hero /> */}

      {/* <Services /> */}
      {/* <Explore />
      <FeaturedBlogs/> */}
      {/* <ProductSection/> */}
      {/* <Blog /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Home;
