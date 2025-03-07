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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ElectricityGraph() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
    labels: ["17:00", "18:00", "19:00"],
    datasets: [
      {
        data: [0, 5, 3, 7, 2],
        borderColor: "#22a196",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">AT</span>
        </div>
        <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
          Download as CSV
        </button>
      </div>
      <div className="h-[400px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
