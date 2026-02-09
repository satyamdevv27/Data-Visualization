function Filters({ filters, setFilters, years, topics, regions, countries }) {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Year */}
      <select
        value={filters.end_year}
        onChange={(e) => setFilters({ ...filters, end_year: e.target.value })}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Years</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* Topic */}
      <select
        value={filters.topic}
        onChange={(e) => setFilters({ ...filters, topic: e.target.value })}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
      >
        <option value="">All Topics</option>
        {topics.map((topic) => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>

      {/* Region */}
      <select
        value={filters.region}
        onChange={(e) => setFilters({ ...filters, region: e.target.value })}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      {/* Country */}
      <select
        value={filters.country}
        onChange={(e) => setFilters({ ...filters, country: e.target.value })}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">All Countries</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
