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

function Chart2({ data }) {
  const topicmap = {};

  data.forEach((item) => {
    const topic = item.topic;
    const likelihood = Number(item.likelihood);
    if (topic && !isNaN(likelihood)) {
      if (!topicmap[topic]) {
        topicmap[topic] = [];
      }
      topicmap[topic].push(likelihood);
    }
  });

  const topics = Object.keys(topicmap);

  const avgliklihood = topics.map((item) => {
    const sum = topicmap[item].reduce((a, b) => a + b, 0);
    return (sum / topicmap[item].length).toFixed(2);
  });

  const likelihoodChartData = {
    labels: topics,
    datasets: [
      {
        label: "Average Likelihood",
        data: avgliklihood,
        backgroundColor: "rgba(236, 72, 153, 0.75)", // Tailwind pink
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Likelihood by Topic
        </h3>
        <p className="text-sm text-gray-500">
          Average likelihood distribution across topics
        </p>
      </div>

      <div className="h-[350px]">
        <Bar
          data={likelihoodChartData}
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

export default Chart2;
