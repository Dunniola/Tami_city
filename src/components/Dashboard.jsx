import React from "react";
import Sidebar from "./General/Sidebar";
import { VscKey } from "react-icons/vsc";
import DashChart from "./General/DashChart";

const dashCards = [
  {
    name: "No of ad placement",
    value: 24,
    icon: "/key.svg",
  },
  {
    name: "No of Impressions",
    value: 2400,
    icon: "/give.svg",
  },
  {
    name: "Amount Spent",
    value: "N 450,000",
    icon: "/star.svg",
  },
];

const Dashboard = () => {
  return (
    <>
      <Sidebar>
        <div className="p-6">
          <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {dashCards?.map((i, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white seye-shadow py-8 px-8"
              >
                <img src={i?.icon} className="w-[40px]" alt="" />
                <p className="text-gray-500 py-3 text-sm">{i?.name}</p>
                <p className="text-gray-500 text-lg font-semibold">
                  {i?.value}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:h-[75vh] h-[300px]  py-4 flex justify-center items-center bg-white mt-10 rounded-2xl seye-shadow">
          <DashChart/>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default Dashboard;
