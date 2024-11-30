"use client";

import { useState } from "react";
import Sidebar from "../../components/General/Sidebar";
import BannerVideoCampaigns from "../../components/General/BannerVideoCampaigns";
import BulkEmails from "../BulkEmails/BulkEmails";

// Tab content components


const BulkEmailContent = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-4">Active Bulk Email Campaigns</h2>
    <ul className="space-y-2">
      <li className="bg-white p-3 rounded shadow">Monthly Newsletter - Sent</li>
      <li className="bg-white p-3 rounded shadow">
        Product Update - Scheduled
      </li>
      <li className="bg-white p-3 rounded shadow">
        Customer Feedback Survey - Draft
      </li>
    </ul>
  </div>
);

const BulkSMSContent = () => (
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-4">Active Bulk SMS Campaigns</h2>
    <ul className="space-y-2">
      <li className="bg-white p-3 rounded shadow">Flash Sale Alert - Sent</li>
      <li className="bg-white p-3 rounded shadow">
        Appointment Reminder - Scheduled
      </li>
      <li className="bg-white p-3 rounded shadow">Event RSVP - Draft</li>
    </ul>
  </div>
);

export default function ActiveCampaigns() {
  const [activeTab, setActiveTab] = useState("banner-video");

  const tabs = [
    {
      id: "banner-video",
      label: "Banner/Videos",
      content: <BannerVideoCampaigns />,
    },
    { id: "bulk-email", label: "Bulk Emails", content: <BulkEmails nav={false} /> },
    { id: "bulk-sms", label: "Bulk SMS", content: <BulkSMSContent /> },
  ];

  return (
    <>
      <Sidebar>
        <div className="min-h-screen bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Active Campaigns
            </h1>

            {/* Tabs */}
            <div className="bg-white shadow-sm rounded-lg">
              <nav className="flex">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } flex-1 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm focus:outline-none`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                        Active
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab content */}
            <div className="mt-4 bg-white shadow-sm rounded-lg">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}
