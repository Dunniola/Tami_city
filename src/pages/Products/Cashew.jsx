import React, { useRef, useState } from "react";
import bgImage from "/src/assets/images/imageBg5.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Footer from "../../components/General/Footer";
import cashewBg from "/src/assets/images/cashewBg.png";
import cashewRaw from "/src/assets/images/rawCashew.png";
import cashewKernel from "/src/assets/images/rawCashewNut.png";
import cashewCharter from "/src/assets/images/cashewCharter.png";
import tamiImage from "/src/assets/icons/tamoi ws.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cashew() {
  const [showMap, setShowMap] = useState(false);
  const [toggle, setToggle] = useState(false);

  const locationsRef = useRef(null);
  const productsRef = useRef(null);
  const charterRef = useRef(null);
  const partnershipsRef = useRef(null);
  const navigate = useNavigate()
  const cashewSourcingLocations = [
    {
      lat: 7.3775,
      lng: 3.947,
      name: "Ogun State, Nigeria",
      description:
        "Renowned for high-quality raw cashew nuts exported globally.",
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
  };

  const handleNavigation = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen font-sans cashew-page">
      {/* Hero Section */}
      <section>
        <div
          className="relative w-full h-[35rem] px-[2rem]"
          style={{
            backgroundImage: `url(${cashewBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative text-[1rem] text-white">
            <span className="relative top-[12rem] text-[1.5rem] font-semibold ">
              Cashew
            </span>
            <h1 className="relative top-[13rem] max-md:text-[2.5rem] text-[3rem] font-bold">
              Cultivating Quality, Naturally.
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
        {/* Hero Section Text */}
        <section className="pt-3">
          <h1 className="mt-5 text-4xl font-bold">
            Elevating Cashew Production Sustainably
          </h1>
          <p className="mt-4 text-lg">
            At Tamicity, we are redefining the cashew supply chain with a
            commitment to quality and sustainability. From the farms where our
            cashews are grown to the final product, we focus on ethical
            practices, innovative processing, and delivering superior cashew
            products to our global partners.
          </p>
        </section>

        {/* Navigation */}
        <nav className="sticky z-50 py-4 bg-gray-100 shadow-md md:top-[2.5rem] top-[4rem] mt-5 ">
          <ul className="flex justify-end gap-8">
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
              onClick={() => handleNavigation(sustainabilityRef)}
            >
              Cashew Charter
            </li>
            {/* <li
              className="text-green-600 cursor-pointer hover:text-green-800"
              onClick={() => handleNavigation(partnershipsRef)}
            >
              Partnerships
            </li> */}
          </ul>
        </nav>

        {/* Sections */}
        <section className="my-10">
          <h2 className="text-[3rem] font-bold leading-[2.5rem] mt-5">
            Tamicity: The Sustainable Cashew Revolution
          </h2>
          <p className="mt-5 text-[0.9rem]">
            Tamicity focuses on producing top-quality cashew nuts through
            sustainable farming practices and innovative processing methods. We
            work closely with local farmers across key regions, promoting
            eco-friendly cultivation and empowering communities to thrive.
          </p>
        </section>
        {/* location section */}

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
                    {cashewSourcingLocations.map((location, index) => (
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

        {/* Products Section */}
        <section ref={productsRef} className="mt-5 mb-12">
          <h2 className="text-2xl font-bold">Our Cashew Products</h2>
          <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
            <div>
              <img
                src={cashewRaw}
                alt="Cashew farm"
                className="rounded shadow-lg h-[20rem]"
              />
              <h3 className="mt-4 text-lg font-bold">Raw Cashew Nuts</h3>
              <p>
                High-quality, naturally grown cashew nuts perfect for export and
                industrial processing.
              </p>
            </div>
            <div>
              <img
                src={cashewKernel}
                alt="Cashew nuts"
                className="rounded shadow-lg h-[20rem]"
              />
              <h3 className="mt-4 text-lg font-bold">
                Processed Cashew Kernels
              </h3>
              <p>
                Handpicked, roasted, and packed for premium snacking or use in
                culinary applications.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section
          ref={charterRef}
          className="flex flex-col justify-center px-5 lg:px-20 md:px-10"
        >
          <section className="relative flex-1 py-12">
            <div
              className="absolute inset-0 h-[20rem] bg-center bg-cover"
              style={{
                backgroundImage: `url(${cashewCharter})`, // Replace with your cashew background image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black h-[20rem] opacity-20"></div>
            <div className="relative z-10 px-6 py-12 text-center text-white">
              <h2 className="mb-4 text-4xl font-bold">
                Our Smarter Cashew Charter
              </h2>
            </div>
          </section>

          <section className="flex-1 mt-20 tracking-tight">
            <h2 className="text-[2rem] font-bold my-3 ">
              Tamicity's Cashew Charter
            </h2>
            <p className="text-gray-700 text-[0.9rem] tracking-tight">
              The Smarter Cashew Charter by Tamicity is a testament to our
              unwavering commitment to sustainability, ethical farming, and
              innovation. From seed to harvest, we strive to ensure every step
              in cashew production creates positive impacts for farmers,
              consumers, and the environment.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              Our cashew journey begins with sustainable farming practices that
              protect the land and minimize environmental impact. We work with
              farmers to adopt eco-friendly techniques that preserve soil
              fertility, reduce water usage, and promote biodiversity within
              cashew orchards.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              At Tamicity, farmer empowerment is at the heart of our Cashew
              Charter. We provide rural farming communities with access to
              advanced tools, training programs, and fair market opportunities.
              This ensures that cashew farmers receive a fair share of the value
              chain, improving their livelihoods while boosting productivity.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              We are committed to ensuring quality and traceability at every
              stage of production. From farm to table, our supply chain is
              designed to uphold transparency and ethical standards, delivering
              premium-quality cashews that consumers can trust.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              Additionally, Tamicity invests in community development projects,
              including education and healthcare initiatives, to uplift the
              lives of cashew-growing families. By fostering strong communities,
              we ensure a brighter and more sustainable future for all.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              Our Smarter Cashew Charter represents a bold vision for the cashew
              industry—one rooted in sustainability, fairness, and excellence.
              With every nut you enjoy, you’re supporting a better world for
              cashew farmers and the environment.
            </p>
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
      </section>
      <Footer />
    </div>
  );
}

export default Cashew;
