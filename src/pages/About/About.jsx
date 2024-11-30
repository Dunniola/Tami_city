import React from 'react'
import Navbar from '../../components/General/Navbar'
import Footer from '../../components/General/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className={`bg-tetiary flex justify-center items-center h-[83vh] max-md:h-[85vh] relative`}>
      {/* <img src="/damx-furniture/img3.jpg" className='absolute w-full h-full object-cover' alt="" /> */}
        <div className="text-center relative z-50 bg-white max-w-screen-md mx-auto py-10">
          <h1 className={` text-primary text-3xl mb-4 font-semibold`}>About Us</h1>

          <p className="lg:px-32 text-[#121212]">
          We are a creative studio focused on showcasing physical interior designs products from brands that we have come across.
           
          </p>
        </div>
      </div>
    <Footer/>
    </>
    )
}

export default About