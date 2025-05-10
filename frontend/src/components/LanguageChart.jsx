import React from 'react';
import CustomToolTip from "../components/CustomToolTip";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const ChartData = [
  { name: 'Java', YoE: 6},
  { name: 'Python', YoE: 5},
  { name: 'C#', YoE: 2},
  { name: 'C/C++', YoE: 3},
  { name: 'Html/CSS', YoE: 2},
  { name: 'JavaScript', YoE: 2}, 
  { name: 'PHP', YoE: 1},
  { name: 'Swift', YoE: 2},
];

const LanguageChart = () => {
  return (
    <div style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
      <BarChart width={730} height={350} data={ChartData}>
        <CartesianGrid strokeDasharray="5 5" stroke="#ddd" />
        <XAxis dataKey="name" stroke="#777" />
        <YAxis stroke="#777" />
        <Tooltip 
          content={<CustomToolTip />} 
          cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} 
        />
        <Legend />
        <Bar 
          dataKey="YoE" 
          fill="url(#gradientColor)" 
          animationDuration={1500} 
          barSize={30} 
        />
        <defs>
          <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(48, 79, 180, 0.87)" />
            <stop offset="100%" stopColor="rgba(233, 30, 99, 0.87)" />
          </linearGradient>
        </defs>
      </BarChart>
    </div>
  );
};

export default LanguageChart;
