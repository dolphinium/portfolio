import React, { useEffect, useState } from "react";
import axios from "axios";

const BloodSugarDisplay = () => {
  const [bloodSugars, setBloodSugars] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchBloodSugar = async () => {
      try {
        const response = await axios.get(
          "https://t1dcow.mooo.com/api/v1/entries/sgv?count=10"
        );
        const data = response.data;

        // Calculate deltas
        const dataWithDeltas = data.map((entry, index) => {
          const previous = data[index + 1];
          return {
            ...entry,
            delta: previous ? entry.sgv - previous.sgv : null, // Calculate delta if previous exists
          };
        });

        setBloodSugars(dataWithDeltas);
      } catch (error) {
        console.error("Error fetching blood sugar:", error);
      }
    };

    fetchBloodSugar();

    // Optionally, refresh the data every 5 minutes
    const interval = setInterval(fetchBloodSugar, 300000);
    return () => clearInterval(interval);
  }, []);

  if (!bloodSugars.length) {
    return <div>Loading...</div>;
  }

  const latest = bloodSugars[0];
  const directionArrows = {
    Flat: "→︎",
    DoubleUp: "⬆︎⬆︎",
    SingleUp: "⬆︎",
    FortyFiveUp: "↗︎",
    FortyFiveDown: "↘︎",
    SingleDown: "⬇︎",
    DoubleDown: "⬇︎⬇︎",
    "": "—",
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative">
      {/* Display the latest blood sugar */}
      <div
        className="bg-gray-100 text-gray-800 p-0 rounded-lg shadow-md cursor-pointer inline-block"
        onClick={toggleDropdown}
      >
        <div className="flex items-center justify-center space-x-2">
          <div className="text-2xl font-bold">{latest.sgv}</div>
          <div className="text-xl text-gray-600">
            {directionArrows[latest.direction]}
          </div>
        </div>
        {/* <div className="mt-2 text-sm text-gray-500">
          {latest.delta !== null && (
            <span className="pill delta">
              {latest.delta > 0 ? `+${latest.delta}` : latest.delta} mg/dL
            </span>
          )}
        </div> */}
      </div>

      {/* Dropdown for last 10 values */}
      {showDropdown && (
        <div className="absolute top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-64 max-h-56 overflow-y-auto z-50">
          <ul className="divide-y divide-gray-200">
            {bloodSugars.map((entry, index) => (
              <li
                key={entry.date}
                className="p-2 hover:bg-gray-100 flex justify-between items-center"
              >
                <span className="text-gray-500 font-bold">{entry.sgv}</span>
                <span className="text-gray-500 text-sm">
                  {new Date(entry.dateString).toLocaleTimeString()}
                </span>
                <span className="text-gray-500">
                  {directionArrows[entry.direction]}
                </span>
                {entry.delta !== null && (
                  <span
                    className={`ml-2 text-sm ${
                      entry.delta > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {entry.delta > 0 ? `+${entry.delta}` : entry.delta} mg/dL
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BloodSugarDisplay;
