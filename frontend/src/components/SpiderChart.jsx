import React from 'react';
import CustomToolTip from "../components/CustomToolTip";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from 'recharts';

const data = [
  {
    subject: 'Game Development',
    A: 22.00,
    B: 65.75,
    C: 2.25,
    
  },
  {
    subject: 'AR/VR',
    A: 88.00,
    B: 10.75,
    C: 1.25,
    
  },
  {
    subject: 'Backend Development',
    A: 75.75,
    B: 3.00,
    C: 21.25,
    
  },
  {
    subject: 'Full Stack Development',
    A: 5.50,
    B: 59.75,
    C: 24.75,
  },
  {
    subject: 'IOS/Mobile',
    A: 0.0,
    B: 25.5,
    C: 74.5,
  },
  {
    subject: 'AI/ML',
    A: 5.25,
    B: 40.75,
    C: 54,

  },
];

const CustomRadarChart = () => {
  return (
    <RadarChart outerRadius={120} width={730} height={350} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 110]} />
      <Radar name="Professional" dataKey="A" strokeWidth={3} stroke="#FFD63A" fill="#FFD63A" fillOpacity={0} dot/>
      <Radar name="Personal" dataKey="B" strokeWidth={3} stroke="#F75A5A" fill="#F75A5A" fillOpacity={0} dot/>
      <Radar name="Academia" dataKey="C" strokeWidth={3} stroke="#6DE1D2" fill="#6DE1D2" fillOpacity={0} dot/>
      <Legend />
      <Tooltip content={<CustomToolTip />} />
    </RadarChart>
  );
};

export default CustomRadarChart;
