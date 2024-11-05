import React, { useEffect, useState } from "react";
import axios from "axios";

const HistoryTable = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch data from the API
    const fetchHistory = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/history");
        setHistoryData(response.data.data);
      } catch (err) {
        setError("Failed to fetch history data.");
      } finally {
        setLoading(false);
      }
    };
    
    fetchHistory();
  }, []);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">History Table</h2>
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Class Room</th>
          <th className="py-2 px-4 border-b">Score</th>
          <th className="py-2 px-4 border-b">Percentage</th>
          <th className="py-2 px-4 border-b">Type</th>
        </tr>
        </thead>
        <tbody>
        {historyData.map((item, index) => (
          <tr key={index} className="text-center">
            <td className="py-2 px-4 border-b">{item.name}</td>
            <td className="py-2 px-4 border-b">{item.class_room}</td>
            <td className="py-2 px-4 border-b">{item.score}</td>
            <td className="py-2 px-4 border-b">{item.percentage}%</td>
            <td className="py-2 px-4 border-b">
              {item.is_pretest  ? (
                <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded">Pretest</span>
              ) : item.isPostest ? (
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded">Posttest</span>
              ) : (
                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">N/A</span>
              )}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;
