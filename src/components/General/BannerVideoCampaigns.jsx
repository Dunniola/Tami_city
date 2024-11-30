"use client";

import { Video, Image, Newspaper, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useDataContext } from "../../context/DataContext";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";

// Mock data for demonstration
const campaigns = [
  {
    id: 1,
    name: "Summer Sale Video",
    type: 1,
    amount_spent: 500,
    stop_amount: 1000,
    status: "Running",
  },
  {
    id: 2,
    name: "New Product Banner",
    type: 2,
    amount_spent: 300,
    stop_amount: 500,
    status: "Scheduled",
  },
  {
    id: 3,
    name: "Holiday Story",
    type: 3,
    amount_spent: 150,
    stop_amount: 300,
    status: "Paused",
  },
  {
    id: 4,
    name: "Brand Awareness Video",
    type: 1,
    amount_spent: 800,
    stop_amount: 1000,
    status: "Running",
  },
];

const CampaignTypeIcon = ({ type }) => {
  switch (type) {
    case 1:
      return <Video className="w-6 h-6 text-blue-500" />;
    case 2:
      return <Image className="w-6 h-6 text-green-500" />;
    case 3:
      return <Newspaper className="w-6 h-6 text-purple-500" />;
    default:
      return <AlertCircle className="w-6 h-6 text-red-500" />;
  }
};

const CampaignTypeName = ({ type }) => {
  switch (type) {
    case 1:
      return "Video";
    case 2:
      return "Banner";
    case 3:
      return "Sponsored Story";
    default:
      return "Unknown";
  }
};

const StatusBadge = ({ paused }) => {
  const colorClass = paused
    ? "bg-yellow-100 text-yellow-800"
    : "bg-green-100 text-green-800";
  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass}`}
    >
      {paused ? `paused till ${paused}` : "Running"}
    </span>
  );
};

export default function BannerVideoCampaigns() {
  const { getRequest } = useDataContext();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const result = await getRequest(`campaigns`);
    if (result.status === "success") {
      setData(result.data);
    } else {
      toast.error("Error Occured");
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">
          Active Banner and Video Campaigns
        </h2>
        <div className="space-y-4">
          {data?.map((campaign) => {
            const progress =
              (campaign.amount_spent / campaign.stop_amount) * 100;
            return (
              <div key={campaign.id} className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <CampaignTypeIcon type={campaign.type} />
                    <span className="font-medium">{campaign.name}</span>
                    <span className="text-sm text-gray-500">
                      (<CampaignTypeName type={campaign.type} />)
                    </span>
                  </div>
                  <StatusBadge paused={campaign.tempoary_pause_until} />
                </div>
                <div className="mb-2">
                  <div className="text-sm text-gray-500">
                    Budget: NGN {campaign.amount_spent} / NGN {campaign.stop_amount}
                  </div>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
