import React from 'react';
import Form from '../components/Form';

const stats = [
  { id: 1, name: 'Bookings this month', value: '8 Days' },
  { id: 2, name: 'Working Days', value: '24' },
  { id: 3, name: 'Current Route', value: 'Waiyaki way' },
]

export default function Dashboard() {
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