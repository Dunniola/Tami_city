import React, { useRef, useState } from "react";
import bgImage from "/src/assets/images/imageBg5.jpg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Footer from "../../components/General/Footer";
import coffeeBg from "/src/assets/images/coffeeBg.png";
import coffeeBean from "/src/assets/images/wholeCoffeeBean.png";
import coffeeSmarter from "/src/assets/images/coffeeSmarter.png";
import instantCoffee from "/src/assets/images/instantCoffee.png";
import tamiImage from "/src/assets/icons/tamoi ws.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Coffee Details Page Component
function Coffee() {
  const [showMap, setShowMap] = useState(false);
  const [toggle, setToggle] = useState(false);

  const locationsRef = useRef(null);
  const productsRef = useRef(null);
  const charterRef = useRef(null);
  const partnershipsRef = useRef(null);
  const navigate = useNavigate()
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

  const handleNavigation = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleView = () => {
    setToggle(!toggle);
    setShowMap(!showMap);
  };

  return (
    <div className="min-h-screen font-sans coffee-page">
      {/* Hero Section */}
      <section>
        <div
          className="relative w-full h-[35rem] md:px-20 max-md:px-5"
          style={{
            backgroundImage: `url(${coffeeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative text-[1rem] text-white">
            <span className="relative top-[12rem] text-[1.5rem] font-semibold">
              Coffee
            </span>
            <h1 className="relative top-[13rem] text-[3rem] font-bold max-md:text-[2.5rem]">
              Redefining Coffee Excellence, the Sustainable Way.
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center px-5 lg:px-20 md:px-10">
        {/* Hero Section Text */}
        <section className="pt-3">
          <h1 className="mt-5 text-4xl font-bold">
            A Sustainable Approach to Coffee
          </h1>
          <p className="mt-4 text-lg">
            At Tamicity, we are transforming coffee production with a focus on
            quality, sustainability, and innovation. From bean to brew, our
            mission is to deliver premium coffee that delights taste buds while
            uplifting farming communities and preserving our planet. With
            state-of-the-art techniques and eco-friendly practices, we are
            setting a new standard for coffee production globally.
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
              Our Coffee Charter
            </li>
            {/* <li
              className="text-green-600 cursor-pointer hover:text-green-800"
              onClick={() => handleNavigation(partnershipsRef)}
            >
              Partnerships and Accreditations
            </li> */}
          </ul>
        </nav>

        {/* Sections */}
        <section className="my-10">
          <h2 className="text-[3rem] font-bold leading-[2.5rem]">
            Tamicity: Brewing a Sustainable Coffee Future
          </h2>
          <p className="mt-5 text-[0.9rem]">
            Tamicity takes pride in producing coffee that goes beyond taste.
            From partnering with local farmers to using sustainable farming
            techniques, our coffee stands out in flavor and ethos. Our farms,
            spread across Africa, South America, and Asia, ensure a diverse
            selection of premium coffee beans that cater to the global market’s
            taste for excellence.
          </p>
        </section>

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
                    {coffeeSourcingLocations.map((location, index) => (
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

        {/* Products Section */}
        <section ref={productsRef} className="mb-12">
          <h2 className="mt-5 text-2xl font-bold">Our Coffee Products</h2>
          <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2">
            <div>
              <img
                src={instantCoffee}
                alt="Coffee farm"
                className="rounded shadow-lg  h-[18rem]"
              />
              <h3 className="mt-4 text-lg font-bold "> Instant Coffee</h3>
              <p>
                {" "}
                Quick and convenient, our Instant Coffee delivers a rich,
                full-bodied flavor in just seconds. Made from carefully brewed
                and dried coffee, it offers a smooth, well-balanced taste with
                every cup.{" "}
              </p>
            </div>
            <div>
              <img
                src={coffeeBean}
                alt="Coffee beans"
                className="rounded shadow-lg h-[18rem]"
              />
              <h3 className="mt-4 text-lg font-bold">Whole Coffee Bean</h3>
              <p>
                Rich and aromatic, our Coffee Beans offer an unparalleled
                brewing experience. Carefully selected and expertly roasted,
                they deliver a full-bodied flavor and vibrant aroma that coffee
                enthusiasts will love. Grind fresh for every cup and savor the
                well-rounded taste in every sip.
              </p>
            </div>
          </div>
        </section>

        {/* Smarter Coffee Charter */}
        <section className="flex justify-center gap-10 max-md:flex-col">
          <section ref={charterRef} className="relative flex-1 py-12">
            <div
              className="absolute inset-0 h-[20rem] bg-center bg-cover"
              style={{
                backgroundImage: `url(${coffeeSmarter})`, // Replace with your coffee background image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black h-[20rem] opacity-20"></div>
            <div className="relative z-10 px-6 py-12 text-white text-end">
              <h2 className="mb-4 text-4xl font-bold">
                Our Smarter Coffee Charter
              </h2>
            </div>
          </section>

          <section className="flex-1 tracking-tight mt-14">
            <h2 className="text-[2rem] font-bold my-3">
              Tamicity's Coffee Charter
            </h2>
            <p className="text-gray-700 text-[0.9rem] tracking-tight">
              Tamicity’s Smarter Coffee Charter is founded on three core
              principles: sustainability, quality, and innovation. With a
              dedication to eco-friendly farming, ethical practices, and
              community support, we strive to transform the coffee industry
              while delivering exceptional coffee to our customers.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              Our commitment begins at the source, working directly with farmers
              to implement sustainable practices that preserve the environment
              and improve yield. We focus on reducing the carbon footprint of
              coffee production while ensuring soil health and biodiversity are
              maintained for future generations.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              At Tamicity, we believe in the power of collaboration. That’s why
              we invest in farming communities, providing access to training,
              modern agricultural tools, and fair wages. Our initiatives are
              designed to empower farmers, ensuring they thrive while producing
              the highest-quality coffee beans.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              Quality is at the heart of our Coffee Charter. From harvest to
              packaging, we implement rigorous quality control measures,
              ensuring each bean meets our premium standards. Our innovative
              processing techniques and transparent supply chain guarantee a
              product that is both ethically sourced and of the highest quality.
            </p>
            <p className="mt-4 text-gray-700 text-[0.9rem] tracking-tight">
              By choosing Tamicity, you’re supporting a smarter coffee
              future—one that values people, planet, and premium coffee.
              Together, we can create a coffee industry that benefits everyone,
              from farmers to coffee lovers across the globe.
            </p>
          </section>
        </section>

        {/* Partnerships and Accreditations */}
        {/* <section ref={partnershipsRef} className="my-12">
          <h2 className="text-2xl font-bold">Partnerships and Accreditations</h2>
          <p>
            Tamicity partners with globally recognized organizations to ensure
            our coffee meets the highest standards of quality, sustainability,
            and ethical practices.
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

export default Coffee;
