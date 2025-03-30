import { FaRobot } from "react-icons/fa";
import { FiHome, FiShoppingBag, FiZap } from "react-icons/fi";
import { MdOutlineSmartToy } from "react-icons/md";

export const userDashboardMenuItems = [
  { icon: FiHome, label: "Dashboard", href: "/dashboard" },
  {
    icon: FiZap,
    label: "Electricity cost",
    href: "/dashboard/electricity-cost",
  },
  {
    icon: MdOutlineSmartToy,
    label: "Chat Bot",
    href: "/dashboard/chatbot",
  },
  {
    icon: FiShoppingBag,
    label: "My Orders",
    href: "/dashboard/my-orders",
  },
];
