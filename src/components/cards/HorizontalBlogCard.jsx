import React from "react";
import { getImage, getMonthDay, getYear, truncateString } from "../../utils/Helpers";
import { Link } from "react-router-dom";

const HorizontalBlogCard = ({ data }) => {
  return (
    <>
      <article className="flex bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{getYear(data?.publication_date)}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{getMonthDay(data?.publication_date)}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={getImage(data?.banner)}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">
               {data?.title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {truncateString(data?.description, 500)}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <Link
              to={`/blog/${data?.slug}`}
              className="block bg-tetiary px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition"
            >
              Read Article
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default HorizontalBlogCard;
