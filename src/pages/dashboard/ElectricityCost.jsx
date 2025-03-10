import React, { useEffect } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardFilters from "../../components/dashboard/electricity-cost/DashboardFilters";
import ElectricityGraph from "../../components/dashboard/electricity-cost/ElectricityGraph";
import DashboardHeader from "../../components/shared/dashboard/DashboardHeader";
import { FiZap } from "react-icons/fi";
import { useElectricityCost } from "../../components/dashboard/electricity-cost/hooks/useElectricityCost";

const ElectricityCost = () => {
  const { graphData } = useElectricityCost();

  const breadcrumbs = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Electricity Cost", href: "/dashboard/electricity-cost" },
  ];

  return (
    <>
      <DashboardLayout>
        <DashboardHeader title="Electricity Cost" breadcrumbs={breadcrumbs} />
        <div className="max-w-7xl overflow-auto z-0">
          <div className="p-6 space-y-6">
            {/* Electricity Cost Section */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-xl text-gray-800 flex items-center font-bold">
                  <FiZap className="w-5 h-5 mr-2 text-primary" />
                  Current Electricity Cost{": "}
                  {graphData && graphData[graphData.length - 1].price}
                </h2>
              </div>
              {/* <DashboardFilters /> */}
              {graphData && <ElectricityGraph graphData={graphData} />}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default ElectricityCost;
