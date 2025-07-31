import React from 'react'
import bgImage from "/src/assets/images/imageBg5.jpg";
import { Link } from 'react-router-dom';
import Footer from '../../components/General/Footer';

function AboutTamicity() {
  return (
    <>
      <div className="container py-10 mx-auto mt-20">
        
        <section className="sm:text-left">
            <div
                    className="relative w-full h-[20rem] px-[2rem]"
                    style={{
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="relative top-[3rem] text-[1rem] text-white">
                      <h1 className="relative top-[8rem] text-[3rem]">About TamiCity</h1>
                    </div>
                  </div>
            
                  {/* Breadcrumb Navigation */}
                  <section className='px-10'>
                  <nav className="my-10 text-secondary">
                    <ol className="flex items-center space-x-2">
                      <li>
                        <Link to="/" className="font-bold text-primary hover:underline">
                          Home
                        </Link>
                      </li>
                      <li>
                        <span className="text-gray-500"> &gt; </span>
                      </li>
                      <li className="font-bold text-gray-700">About</li>
                    </ol>
                  </nav>
          
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            TamiCity is an agro-exportation company dedicated to transforming the agricultural landscape by exporting cassava, coco, cashew  and coffee products. Our mission goes beyond simply providing high-quality products; we are committed to supporting local farmers, enhancing food security, and promoting innovative farming practices across the globe.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            At the heart of our operations is a focus on empowering farmers. We provide them with the training, tools, and resources they need to adopt eco-friendly, efficient, and profitable agricultural techniques. This includes soil health management, water conservation, and responsible pest control. By integrating these practices, we ensure that agriculture in the region remains productive and environmentally responsible. This approach not only contributes to the sustainability of the environment but also enhances the livelihoods of the farmers, who are critical to our supply chain.
          </p>
          {/* <p className="mb-6 text-lg leading-relaxed text-gray-700">
            We also understand that access to technology plays a crucial role in improving farming practices. That’s why we invest in the latest agricultural technology and infrastructure to help farmers increase their productivity and efficiency. From providing modern farming equipment to facilitating access to advanced agricultural techniques, we ensure that local farmers can meet the growing demands of international markets.
          </p> */}
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Our work isn’t just local – it’s global. While we are deeply rooted in Africa, we’ve expanded our reach, connecting the agricultural potential of the continent with international markets. We export high-quality cassava and yam-based products that meet the rigorous standards of global markets. This connection facilitates a positive exchange, enabling African farmers to share their abundant resources with the world while gaining access to international opportunities.
          </p>
          {/* <p className="mb-6 text-lg leading-relaxed text-gray-700">
            We work closely with local farmers to ensure that the benefits of our efforts are felt throughout the entire supply chain. By establishing long-term, mutually beneficial partnerships, we help improve the overall standards of farming and open up new avenues for economic growth. Our goal is to create a sustainable and inclusive agricultural ecosystem where all stakeholders can thrive.
          </p> */}
          {/* <p className="mb-6 text-lg leading-relaxed text-gray-700">
            At TamiCity, we are also deeply committed to creating transparency and trust within the supply chain. We ensure that our customers are not only receiving high-quality products but also contributing to the growth and empowerment of local communities. We strive to make our operations as transparent as possible, building trust with our farmers, suppliers, and customers alike.
          </p> */}
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Our impact extends far beyond the fields where our products are grown. By connecting the agricultural potential of Africa with the global marketplace, we are helping to reshape the future of farming and food security. As we continue to grow, we remain focused on driving positive change, supporting local economies, and delivering nutritious, high-quality food products to people around the world.
          </p>
          </section>
        </section>

        
      </div>
      <Footer/>
    </>
  )
}

export default AboutTamicity;
