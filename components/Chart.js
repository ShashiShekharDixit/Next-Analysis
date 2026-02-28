"use client";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Chart({ data }) {
  const chartData = {
    labels: data.map((item, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: "Life Score Trend",
        data: data.map(item => item.score),
        borderWidth: 2,
        tension: 0.4
      }
    ]
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Line data={chartData} />
    </div>
  );
}