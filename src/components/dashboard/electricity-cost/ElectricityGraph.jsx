import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { unixToDate } from "../../../utils/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ElectricityGraph({ graphData }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#f0f0f0",
        },
      },
      y: {
        grid: {
          color: "#f0f0f0",
        },
      },
    },
  };

  const data = {
    labels: graphData.map((item) => unixToDate(item.timestamp)),
    datasets: [
      {
        label: "Price",
        data: graphData.map((item) => item.price),
        borderColor: "#22a196",
        tension: 0.4,
        pointRadius: 3, // Increase radius for better hover interaction
        pointHoverRadius: 6, // Larger radius on hover
      },
    ],
  };

  return (
    <div className="bg-white p-6 ">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">AT</span>
        </div>
        {/* <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
          Download as CSV
        </button> */}
      </div>
      <div className="h-[400px] w-full overflow-auto">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
