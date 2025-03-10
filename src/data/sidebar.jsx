import { FiHome, FiZap, FiTrash2, FiCloud, FiUser } from "react-icons/fi";

export const userDashboardMenuItems = [
  { icon: FiHome, label: "Dashboard", href: "/dashboard" },
  {
    icon: FiZap,
    label: "Electricity cost",
    href: "/dashboard/electricity-cost",
  },
  // { icon: FiTrash2, label: "Energy waste", href: "/dashboard/energy-waste" },
  // { icon: FiCloud, label: "CO2 footprint", href: "/dashboard/co2-footprint" },
  // { icon: FiUser, label: "My account", href: "/dashboard/my-account" },
];
