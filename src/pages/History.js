import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/form');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">History</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Employee No.</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Shift</th>
              <th className="px-4 py-2">Route</th>
              <th className="px-4 py-2">Destination</th>
              <th className="px-4 py-2">Estate / Building</th>
              <th className="px-4 py-2">Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="border px-4 py-2">{item.fullName}</td>
                <td className="border px-4 py-2">{item.employeeNo}</td>
                <td className="border px-4 py-2">{new Date(item.date).toLocaleDateString()}</td>
                <td className="border px-4 py-2">{item.shift}</td>
                <td className="border px-4 py-2">{item.route}</td>
                <td className="border px-4 py-2">{item.destination}</td>
                <td className="border px-4 py-2">{item.estate}</td>
                <td className="border px-4 py-2">{item.phoneNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;