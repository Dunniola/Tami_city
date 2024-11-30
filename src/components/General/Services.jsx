import React from "react";
import { LuHome } from "react-icons/lu";
import { BsCoin } from "react-icons/bs";
import { FaSign } from "react-icons/fa";
import ServicesCard from "../cards/ServicesCard";
import Fade from 'react-reveal/Fade';
const data = [
  {
    title: "Buy Properties",
    icon: <LuHome size={40}/>,
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
    <div className="bg-white py-20">
      <div className="max-w-screen-2xl px-10 mx-auto">
        <h1 className="text-center text-4xl lg:text-4xl font-semibold mb-16">
          Expert Guides <br /> to Finding Your Perfect Fit
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-md:gap-y-16">
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
