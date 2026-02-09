import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Charts({ data }) {
  const yearMap = {};

  data.forEach((item) => {
    const year = parseInt(item.end_year);
    const intensity = Number(item.intensity);

    if (year > 0 && !isNaN(year) && intensity > 0) {
      if (!yearMap[year]) {
        yearMap[year] = [];
      }
      yearMap[year].push(intensity);
    }
  });

  const years = Object.keys(yearMap).sort((a, b) => a - b);

  const avgIntensity = years.map((year) => {
    const total = yearMap[year].reduce((sum, val) => sum + val, 0);
    return Number((total / yearMap[year].length).toFixed(2));
  });

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Average Intensity",
        data: avgIntensity,
        backgroundColor: "rgba(59,130,246,0.7)", // Tailwind blue
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Intensity vs Year
        </h3>
        <p className="text-sm text-gray-500">
          Average intensity trend over time
        </p>
      </div>

      <div className="h-[350px]">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Charts;
