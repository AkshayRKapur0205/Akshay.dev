import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

// Sample data for Leetcode questions
const data = [
  { name: 'Hard', Completed: 6, fill: '#F75A5A' }, // Example number of easy questions
  { name: 'Medium', Completed: 148, fill: '#FFD63A' }, // Example number of medium questions
  { name: 'Easy', Completed: 61, fill: '#6DE1D2' }, // Example number of hard questions
];

const RadialBarChartComponent = () => {
  return (
    <RadialBarChart 
      width={430} 
      height={250} 
      innerRadius="20%" 
      outerRadius="100%" 
      data={data} 
      startAngle={180} 
      endAngle={0}
    >
      <RadialBar 
        minAngle={15} 
        label={{ fill: '#666', position: 'insideStart' }} 
        clockWise={true} 
        dataKey='Completed' 
      />
      <Legend 
        iconSize={10} 
        width={120} 
        height={140} 
        layout='vertical' 
        verticalAlign='middle' 
        align="right" 
      />
      <Tooltip/>
    </RadialBarChart>
  );
};

export default RadialBarChartComponent;
