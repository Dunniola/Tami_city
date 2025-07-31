import React, { useEffect, useState } from "react";
import { useRef } from "react";
import bgImage from "/src/assets/images/imageBg5.jpg";
import cocoa2 from "/src/assets/images/COCOA 2.jpg";
import cocoa3 from "/src/assets/images/COCOA 3.jpg";
import cocoa4 from "/src/assets/images/COFFEE.jpg";
import cocoaBg from "/src/assets/images/cocoaBg.png";
import cocoaBeans from "/src/assets/images/cocoaBeans.png";
import cocoaButter from "/src/assets/images/cocoaButter.png";
import cocoaMass from "/src/assets/images/cocoaMass.png";
import cocoaPowder from "/src/assets/images/cocoaPowder.jpg";
import tamiImage from "/src/assets/icons/tamoi ws.png";
import cocoaCharter from "/src/assets/images/cocoaCharter.png";
import { FaArrowCircleRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Footer from "../../components/General/Footer";
import { useNavigate } from "react-router-dom";

// Cocoa Details Page Component
function Cocoa() {
  const [showMap, setShowMap] = useState(false);
  const [toggle, setToggle] = useState(false);
  const locationsRef = useRef(null);
  const productsRef = useRef(null);
  const charterRef = useRef(null);
  const partnershipsRef = useRef(null);
  const navigate = useNavigate()

  // Cocoa sourcing locations (example)
  const cocoaSourcingLocations = [
    {
      lat: 6.5244,
      lng: 3.3792,
      name: "Lagos, Nigeria",
      description: "Nigeria's largest city and cocoa-producing hub",
    },
  ];

  useEffect(() => {
    console.log("MapContainer Loaded");
  }, []);

  const toggleView = () => {
    setToggle(!toggle);
    setShowMap(!showMap);
    console.log("Toggle State:", toggle);
  };
  const handleNavigation = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans cocoa-page">
      {/* Hero Section */}
      <section>
        <div
          className="relative w-full h-[35rem] px-[2rem]"
          style={{
            backgroundImage: `url(${cocoaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-0"></div>
          <div className="relative text-[1rem] text-white">
            <span className="relative top-[14rem] text-[1.5rem] font-semibold">
              Cocoa
            </span>
            <h1 className="relative top-[14rem] text-[3rem] font-bold">
              Building a smarter future with cocoa.
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
        {/* Hero Section Text */}
        <section className="pt-3">
          <h1 className="mt-5 text-4xl font-bold ">
            A New Era of Cocoa Production
          </h1>
          <p className="mt-4 text-lg">
            At Tamicity, we are reimagining cocoa production by integrating
            cutting-edge technology with sustainable agricultural practices. By
            focusing on innovation, eco-friendly solutions, and fair trade, we
            aim to transform the cocoa industry while empowering farmers and
            protecting the environment. Our efforts are centered around creating
            value that extends from the farm to the global market.
          </p>
        </section>

        {/* Navigation */}
        <div className="font-sans">
          <nav className="sticky md:top-[2.5rem] top-[4rem] z-50 py-4 bg-gray-100 shadow-md mt-5">
            <ul className="flex justify-end gap-8 ">
              <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => handleNavigation(locationsRef)}
              >
                Our Locations
              </li>
              <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => handleNavigation(productsRef)}
              >
                Products and Offerings
              </li>
              <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => handleNavigation(charterRef)}
              >
                Our Smarter Cocoa Charter
              </li>
              {/* <li
                className="cursor-pointer text-primary hover:text-dimGold"
                onClick={() => handleNavigation(partnershipsRef)}
              >
                Partnerships and Accreditations
              </li> */}
            </ul>
          </nav>

          {/* Sections */}
          <section className="my-10">
            <h2 className="text-[3rem] font-bold leading-[2.5rem]">
              Tamicity: Pioneering Sustainable Cocoa Production
            </h2>
            <p className="mt-5 text-[0.9rem]">
              Tamicity is committed to enhancing cocoa production by integrating
              sustainability at every step of the supply chain. We aim to
              deliver top-tier cocoa beans while ensuring that our practices
              support environmental conservation, economic empowerment, and fair
              labor standards. By creating a closed-loop ecosystem where farmers
              are empowered, ecosystems are protected, and consumers enjoy
              quality products, we are setting a new global benchmark for the
              cocoa industry.
            </p>
          </section>

          {/* Locations Section */}
          <div className="relative z-0 ">
            {/* Toggle Section (Content Above) */}
            <section className="relative bg-gray-100">
              <div className="relative top-0 z-20 flex flex-col md:mx-[5rem] md:flex-row md:h-screen  ">
                {/* Toggle & Office Section */}
                <section className=" w-full md:w-1/2 text-white bg-green-900 mt-[4rem] pt-5 px-6 pb-60 max-md:pb-40">
                  <div
                    className="flex items-center gap-3 my-4 md:my-10"
                    onClick={toggleView}
                  >
                    <span>Map</span>
                    <div className="flex items-center bg-white border-2 rounded-xl relative w-[2.5rem] h-5 md:w-[3rem] md:h-6">
                      <div
                        className={`relative w-3 h-3 md:w-4 md:h-4 bg-black inset-0 rounded-full transition-all duration-500 ${
                          toggle ? "left-4 md:left-6" : "left-1"
                        }`}
                      ></div>
                    </div>
                    <span>Office</span>
                  </div>

                  <span className="text-[1rem] md:text-[1.3rem] font-semibold">
                    Our offices
                  </span>
                  <h2 className="text-[1.5rem] md:text-[1.5rem] font-bold tracking-tight leading-[2rem] mt-2">
                    Tamicity Risk Management
                  </h2>
                </section>

                {/* Office Information Section (Only shown if toggle is ON) */}
                {toggle ? (
                  <section className="flex-1">
                    <div className="relative flex flex-col h-screen px-6 text-white transition-all duration-500 bg-green-900 md:px-12 ">
                      <img
                        src={tamiImage}
                        alt="Tamicity Logo"
                        className="p-3 w-[12rem] md:w-[20rem]"
                      />
                      <div className="p-3 mt-4 md:mt-10 md:px-12">
                        <span className="font-bold text-[0.9rem]">
                          Sales office
                        </span>
                        <h2 className="text-[1.3rem] md:text-[2rem] tracking-tight leading-9 font-bold">
                          Tamicity Risk Management
                        </h2>
                        <span className="block mt-1 md:mt-4">Km 16 Free Trade zone. Ibeju lekki, Lagos</span>
                        <span className="block mt-1 md:mt-4">Nigeria</span>
                        <span className="block mt-1 md:mt-4 max-md:mb-5">
                          tamicity@gmail.com
                        </span>
                      </div>
                    </div>
                  </section>
                ) : (
                  <div className="block w-full md:hidden">
                    <MapContainer
                      center={[6.5244, 3.3792]}
                      zoom={10}
                      style={{ height: "400px", width: "100%" }}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                      />
                      {cocoaSourcingLocations.map((location, index) => (
                        <Marker
                          key={index}
                          position={[location.lat, location.lng]}
                        >
                          <Popup>
                            <h3>{location.name}</h3>
                            <p>{location.description}</p>
                          </Popup>
                        </Marker>
                      ))}
                    </MapContainer>
                  </div>
                )}
              </div>
            </section>

            {/* ✅ Map for Desktop (Fullscreen when toggle is OFF) */}
            {!toggle && (
              <div className="absolute inset-0 z-0 hidden w-full md:block ">
                <MapContainer
                  center={[6.5244, 3.3792]}
                  zoom={10}
                  style={{ height: "100vh", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                  />
                  {cocoaSourcingLocations.map((location, index) => (
                    <Marker
                      key={index}
                      position={[location.lat, location.lng]}
                      icon={
                        new L.Icon({
                          iconUrl:
                            "https://unpkg.com/leaflet/dist/images/marker-icon.png",
                          iconSize: [32, 32],
                          iconAnchor: [16, 32],
                          popupAnchor: [0, -32],
                        })
                      }
                    >
                      <Popup>
                        <h3>{location.name}</h3>
                        <p>{location.description}</p>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            )}

            {/* ✅ Map as a Separate Block for Mobile (Reduced Height) */}
          </div>

          {/* Products Section */}
          <section ref={productsRef} className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">
              Our Products and Offerings
            </h2>
            <p className="text-gray-700">
              We offer a wide range of cocoa-based products that cater to the
              needs of global chocolate manufacturers, cosmetic companies, and
              food producers. Our products are made from premium cocoa beans
              grown under sustainable farming practices that prioritize quality,
              environmental impact, and social responsibility.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-6">
              <div className="w-full mb-6 md:w-1/2 lg:w-1/3">
                <img
                  src={cocoa4}
                  alt="Cocoa Beans"
                  className="object-cover w-full h-64"
                />
                <h3 className="mt-4 text-lg font-semibold">Cocoa Beans</h3>
                <p>
                  Our premium cocoa beans are ethically sourced from sustainable
                  farms. We guarantee the highest quality cocoa for chocolate
                  production, with traceability from farm to factory.
                </p>
              </div>
              <div className="w-full mb-6 md:w-1/2 lg:w-1/3">
                <img
                  src={cocoaMass}
                  alt="Cocoa Mass"
                  className="object-cover w-full h-64"
                />
                <h3 className="mt-4 text-lg font-semibold">Cocoa Mass</h3>
                <p>
                  Cocoa mass is produced by grinding cocoa beans. It’s essential
                  for chocolate making and is available in different grades to
                  suit your production needs.
                </p>
              </div>
              <div className="w-full mb-6 md:w-1/2 lg:w-1/3 ">
                <img
                  src={cocoaButter}
                  alt="Cocoa Butter"
                  className="object-cover w-full h-64"
                />
                <h3 className="mt-4 text-lg font-semibold">Cocoa Butter</h3>
                <p>
                  Our cocoa butter is naturally extracted from the cocoa bean
                  and is used in chocolate, skincare products, and other
                  cosmetics due to its rich, smooth texture.
                </p>
              </div>
              <div className="w-full mb-6 md:w-1/2 lg:w-1/3">
                <img
                  src={cocoaPowder}
                  alt="Cocoa Powder"
                  className="object-cover w-full h-64"
                />
                <h3 className="mt-4 text-lg font-semibold">Cocoa Powder</h3>
                <p>
                  Our cocoa powder is processed from roasted cocoa beans. It is
                  widely used in the food industry for making chocolate drinks,
                  baked goods, and confectioneries.
                </p>
              </div>
            </div>
          </section>

          {/* Smarter Cocoa Charter */}
          <section className="flex justify-center gap-10 max-md:flex-col">
            <section ref={charterRef} className="relative flex-1 py-12 ">
              <div
                className="absolute inset-0 h-[20rem] bg-center bg-cover"
                style={{
                  backgroundImage: `url(${cocoaCharter})`, // Background image
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 bg-black h-[20rem] opacity-20"></div>
              <div className="relative z-10 px-6 py-12 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold">
                  Our Smarter Cocoa Charter
                </h2>
              </div>
            </section>

            <section className="flex-1 tracking-tight ">
              <h2 className="text-[2rem] font-bold my-3 mt-14">
                Tamicity's Cocoa Charter
              </h2>
              <p className="text-gray-700 text-[0.9rem] tracking-tight ">
                The Smarter Cocoa Charter is Tamicity’s commitment to
                sustainability and ethical practices in cocoa production. It is
                an initiative that covers every aspect of the cocoa journey,
                from farming to packaging. Our goals include:
              </p>
              <ul className="mt-6 space-y-4 text-lg text-gray-700 ">
                <div></div>
                <li className="text-[0.9rem]">
                  <strong className="text-[1.2rem]">
                    Environmental Sustainability:
                  </strong>{" "}
                  <br />
                  We prioritize eco-friendly farming techniques that protect the
                  environment while improving yield.
                </li>
                <li className="text-[0.9rem]">
                  <strong className="text-[1.2rem]">Farmer Empowerment:</strong>{" "}
                  <br />
                  We support farmers by providing access to better farming
                  tools, training in sustainable farming practices, and fair
                  wages.
                </li>
                <li className="text-[0.9rem]">
                  <strong className="text-[1.2rem]">Full Traceability:</strong>{" "}
                  <br /> From farm to consumer, we ensure every step in the
                  cocoa production process is traceable, transparent, and
                  ethical.
                </li>
                <li className="text-[0.9rem]">
                  <strong className="text-[1.2rem]">
                    Community Development:
                  </strong>{" "}
                  <br /> We invest in local communities by building schools,
                  health clinics, and creating economic opportunities for cocoa
                  farming families.
                </li>
              </ul>
            </section>
          </section>
          <section className="flex flex-col items-center px-5 py-10 mt-20 text-center bg-green-50">
            <h2 className="font-bold text-center text-1xl text-secondary semibold ">
              Contact Us
            </h2>
            <p className="mb-8 text-[3rem] leading-[3rem] tracking-tight text-center text-gray-600 font-bold ">
              Get in touch with Tamicity and our specialist teams
            </p>
            <div
              className="flex flex-col items-center w-full gap-3 px-10 mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-secondary"
              onClick={() => navigate("/contact")}
            >
              <FaArrowCircleRight size={40} />
            </div>
          </section>

          {/* Partnerships and Accreditations */}
          {/* <section ref={partnershipsRef} className="my-12">
          <h2 className="mb-4 text-2xl font-bold">Partnerships and Accreditations</h2>
          <p className="text-gray-700">
            At Tamicity, we work closely with industry leaders and organizations to drive innovation and sustainability in cocoa production. Our partnerships include international cocoa organizations, environmental NGOs, and certification bodies that ensure the highest standards of quality, ethical practices, and sustainability. These relationships strengthen our commitment to building a more sustainable and equitable cocoa supply chain.
          </p>
          <div className="flex flex-wrap justify-between gap-6 mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <img src="/src/assets/images/fairtrade_logo.jpg" alt="Fairtrade Certified" className="object-cover w-full h-32" />
              <p>Fairtrade Certified</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <img src="/src/assets/images/rainforest_alliance_logo.jpg" alt="Rainforest Alliance Certified" className="object-cover w-full h-32" />
              <p>Rainforest Alliance Certified</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <img src="/src/assets/images/organic_certified_logo.jpg" alt="Organic Certified" className="object-cover w-full h-32" />
              <p>Organic Certified</p>
            </div>
          </div>
        </section> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cocoa;
