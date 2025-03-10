import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";

const Dashboard = () => {
  const breadcrumbs = [{ label: "Dashboard", href: "/dashboard" }];
  return (
    <>
      <DashboardLayout>
        {" "}
        <DashboardHeader title="Dashboard" breadcrumbs={breadcrumbs} />
        <div>TO BE MADE</div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
