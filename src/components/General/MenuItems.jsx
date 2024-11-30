import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaArrowRight,
  FaShapes,
  FaBook,
  FaChartLine,
  FaBriefcase,
  FaCertificate,
  FaNewspaper,
  FaCog,
  FaUserFriends,
  FaCheckCircle,
} from "react-icons/fa";
import { IoCarSportOutline, IoPaperPlane, IoSettingsOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineLock, MdDashboard, MdCampaign } from "react-icons/md";
import { TbSmartHome, TbWorldWww } from "react-icons/tb";
import { BsCart, BsListCheck, BsMegaphone } from "react-icons/bs";
import { ListEndIcon, ListOrderedIcon } from "lucide-react";
import { LiaStarSolid } from "react-icons/lia";

export const menuItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
    roles: [1, 2, 3, 4],  // Changed to [1, 2, 3]
    icon: <MdDashboard />,
    activeIcon: <MdDashboard className="text-white" />,
  },
  {
    name: "Advertise",
    url: "/advertise",
    roles: [1, 2, 3],  // Changed to [1, 2, 3]
    icon: <BsMegaphone />,
    activeIcon: <BsMegaphone className="text-white" />,
  },
  {
    name: "Website Integration",
    url: "/website-integration",
    roles: [1, 2, 3, 4],  // Changed to [1, 2, 3]
    icon: <TbWorldWww />,
    activeIcon: <TbWorldWww className="text-white" />,
  },
  {
    name: "Active Campaigns",
    url: "/active-campaigns",
    roles: [1, 2, 3],  // Changed to [1, 2, 3]
    icon: <BsListCheck />,
    activeIcon: <BsListCheck className="text-white" />,
  },
  {
    name: "Marketplace",
    url: "/marketplace",
    roles: [1, 2, 3, 4],  // Changed to [1, 2, 3]
    icon: <BsCart />,
    activeIcon: <BsCart className="text-white" />,
  },
  {
    name: "Wallet & Transactions",
    url: "/wallet",
    roles: [1, 2, 3,4],  // Changed to [1, 2, 3]
    icon: <IoPaperPlane />,
    activeIcon: <IoPaperPlane className="text-white" />,
  },
  {
    name: "Settings",
    url: "/profile",
    roles: [1, 2, 3, 4],  // Changed to [1, 2, 3]
    icon: <IoSettingsOutline />,
    activeIcon: <IoSettingsOutline className="text-white" />,
  },
  {
    name: "Lists",
    url: "/all-lists",
    roles: [1, 2, 3],  // Changed to [1, 2, 3]
    icon: <LiaStarSolid />,
    activeIcon: <ListOrderedIcon className="text-white" />,
  },
  // {
  //   name: "Create Blog",
  //   url: "/blog-editor",
  //   roles: [1, 2, 3],  // Changed to [1, 2, 3]
  //   icon: <TfiWrite />,
  //   activeIcon: <TfiWrite className="text-white" />,
  // },
];
