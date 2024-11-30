import React, { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import Loading from "./Loading";
import { getImage } from "../../utils/Helpers";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

const FeaturedBlogs = () => {
  const { getRequest } = useDataContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const result = await getRequest(`get-top`);
    if (result.status === "success") {
      setData(result.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const colors = {
    1: "bg-tetiary py-10 max-md:pt-20",
    2: "bg-rose-200 py-10 max-md:pt-20",
    3: "bg-gray-200 py-10 max-md:pt-20",
  };

  return (
    <>
      {loading && <Loading />}
      {data?.map((i) => (
        <>
          {i?.blog_data && (
            <section className={colors[i?.id]}>
              <Zoom bottom duration={1000} delay={300}>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                  <header className="text-center mb-10">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      {i?.blog_data?.title}
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                      {i?.blog_data?.description}
                    </p>
                  </header>
                  <Link
                    to={`/blog/${i?.blog_data?.slug}`}
                    
                  >

                  <img
                    src={getImage(i?.blog_data?.banner)}
                    className="w-full h-[400px] object-cover"
                    alt=""
                  />
                  </Link>
                </div>
                <div className="flex justify-center mb-10">
                  <Link
                    to={`/blog/${i?.blog_data?.slug}`}
                    className="bg-inherit border border-gray-700 py-2 px-8"
                  >
                    View More
                  </Link>
                </div>
              </Zoom>
            </section>
          )}
        </>
      ))}
    </>
  );
};

export default FeaturedBlogs;
