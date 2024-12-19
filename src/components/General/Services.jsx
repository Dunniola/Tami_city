import React from "react";
// import { LuHome } from "react-icons/lu";
import { BsCoin } from "react-icons/bs";
import { FaSign } from "react-icons/fa";
import ServicesCard from "../cards/ServicesCard";
import Fade from 'react-reveal/Fade';
const data = [
  {
    title: "Buy Properties",
    // icon: <LuHome size={40}/>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incid id urn et uid. Lorem ipsum dolor sit amet, con sect et uid. Lorem ipsum dolor sit amet",
  },
  {
    title: "Sell Properties",
    icon: <BsCoin size={40}/>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incid id urn et uid. Lorem ipsum dolor sit amet, con sect et uid. Lorem ipsum dolor sit amet",
  },
  {
    title: "Rent Properties",
    icon: <FaSign size={40}/>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed, sed do eiusmod tempor incid id urn et uid. Lorem ipsum dolor sit amet, con sect et uid. Lorem ipsum dolor sit amet",
  },
];

const Services = () => {
  return (
    <div className="py-20 bg-white">
      <div className="px-10 mx-auto max-w-screen-2xl">
        <h1 className="mb-16 text-4xl font-semibold text-center lg:text-4xl">
          Expert Guides <br /> to Finding Your Perfect Fit
        </h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 max-md:gap-y-16">
          {data?.map((i, index) => (
            <Fade right duration={1000}>
                <ServicesCard key={index} data={i} />
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
