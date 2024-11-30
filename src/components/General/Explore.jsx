import React, { useEffect, useState } from "react";
import ListingCard from "../cards/ListingCard";
import Fade from "react-reveal/Fade";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";
import NewCategoryCard from "../cards/NewCategoryCard";
import { Zoom } from "react-reveal";
// import { categories } from "../../utils/Helpers";
import SectionSpinner from "../Loading/SectionSpinner";

const Explore = () => {
  const { getRequest } = useDataContext();
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const result = await getRequest(`categories`);
    if (result.status === "success") {
      setCategories(result.data);
    } else {
      toast.error("Error getting Categories");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!loading && categories?.length > 0 && (
        <div className="bg-white py-20">
          <div className="max-w-screen-2xl px-10 mx-auto">
            <h1 className="text-center text-4xl lg:text-4xl font-semibold mb-16">
              Explore Your Options, <br />
              Find Your Perfect Match
            </h1>
            {/* <Fade left> */}
            <>
              {!categories && <SectionSpinner />}

              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {categories &&
                  categories?.map((i) => (
                    <Zoom left delay={300} duration={1400}>
                      <li>
                        <NewCategoryCard data={i} />
                      </li>
                    </Zoom>
                  ))}
              </ul>
            </>
            {/* </Fade>   */}
          </div>
        </div>
      )}
    </>
  );
};

export default Explore;
