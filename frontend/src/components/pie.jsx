import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartPie({ data }) {

  const topicCount = {};

  data.forEach(item => {
    const topic = item.topic;

    if (topic) {
      if (!topicCount[topic]) {
        topicCount[topic] = 0;
      }
      topicCount[topic]++;
    }
  });

  const topics = Object.keys(topicCount);
  const counts = Object.values(topicCount);

  if (topics.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Topic Distribution
        </h3>
        <p className="text-gray-500 mt-2">
          No data available for selected filters
        </p>
      </div>
    );
  }

  const pieData = {
    labels: topics,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          "#ec4899", // pink
          "#3b82f6", // blue
          "#facc15", // yellow
          "#14b8a6", // teal
          "#8b5cf6", // violet
          "#fb923c"  // orange
        ]
      }
    ]
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Topic Distribution
        </h3>
        <p className="text-sm text-gray-500">
          Topic-wise distribution of records
        </p>
      </div>

      <div className="h-[350px] flex items-center justify-center">
        <Pie
          data={pieData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right"
              }
            }
          }}
        />
      </div>

    </div>
  );
}

export default ChartPie;
