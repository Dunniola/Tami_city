import React, { useState } from "react";
import Footer from "../../components/General/Footer";
import bgImage from "/src/assets/images/expertiseArea.JPG";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import cocoa from "/src/assets/images/cocoaRisk.png";
import cassava from "/src/assets/images/cassava.png"
import cashew from "/src/assets/images/rawCashewNut.png";
import coffee from "/src/assets/images/coffeeRiskManagement.png";
import tamiImage from "/src/assets/icons/tamoi ws.png";
import riskManagementBg from "/src/assets/images/riskManagementBg.png";

import { BiImageAlt } from "react-icons/bi";
import { FaArrowCircleRight, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function RiskManagement() {
  const navigate = useNavigate();

  const [showMap, setShowMap] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleView = () => {
    setToggle(!toggle);
    setShowMap(!showMap);
  };

  const cashewSourcingLocations = [
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

  return (
    <div className="min-h-screen font-sans risk-management-page">
      {/* Hero Section */}
      <section>
        <div
          className="relative w-full h-[30rem] px-[2rem]"
          style={{
            backgroundImage: `url(${riskManagementBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative text-[1rem] text-gray-300">
            {/* <span className="relative top-[8rem] text-[1.5rem] font-semibold">
              Risk Management
            </span> */}
            <h1 className="relative md:top-[5rem] top-[8rem] md:text-[3rem] font-bold text-end md:ml-[35rem] ml-[8rem] text-[2rem]">
              Protecting Our Future Through Strategic Risk Management
            </h1>
          </div>
        </div>
      </section>

      {/* Our Business Section */}
      <section className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
      <section className="mt-12 ">
        <h2 className="text-4xl font-bold">Our Business</h2>
        <p className="mt-6 text-lg">
          Tamicity Risk Management is built on a commitment to safeguard our
          clients' interests by delivering exceptional risk management
          solutions. Our team of experienced hedge advisors collaborates closely
          with farmers, producers, traders, and corporate clients whose
          businesses depend on the fluctuating agricultural markets.
        </p>
      </section>

      {/* Our Offices Section */}
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
                    <span className="block mt-1 md:mt-4">Lagos</span>
                    <span className="block mt-1 md:mt-4">Nigeria</span>
                    <span className="block mt-1 md:mt-4 max-md:mb-5">
                      Info@gmail.com
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
                  {cashewSourcingLocations.map((location, index) => (
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
              {cashewSourcingLocations.map((location, index) => (
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

      {/* Our Areas of Expertise Section */}
      <section className="my-12 ">
        <h2 className="text-4xl font-bold">Our Areas of Expertise</h2>
        <div className="flex mt-8 max-md:grid">
          <div className="md:w-1/2">
            <img src={bgImage} alt="Expertise" className="w-full rounded-md" />
          </div>
          <div className="md:pl-8 md:w-1/2">
            <p className="mt-4 text-[0.9rem] ">
              At Tamicity, we are committed to helping our clients navigate the
              complexities of the agricultural markets with confidence. Our
              areas of expertise span multiple dimensions, including risk
              management for key agricultural commodities such as cocoa,
              cassava, coffee, and cashew. We provide innovative solutions that
              help mitigate financial volatility and safeguard the futures of
              farmers, producers, and traders globally.
            </p>
            <p className="mt-4 text-[0.9rem]">
              Our team of experts brings years of experience to the table,
              providing our clients with data-driven insights that guide
              critical decisions in times of uncertainty. Through our
              comprehensive risk management strategies, we ensure that
              businesses are prepared for unexpected price shifts,
              weather-related disruptions, and other market fluctuations.
            </p>
            <p className="mt-4 text-[0.9rem]">
              We take a sustainable approach to every aspect of our work,
              recognizing the need for responsible practices that benefit both
              our clients and the environment. Our solutions focus on long-term
              success, balancing risk reduction with opportunities for growth
              and innovation in the agricultural sector.
            </p>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="my-12 ">
        <h2 className="text-4xl font-bold">Our Products</h2>
        <div className="grid justify-start w-full grid-cols-1 mt-8 md:grid-cols-2 place-items-center">
          <div className="">
            <img src={cocoa} alt="Cocoa" className="rounded-md w-[450px] h-[300px]"  />
            <div className="ml-6">
              <h3 className=" font-semibold text-[2.5rem]">Cocoa</h3>
            </div>
          </div>
          <div className="">
            <img src={cassava} alt="Cassava" className="rounded-md w-[450px] h-[300px]" />
            <div className="ml-6">
              <h3 className="font-semibold text-[2.5rem]">Cassava</h3>
            </div>
          </div>
          <div className="">
            <img src={coffee} alt="Coffee" className="rounded-md w-[450px] h-[300px]" />
            <div className="ml-6">
              <h3 className="font-semibold text-[2.5rem]">Coffee</h3>
            </div>
          </div>
          <div className="">
            <img src={cashew} alt="Cashew" className="rounded-md w-[450px] h-[300px]" />
            <div className="ml-6">
              <h3 className="font-semibold text-[2.5rem]">Cashew</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="text-center  py-[5rem] flex flex-col  items-center  bg-green-50 ">
        <span className="font-bold text-secondary">Products</span>
        <h2 className="text-[3rem] font-bold text-gray-600 ">Read More about Our Products</h2>
        <div
          className="mt-10 text-sm font-semibold rounded-md cursor-pointer lg:gap-5 text-green-950 hover:text-secondary"
          onClick={() => navigate("/products/")}
        >
          <FaArrowCircleRight size={40} />
        </div>
      </section>
      </section>

      <Footer />
    </div>
  );
}

export default RiskManagement;
