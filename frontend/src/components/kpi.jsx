function KPICards({ data }) {
  const totalRecords = data.length;

  const avgIntensity =
    totalRecords === 0
      ? 0
      : (
          data.reduce((sum, item) => sum + (item.intensity || 0), 0) /
          totalRecords
        ).toFixed(2);

  const avgLikelihood =
    totalRecords === 0
      ? 0
      : (
          data.reduce((sum, item) => sum + (item.likelihood || 0), 0) /
          totalRecords
        ).toFixed(2);

  const avgRelevance =
    totalRecords === 0
      ? 0
      : (
          data.reduce((sum, item) => sum + (item.relevance || 0), 0) /
          totalRecords
        ).toFixed(2);

  return (
    <>
      
      <div className="bg-white shadow-sm rounded-xl p-5 text-center hover:shadow-md transition">
        <h3 className="text-gray-500 text-sm font-medium">Total Records</h3>
        <p className="text-3xl font-bold text-gray-800 mt-2">
          {totalRecords}
        </p>
      </div>

      
      <div className="bg-white shadow-sm rounded-xl p-5 text-center hover:shadow-md transition">
        <h3 className="text-gray-500 text-sm font-medium">Avg Intensity</h3>
        <p className="text-3xl font-bold text-blue-600 mt-2">
          {avgIntensity}
        </p>
      </div>

  
      <div className="bg-white shadow-sm rounded-xl p-5 text-center hover:shadow-md transition">
        <h3 className="text-gray-500 text-sm font-medium">Avg Likelihood</h3>
        <p className="text-3xl font-bold text-pink-600 mt-2">
          {avgLikelihood}
        </p>
      </div>

      
      <div className="bg-white shadow-sm rounded-xl p-5 text-center hover:shadow-md transition">
        <h3 className="text-gray-500 text-sm font-medium">Avg Relevance</h3>
        <p className="text-3xl font-bold text-green-600 mt-2">
          {avgRelevance}
        </p>
      </div>
    </>
  );
}

export default KPICards;
