import React from 'react'
import Navbar from '../../components/General/Navbar'
import Footer from '../../components/General/Footer'
import PrivacyComponent from './PrivacyComponent'

const Privacy = () => {
  return (
    <>
    <Navbar/>
    <div className={`bg-tetiary flex justify-center items-center relative`}>
      {/* <img src="/damx-furniture/img3.jpg" className='absolute w-full h-full object-cover' alt="" /> */}
        <div className=" relative z-50 bg-white max-w-screen-xl mx-auto py-10 my-20">
          <h1 className={` text-primary text-center text-3xl mb-4 font-semibold`}>Privacy Policy</h1>

          <p className="lg:px-32 text-[#121212]">
            <div className='tailwindcss-ignore'>
              <PrivacyComponent/>
            </div>
          </p>
        </div>
      </div>
    <Footer/>
    
    </>
    )
}

export default Privacy