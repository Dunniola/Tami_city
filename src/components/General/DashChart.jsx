import React from "react";
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

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const dataset1 = [37, 28, 21, 54, 89, 78, 78];
const dataset2 = [72, 144, 125, 123, 66, 136, 78];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: dataset1,
      borderColor: "#1871ff",
      backgroundColor: "#1871ff",
    },
    {
      label: "Dataset 2",
      data:dataset2,
      borderColor: "#000000",
      backgroundColor: "#000000",
    },
  ],
};

const DashChart = () => {
  return <Line options={options} data={data} />;
};

export default DashChart;
