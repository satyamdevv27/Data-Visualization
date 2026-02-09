import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function ChartLine({ data }) {

  const yearMap = {};

  data.forEach(item => {
     const year = parseInt(item.end_year);
    const relevance = Number(item.relevance);

    if (year > 0 && !isNaN(year) && relevance > 0) {

      if (!yearMap[year]) {
        yearMap[year] = [];
      }
      yearMap[year].push(relevance);
    }
  });

  const years = Object.keys(yearMap).sort((a, b) => a - b);

  const avgRelevance = years.map(year => {
    const sum = yearMap[year].reduce((a, b) => a + b, 0);
    return Number((sum / yearMap[year].length).toFixed(2));
  });

  if (years.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Relevance Trend Over Years
        </h3>
        <p className="text-gray-500 mt-2">
          No data available for selected filters
        </p>
      </div>
    );
  }

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Average Relevance Trend",
        data: avgRelevance,
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Relevance Trend Over Years
        </h3>
        <p className="text-sm text-gray-500">
          Average relevance trend over time
        </p>
      </div>

      <div className="h-[350px]">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top"
              }
            }
          }}
        />
      </div>

    </div>
  );
}

export default ChartLine;
