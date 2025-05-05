import * as React from 'react';
import { pieArcLabelClasses, PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 3, label: 'Hard' },
  { id: 1, value: 148, label: 'Medium' },
  { id: 2, value: 61, label: 'Easy' },
];

export default function CSSAnimationCustomization() {
  return (
    <PieChart
      series={[{ data, arcLabel: (item) => `${item.value}` }]}
      width={300}
      height={500}
      hideLegend
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          filter: 'drop-shadow(1px 1px 2px black)',
          animationName: 'animate-pie-arc-label',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: 'alternate',
          '@keyframes animate-pie-arc-label': {
            '0%': { fill: 'red' },
            '33%': { fill: 'orange' },
            '66%': { fill: 'violet' },
            '100%': { fill: 'red' },
          },
        },
        [`& .${pieArcLabelClasses.root}.${pieArcLabelClasses.animate}`]: {
          animationDuration: '5s',
        },
      }}
    />
  );
}