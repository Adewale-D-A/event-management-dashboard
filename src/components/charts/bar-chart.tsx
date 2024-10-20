import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "",
    },
  },
  // scales: {
  //   y: {
  //     title: {
  //       display: true,
  //       text: "Your Title",
  //     },
  //   },
  //   x: {
  //     title: {
  //       display: true,
  //       text: "Your Title",
  //     },
  //   },
  // },
};

export default function BarChart({
  data,
}: {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  };
}) {
  return <Bar options={options} data={data} />;
}
