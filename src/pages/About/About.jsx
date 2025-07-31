import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import bgImage from "/src/assets/images/aboutUs.JPG";
import tamiImage from "/src/assets/icons/tamoi ws.png";
import whatWeDoImage from "/src/assets/images/whatWeDo.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowCircleRight, FaBinoculars, FaBullseye } from "react-icons/fa";
import Footer from "../../components/General/Footer";
import ourCrops from "/src/assets/images/coffeeAbout.png";
import howItWorks from "/src/assets/images/howItWorksImage.png";

// Map center coordinates and zoom level

const zoom = 12;
const About = () => {
  const [toggle, setToggle] = useState(false);
  const [fullScreenMap, setFullScreenMap] = useState(false);
  const navigate = useNavigate();

  const coffeeSourcingLocations = [
    {
      lat: 6.5244, // Latitude for Lagos
      lng: 3.3792, // Longitude for Lagos
      name: "Lagos, Nigeria",
      description: "A hub for high-quality agricultural exports.",
    },
    {
      lat: 12.8654,
      lng: -85.2072,
      name: "Nicaragua",
      description:
        "A major producer of organically grown cashew nuts for premium markets.",
    },
  ];
  const toggleView = () => {
    setToggle(!toggle);
    setShowMap(!showMap);
    setFullScreenMap(!fullScreenMap);
  };

  return (
    <div className="min-h-screen mt-10 font-sans ">
      {/* Page Content */}

      <section className="">
        <div
          className="relative w-full h-[35rem] md:h-[40rem] px-6 md:px-12"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative flex flex-col items-center justify-center h-full px-3 text-center text-white max-md:px-4">
            
            <h2 className="mt-6 text-3xl font-bold leading-snug md:max-w-3xl md:text-5xl md:leading-tight">
              Finding sustainable solutions that benefit both our customers and
              farmers across six continents.
            </h2>
            <p className="px-2 mt-4 text-sm md:max-w-3xl md:mt-6 md:text-base md:px-10">
              Through transparent, responsible supply chains, we deliver
              high-quality agricultural products and innovative solutions that
              our customers trust, ensuring sustainability and excellence in
              every step.
            </p>
          </div>
        </div>
      </section>


        <div className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
          {/* Breadcrumb Navigation */}
          <nav className="my-6 text-secondary  font-extrabold text-[1.2rem]">
            About Us
          </nav>

          {/* Introduction Section */}
          <section className="mb-12 ">
            <p className="mb-6 text-2xl font-bold leading-tight tracking-tight text-gray-700 md:text-3xl">
              TamiCity is an agro-exportation company dedicated to transforming the
              agricultural landscape by exporting high-quality cocoa, coffee,
              cassava, and cashew nut products.
            </p>
            <Link to="/about-tamicity">
              <button className="flex items-center gap-3 px-6 py-2 font-bold rounded-lg text-secondary bg-primary">
                <AiOutlineArrowRight size={20} /> Learn More
              </button>
            </Link>
          </section>

          {/* Vision and Mission */}
          <section className="flex flex-col justify-between gap-8 mb-12 md:flex-row">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <FaBinoculars size={30} />
                <h2 className="text-2xl font-extrabold text-gray-800 md:text-3xl">
                  Our Vision
                </h2>
              </div>
              <p className="mt-2 text-lg leading-relaxed text-gray-700">
                "At Tami, we aspire to be the cornerstone of Africa's agribusiness
                innovation, unlocking new opportunities for farmers and
                stakeholders."
              </p>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 text-gray-700">
                <FaBullseye size={24} />
                <h2 className="text-2xl font-extrabold md:text-3xl">Our Mission</h2>
              </div>
              <p className="mt-2 text-lg leading-relaxed text-gray-700">
                "To create a thriving agribusiness ecosystem that empowers local
                farmers, enhances food security, and drives economic growth."
              </p>
            </div>
          </section>

          <h3 className="mb-8 text-2xl font-bold text-gray-600 md:px-12 md:text-3xl">
            Where We Work
          </h3>

          <div className="relative z-0 py-10 ">
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
            <img src={tamiImage} alt="Tamicity Logo" className="p-3 w-[12rem] md:w-[20rem]" />
            <div className="p-3 mt-4 md:mt-10 md:px-12">
              <span className="font-bold text-[0.9rem]">Sales office</span>
              <h2 className="text-[1.3rem] md:text-[2rem] tracking-tight leading-9 font-bold">
                Tamicity Risk Management
              </h2>
              <span className="block mt-1 md:mt-4">Km 16 Free Trade zone. Ibeju lekki, Lagos</span>
              <span className="block mt-1 md:mt-4">Nigeria</span>
              <span className="block mt-1 md:mt-4 max-md:mb-5">tamicity@gmail.com</span>
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
            {coffeeSourcingLocations.map((location, index) => (
              <Marker key={index} position={[location.lat, location.lng]}>
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
                  {coffeeSourcingLocations.map((location, index) => (
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

          <div className="grid gap-8 md:flex ">
            <section
              className="relative z-0 flex-1 w-full bg-center bg-cover group h-[22rem]"
              style={{ backgroundImage: `url(${whatWeDoImage})` }}
            >
              {/* Full background overlay */}
              <div className="absolute inset-0 transition-opacity duration-100 bg-black opacity-0"></div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-0 transition-all duration-150 delay-100 bg-darkGray opacity-40 group-hover:h-full group-hover:-z-10"></div>

              {/* Content that appears after the lines reveal */}
              <div className="relative z-10 flex h-full px-6 py-10 text-white transition-opacity duration-100 delay-300 md:px-12 ">
                <div className="">
                  <h2 className="mb-4 text-5xl font-semibold max-md:text-[2.5rem]">
                    What we do
                  </h2>

                  <div className="flex gap-6 group-hover:opacity-100 opacity-0 absolute bottom-20 right-[5rem]">
                    <Link
                      to="/about/our-story"
                      className="inline-flex items-center text-lg font-medium text-white hover:underline"
                    >
                      Read More
                    </Link>
                    <div className="font-extrabold group-hover:opacity-100">|</div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="relative z-0 flex-1 w-full bg-center bg-cover group h-[22rem]"
              style={{ backgroundImage: `url(${howItWorks})` }}
            >
              {/* Full background overlay */}
              <div className="absolute inset-0 transition-opacity duration-100 bg-black opacity-20"></div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-0 transition-all duration-150 delay-100 bg-darkGray opacity-40 group-hover:h-full group-hover:-z-10"></div>

              {/* Content that appears after the lines reveal */}
              <div className="relative z-10 flex h-full text-white px-[2rem] py-10 transition-opacity duration-100 delay-300">
                <div className="">
                  <h2 className="mb-4 text-5xl font-semibold max-md:text-[2.5rem]">
                    How it works
                  </h2>

                  <div className="flex gap-6 group-hover:opacity-100 opacity-0 absolute bottom-20 right-[5rem]">
                    <Link
                      to="/export-process/how-it-works"
                      className="inline-flex items-center text-lg font-medium text-white hover:underline"
                    >
                      Read More
                    </Link>
                    <div className="font-extrabold group-hover:opacity-100">|</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="z-0 gap-8 mt-10 md:flex ">
            {/* <section
              className="relative z-0 flex-1 w-full bg-center bg-cover group h-[22rem]"
              style={{ backgroundImage: `url(${bgImage})` }}
            > */}
              {/* Full background overlay */}
              {/* <div className="absolute inset-0 transition-opacity duration-100 bg-black opacity-20"></div>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="absolute top-0 left-0 w-full h-0 transition-all duration-150 delay-100 bg-darkGray opacity-40 group-hover:h-full group-hover:-z-10"></div> */}

              {/* Content that appears after the lines reveal */}
              {/* <div className="relative z-10 flex h-full text-white px-[2rem] py-10 transition-opacity duration-100 delay-300 ">
                <div className="">
                  <h2 className="mb-4 text-5xl max-md:text-[2.5rem] font-semibold">
                    Meet Our Team
                  </h2>

                  <div className="flex gap-6 group-hover:opacity-100 opacity-0 absolute bottom-20 right-[5rem]">
                    <Link
                      to="/about/team"
                      className="inline-flex items-center text-lg font-medium text-white hover:underline"
                    >
                      Read More
                    </Link>
                    <div className="font-extrabold group-hover:opacity-100">|</div>
                  </div>
                </div>
              </div> */}
            {/* </section> */}

            <section
              className="relative z-0 flex-1 w-full bg-center bg-cover group max-md:mt-10 h-[22rem]"
              style={{ backgroundImage: `url(${ourCrops})` }}
            >
              {/* Full background overlay */}
              <div className="absolute inset-0 transition-opacity duration-100 bg-black opacity-20"></div>

              <div className="absolute top-0 left-0 w-full h-0 transition-all duration-150 delay-100 bg-darkGray group-hover:h-full opacity-40 group-hover:-z-10"></div>

              {/* Content that appears after the lines reveal */}
              <div className="relative z-10 flex h-full text-white px-[2rem] py-10 transition-opacity duration-100 delay-300 ">
                <div className="">
                  <h2 className="mb-4 text-5xl font-semibold max-md:text-[2.5rem]">
                    Our Crops
                  </h2>

                  <div className="flex gap-6 group-hover:opacity-100 opacity-0 absolute bottom-20 right-[5rem]">
                    <Link
                      to="/products"
                      className="inline-flex items-center text-lg font-medium text-white hover:underline"
                    >
                      Read More
                    </Link>
                    <div className="font-extrabold group-hover:opacity-100">|</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="flex flex-col items-center px-5 py-10 mt-10 text-center bg-green-50">
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
        </div>

          <Footer />
    </div>
  );
};

export default About;
