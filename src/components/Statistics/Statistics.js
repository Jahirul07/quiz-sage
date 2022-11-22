import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const data = [
    {
      name: 'React',
      quiz: 8,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'JavaScript',
      quiz: 9,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'CSS',
      quiz: 8,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Git',
      quiz: 11,
      pv: 3908,
      amt: 2000,
    }
  ];

const Statistics = () => {
    return (
        <div className='flex justify-center my-10'>
            <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <Legend width={100} wrapperStyle={{ right: 90, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5',        borderRadius: 3, lineHeight: '40px' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="quiz" fill="#8884d8" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Statistics;