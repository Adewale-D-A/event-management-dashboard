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
import { useAppSelector } from "../../stores/hooks";
import { useEffect } from "react";

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
  const isDarkMode = useAppSelector(
    (state) => state?.menuFunctions?.value?.isDarkMode
  );
  useEffect(() => {
    ChartJS.defaults.color = isDarkMode ? "#fff" : "#8576FF";
  }, [isDarkMode]);

  return <Bar options={options} data={data} />;
}
