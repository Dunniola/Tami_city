import React, { useRef, useState } from "react";
import bgImage from "/src/assets/images/imageBg5.jpg";
import cassavaTubers from "/src/assets/images/cassava.png";
import tamiImage from "/src/assets/icons/tamoi ws.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cassavaBg from "/src/assets/images/cassavaBg.png";
import cassavaFlour from "/src/assets/images/cassavaflour.png";
import cassavaCharter from "/src/assets/images/cassavaCharter.png";
import L from "leaflet";
import Footer from "../../components/General/Footer";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cassava() {
  const [showMap, setShowMap] = useState(false);
  const [toggle, setToggle] = useState(false);

  const locationsRef = useRef(null);
  const productsRef = useRef(null);
  const charterRef = useRef(null);
  const partnershipsRef = useRef(null);
  const navigate = useNavigate()

  const cassavaSourcingLocations = [
    {
      lat: 7.3775,
      lng: 3.947,
      name: "Ogun State, Nigeria",
      description:
        "Known for high-yielding cassava varieties grown for local consumption and international export.",
    },
    {
      lat: 12.8654,
      lng: -85.2072,
      name: "Nicaragua",
      description:
        "A leading producer of cassava with a focus on organic cultivation for both domestic and international markets.",
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
    <div className="min-h-screen font-sans cassava-page">
      {/* Hero Section */}
      <section>
        <div
          className="relative w-full h-[35rem] px-[2rem]"
          style={{
            backgroundImage: `url(${cassavaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative text-[1rem] text-white">
            <span className="relative top-[13rem] text-[1.5rem] font-semibold">
              Cassava
            </span>
            <h1 className="relative top-[14rem] md:text-[3rem] font-bold text-[2.5rem]">
              Nurturing Growth, Securing the Future.
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
        {/* Hero Section Text */}
        <section className="pt-3">
          <h1 className="mt-5 text-4xl font-bold">
            Elevating Cassava Production for a Sustainable Future
          </h1>
          <p className="mt-4 text-lg">
            Tamicity is transforming the cassava industry through sustainable
            farming practices and innovative processing technologies. By
            collaborating with local farmers, we’re empowering communities,
            driving food security, and providing high-quality cassava products
            to the global market.
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
              onClick={() => handleNavigation(charterRef)}
            >
              Cassava Charter
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
          <h2 className="text-[3rem] font-bold leading-[2.5rem]">
            Tamicity: Leading the Cassava Production Revolution
          </h2>
          <p className="mt-5 text-[0.9rem]">
            At Tamicity, we are pioneering a new era in cassava production. Our
            commitment to sustainable agriculture and community development has
            made us a trusted leader in the industry. By incorporating
            cutting-edge farming techniques, we ensure that every cassava tuber
            we produce supports long-term environmental and economic goals.
          </p>
        </section>

        {/* Locations Section */}

        <div className="relative z-0">
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
                      <span className="block mt-1 md:mt-4">Km 16 Free Trade zone. Ibeju lekki lagos</span>
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
                    {cassavaSourcingLocations.map((location, index) => (
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
                {cassavaSourcingLocations.map((location, index) => (
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
        <section ref={productsRef} className="mb-12">
          <h2 className="mt-5 text-2xl font-bold">Our Cassava Products</h2>
          <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
            <div>
              <img
                src={cassavaTubers}
                alt="Cassava farm"
                className="object-contain rounded  shadow-lg h-[20rem]"
              />
              <h3 className="mt-4 text-lg font-bold">Fresh Cassava Tubers</h3>
              <p>
                Our fresh cassava tubers are sourced from local farms and
                provide essential raw material for both local consumption and
                export.
              </p>
            </div>
            <div>
              <img
                src={cassavaFlour}
                alt="Processed cassava"
                className=" object-cover  w-full rounded shadow-lg h-[20rem]"
              />
              <h3 className="mt-4 text-lg font-bold">Cassava Flour</h3>
              <p>
                Our high-quality cassava flour is perfect for baking,
                gluten-free diets, and various industrial applications.
              </p>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section
          ref={charterRef}
          className="flex justify-center gap-10 max-md:flex-col"
        >
          <section className="relative flex-1 py-12">
            <div
              className="absolute inset-0 h-[20rem] bg-center bg-cover"
              style={{
                backgroundImage: `url(${cassavaCharter})`, // Replace with your cassava background image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black h-[20rem] opacity-40"></div>
            <div className="relative z-10 px-6 py-12 text-center text-white">
              <h2 className="mb-4 text-4xl font-bold">
                Tamicity Cassava Charter
              </h2>
            </div>
          </section>

          <section className="flex-1 tracking-tight">
            <h2 className="text-[2rem] font-bold my-3 mt-14">
              Our Commitment to Sustainable Cassava Farming
            </h2>
            <p className="text-gray-700 text-[0.9rem] tracking-tight">
              Tamicity’s Cassava Charter is built on the foundation of
              sustainable farming practices. From soil conservation to water
              management, we prioritize the health of the land, ensuring that
              our production methods help sustain the environment for future
              generations.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              We work hand-in-hand with local farmers to promote eco-friendly
              techniques that boost cassava yield while preserving the
              surrounding ecosystem. Our commitment extends beyond farming to
              processing and packaging, ensuring the highest quality of cassava
              products.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              The Cassava Charter empowers our farmers with training,
              technology, and fair trade practices, providing them with the
              tools to succeed and contributing to the overall economic
              development of the communities we serve.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              We believe that ethical practices, sustainable farming, and
              community development are integral to the success of our business.
              Our commitment to these values ensures that every step of the
              cassava production process is socially and environmentally
              responsible.
            </p>
          </section>
        </section>

        {/* Partnerships Section */}
        {/* <section ref={partnershipsRef} className="my-12">
          <h2 className="text-2xl font-bold">Global Partnerships</h2>
          <p>
            We collaborate with international organizations, NGOs, and research
            institutions to promote sustainable cassava farming, improve product
            quality, and increase access to global markets.
          </p>
        </section> */}
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

export default Cassava;
