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
          <div className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-3">
            {dashCards?.map((i, index) => (
              <div
                key={index}
                className="px-8 py-8 bg-white rounded-2xl seye-shadow"
              >
                <img src={i?.icon} className="w-[40px]" alt="" />
                <p className="py-3 text-sm text-gray-500">{i?.name}</p>
                <p className="text-lg font-semibold text-gray-500">
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
