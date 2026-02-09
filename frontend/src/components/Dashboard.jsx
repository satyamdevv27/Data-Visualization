import { useEffect, useState } from "react";
import Filters from "./filter";
import KPI from "./kpi";
import Charts from "./chart";
import Chart2 from "./chart2";
import ChartPie from "./pie";
import ChartLine from "./linechart";

function Dashboard() {
  const url = "https://data-visualization-4dd0.onrender.com"
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);

  const [filters, setFilters] = useState({
    end_year: "",
    topic: "",
    region: "",
    country: "",
    city: "",
  });

  // 🔹 fetch ALL data once
  useEffect(() => {
    fetch(`${url}/api/insights`)
      .then((res) => res.json())
      .then((result) => {
        setAllData(result);
        setData(result);
      })
      .catch(console.error);
  }, []);

  // 🔹 fetch FILTERED data when filters change
  useEffect(() => {
    let query = Object.entries(filters)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    fetch(`${url}/api/insights?${query}`)
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch(console.error);
  }, [filters]);

  const getUniqueValues = (dataset, key) => {
    return [...new Set(dataset.map((item) => item[key]).filter(Boolean))];
  };

  const years = getUniqueValues(allData, "end_year").sort((a, b) => a - b);
  const topics = getUniqueValues(allData, "topic");
  const regions = getUniqueValues(allData, "region");
  const countries = getUniqueValues(allData, "country");

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Data Visualization Dashboard
        </h1>
        <p className="text-gray-500 mt-1">Blackcoffer Assignment</p>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <KPI data={data} />
      </div>

      {/* Filters */}
      <div className="bg-white p-5 rounded-xl shadow-sm mb-10">
        <Filters
          filters={filters}
          setFilters={setFilters}
          years={years}
          topics={topics}
          regions={regions}
          countries={countries}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-12">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Charts data={data} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Chart2 data={data} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <ChartPie data={data} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <ChartLine data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
