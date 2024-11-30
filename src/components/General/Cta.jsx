import React from "react";

const Cta = () => {
  return (
    <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Have more questions?
          </h2>

          <p className=" text-gray-200 max-w-screen-md mx-auto pt-4">
            You can reach out to us if you have any more questions or enquiries
            about our services and we will gladly respond to you.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="tel:+2349044399034"
              className="inline-block bg-white px-12 py-3 text-sm font-medium text-gray-700 transition  focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
