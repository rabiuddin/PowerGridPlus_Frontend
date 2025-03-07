import React from "react";
import Sidebar from "../components/shared/dashboard/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="w-4/5 flex flex-col">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
