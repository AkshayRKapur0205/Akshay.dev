import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Define the data
const data = [
  {
    name: 'CS Domains',
    algorithms: 3.5,
    systems: 1.5,
    ai_ml: 1.5,
  },
  {
    name: 'Frameworks & Languages',
    java: 3,
    python: 3,
    cpp: 2.5,
  },
  {
    name: 'Tools & Platforms',
    docker: 2,
    aws: 2,
    git: 3,
  },
  {
    name: 'Concepts',
    cloudComputing: 2,
    agile: 2,
    ar: 1.5,
  },
];

export default function GroupedSkillChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* CS Domains */}
        <Bar dataKey="algorithms" fill="#8884d8" />
        <Bar dataKey="systems" fill="#82ca9d" />
        <Bar dataKey="ai_ml" fill="#ff7300" />
        {/* Frameworks & Languages */}
        <Bar dataKey="java" fill="#8884d8" />
        <Bar dataKey="python" fill="#82ca9d" />
        <Bar dataKey="cpp" fill="#ff7300" />
        {/* Tools & Platforms */}
        <Bar dataKey="docker" fill="#8884d8" />
        <Bar dataKey="aws" fill="#82ca9d" />
        <Bar dataKey="git" fill="#ff7300" />
        {/* Concepts */}
        <Bar dataKey="cloudComputing" fill="#8884d8" />
        <Bar dataKey="agile" fill="#82ca9d" />
        <Bar dataKey="ar" fill="#ff7300" />
      </BarChart>
    </ResponsiveContainer>
  );
}
