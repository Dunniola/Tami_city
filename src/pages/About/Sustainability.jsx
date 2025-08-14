import React from 'react'
import sustainabilityBg from "/src/assets/images/sustainabilityPageImage.png";
import { Link } from 'react-router-dom';
import Footer from '../../components/General/Footer';

function Sustainability() {
  return (
  <>
      <div className=''>
         <div
                className="relative w-full h-[30rem]  px-5 lg:px-20 md:px-10"
                style={{
                  backgroundImage: `url(${sustainabilityBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative top-[3rem] text-[1rem] text-white">
                  <h1 className="relative top-[8rem] text-[3rem]">Sustainability</h1>
                </div>
              </div>
        
              {/* Breadcrumb Navigation */}
              
      
      <section className="px-5 mt-10 mb-12 lg:px-20 md:px-10 ">
        <h2 className="mb-4 text-2xl font-semibold text-secondary">
          Sustainability
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          At TamiCity, sustainability is at the heart of everything we do. As a
          company that exports high-quality agricultural products to
          international markets, we recognize our responsibility to not only
          provide exceptional products but to do so in a way that positively
          impacts the environment, society, and the global food system.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We are committed to implementing sustainable practices across every
          aspect of our business – from the way we source and grow our products
          to how we manage our supply chains and engage with local communities.
          Our goal is to create long-term value not just for our customers, but
          for the planet and future generations.
        </p>
        
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We work closely with local farmers to encourage sustainable farming
          methods that promote biodiversity, protect natural resources, and
          improve the health of the land. By providing training and resources,
          we empower farmers to make informed decisions that support sustainable
          agricultural practices and enhance their livelihoods.
        </p>
        
      </section>
      <Footer/>
      </div>
  
  
  </>
  )
}

export default Sustainability