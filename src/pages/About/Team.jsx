import React, { useState } from 'react';
import bgImage from "/src/assets/images/imageBg5.jpg";
import Footer from '../../components/General/Footer';

function Team() {
  const staffMembers = [
    { name: 'Edu Zainab', role: 'Senior Marketing Manager' },
    { name: 'Femi Olayemi', role: 'Agriculture Export Specialist' },
    { name: 'Chika Abubakar', role: 'Operations Coordinator' },
    { name: 'Toluwani Ogunleye', role: 'Sustainability Officer' },
    { name: 'Amina Mohammed', role: 'Research Scientist – Cocoa Development' },
    { name: 'Fola Adedeji', role: 'Logistics and Distribution Manager' },
    { name: 'David Oseni', role: 'Export Compliance Officer' },
    { name: 'Rasheed Adams', role: 'Finance and Accounts Officer' }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastStaff = currentPage * itemsPerPage;
  const indexOfFirstStaff = indexOfLastStaff - itemsPerPage;
  const currentStaffMembers = staffMembers.slice(indexOfFirstStaff, indexOfLastStaff);

  return (
    <>
      <section className="staff-section">
        <div
          className="relative w-full h-[30rem] leading-[4rem] px-[2rem]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative top-[6rem] text-[1rem] text-white font-bold">
            <h1 className="relative max-md:text-[4rem] text-[3rem] top-[10rem]">
              Staff
            </h1>
          </div>
        </div>
        <h1 className="text-xl font-bold ">Meet Our Team</h1>
        <p className="mt-4 text-lg ">
          Home &gt; About Tamicity &gt; Our Team
        </p>

        <div className="mt-6 staff-description">
          <p>
            At Tamicity, we believe in the power of collaboration and teamwork to achieve our mission of international agricultural exportation. Our diverse and talented team is at the heart of our operations, working relentlessly to ensure the quality of our agricultural products such as cassava and cocoa. The team comprises specialists from various domains, including agriculture, logistics, sustainability, finance, research, and operations, all contributing their expertise to ensure the smooth functioning of our company on both national and international fronts.
          </p>
          <p className="mt-4">
            Our leadership team plays a pivotal role in driving Tamicity’s mission forward, guided by a shared vision of excellence, sustainability, and impact. Each member brings a wealth of experience, leadership, and knowledge that supports the growth of Tamicity and our contributions to global agricultural exports. Through our collective efforts, we aim to set new standards for quality and efficiency in the agricultural export sector.
          </p>
          <p className="mt-4">
            We invite you to explore the profiles of our team members to learn more about the individuals who make Tamicity a leader in the agricultural export industry. Whether it’s our senior management team, our researchers focused on crop development, or our logistics specialists ensuring smooth international trade, each member of Tamicity is dedicated to our mission of excellence and sustainability. Join us as we continue to make strides in international markets and drive the future of global agricultural trade.
          </p>
          <p className="mt-4">
            If you are interested in learning more about our work or joining our team, please visit our <a href="/careers" className="text-blue-500">Careers</a> page.
          </p>
        </div>

        <div className="mt-8 text-center staff-list">
          <h3 className="text-lg font-semibold">Staff Members:</h3>
          <ul className="mt-4 space-y-6">
            {currentStaffMembers.map((staff, index) => (
              <li key={index} className="text-center">
                <img
                  src={bgImage}
                  alt={staff.name}
                  className="object-cover w-40 h-40 mx-auto rounded-full" // Increased image size
                />
                <div className="mt-4">
                  <span className="block text-xl font-bold">{staff.name}</span> {/* Bold name */}
                  <span className="text-sm">{staff.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center pagination">
          <button
            className="p-2 bg-gray-300 rounded-md"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">|</span>
          <button
            className="p-2 bg-gray-300 rounded-md"
            onClick={handleNextPage}
            disabled={indexOfLastStaff >= staffMembers.length}
          >
            Next
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Team;
