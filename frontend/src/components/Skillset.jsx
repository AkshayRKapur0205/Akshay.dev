import React, { useState, useEffect, useRef } from 'react';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import './Skillset.css';

import SpiderChart from "../components/spiderChart";
import RadicalBarChartComponent from "../components/RadicalBarChartComponent";

const Skillset = () => {
  const [animateBorder, setAnimateBorder] = useState(false);
  const borderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimateBorder(entry.isIntersecting); // true when in view
      },
      {
        threshold: 0.5, // fire when 50% of the element is visible
      }
    );

    if (borderRef.current) {
      observer.observe(borderRef.current);
    }
  }, []);

  return (
    
    <div className="outer-component"> 
      <div ref={borderRef} className={`${animateBorder ? 'border-div' : 'place-holder'}`}>
        <span className='border'></span> {/* This is here for the animated border do not remove*/}
        <h1 className='skillSetTitle'>Skillsets</h1>
        <div className="rowGraph">
          <div className='spiderchart'>
            <h3>Tech Competencies Map</h3>
            <SpiderChart />
          </div>
        </div>
        <div className='rowGraph'>
          <div className='chart'>
            <h3 style={{textAlign: "center"}}>Tech Experince Map</h3>
            <SpiderChart />
          </div>
          <div className='chart'>
            <div style={{display: "flex", flexDirection: "column"}}>
              <h3 style={{textAlign: "center"}}>Leetcode Questions Answered</h3>
              <RadicalBarChartComponent />
            </div>
            
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Skillset;
