import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';

export default function Dashboard() {
  const [stats, setStats] = useState([
    { id: 1, name: 'Bookings this month', value: 'Loading...' },
    { id: 2, name: 'Working Days', value: '24' },
    { id: 3, name: 'Current Route', value: 'Waiyaki way' },
  ]);

  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/form');
        const data = await response.json();
        // Update the stats array with the fetched data
        setStats(prevStats => prevStats.map(stat => 
          stat.id === 1 ? { ...stat, value: data.totalBookings } : stat
        ));
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setStats(prevStats => prevStats.map(stat => 
          stat.id === 1 ? { ...stat, value: 'Error loading data' } : stat
        ));
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="px-2 sm:px-0">
        <Form />
      </div>
    </div>
  );
}
