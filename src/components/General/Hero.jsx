import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { heroData } from "../../constants";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev < heroData.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : heroData.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(activeSlide);
  }, [activeSlide]);

  return (
    <div className="relative h-screen">
      <div className="bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 z-10"></div>
      {heroData.map((i, index) => (
        <div key={index}>
          <img
            src={i?.img}
            alt=""
            className={`h-full w-full object-cover absolute transition-all duration-[1500ms] ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
          {index === activeSlide && (
            <div className="absolute z-20 top-0 w-full h-full flex flex-col items-center justify-center max-md:px-4">
              <Fade left duration={1500} cascade>
                {/* <h1 className="text-white text-3xl lg:text-6xl mb-2">{i?.title}</h1> */}
                <h1 className="text-white text-4xl lg:text-7xl font-bold mb-4">{i?.text}</h1>
              </Fade>

              <div className=" h-[1px] lg:w-[900px] max-lg:w-full bg-white my-10">

              </div>
              <Fade left duration={300} cascade>

              <p className="text-gray-200 px-4 lg:max-w-[700px]">{i?.subtext}</p>
              </Fade>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Hero;
