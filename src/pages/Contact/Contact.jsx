import React from 'react'
import Navbar from '../../components/General/Navbar'
import Footer from '../../components/General/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className={`bg-tetiary flex justify-center items-center h-[83vh] max-md:h-[85vh] relative`}>
      {/* <img src="/damx-furniture/img3.jpg" className='absolute w-full h-full object-cover' alt="" /> */}
        <div className="text-center relative z-50 bg-white max-w-screen-md mx-auto py-10">
          <h1 className={` text-primary text-3xl mb-4 font-semibold`}>Get in touch</h1>

          <p className="lg:px-32 text-[#121212]">
            Conversation is at the heart of what we do. Do you have a project in
            mind? or just want to say hello. Reach out to us at:{" "}
            <span className="text-primary text-xl">
              <a href="mailto:hello@damxstudio.com">hello@damxstudio.com</a>
            </span>{" "}
          </p>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Contact