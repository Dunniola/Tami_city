import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getImage } from "../../utils/Helpers";

const NewCategoryCard = ({ data }) => {
  return (
    <Link to={`/discover?category=${data?.name}&date=latest`} className="group relative block bg-black">
      <img
        alt=""
        src={getImage(data?.image)}
        // src={`${import.meta.env.VITE_FULL_URL}/${import.meta.env.VITE_IMAGE_URL}/${data?.image}`}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
     
        <p className="text-xl font-bold text-white sm:text-2xl">{data?.name}</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <button className="py-2 px-6  text-white bg-black flex items-center">Explore <BiChevronRight size={16}/></button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewCategoryCard;
