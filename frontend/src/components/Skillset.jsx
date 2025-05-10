import React, { useState, useEffect, useRef } from 'react';
import { Unstable_RadarChart as RadarChart } from '@mui/x-charts/RadarChart';
import './Skillset.css';

import SpiderChart from "../components/spiderChart";
import RadicalBarChartComponent from "../components/RadicalBarChartComponent";
import LanguageBarChart from "../components/LanguageChart";
import FlexTable from '../components/FlexTable';

const Skillset = () => {
  const [animateBorder, setAnimateBorder] = useState(false);
  const borderRef = useRef(null);
  
  const [showGraphs, setShowGraphs] = React.useState(false);
  const [fadeInGraphs, setFadeInGraphs] = React.useState(false);

  useEffect(() => {
    let timer;

    if (animateBorder) {
      timer = setTimeout(() => {
        setShowGraphs(true);
        setTimeout(() => setFadeInGraphs(true), 50); // trigger fade-in class shortly after mount
      }, 100); // delay before rendering
    } else {
      setFadeInGraphs(false); // start fade out
      setTimeout(() => setShowGraphs(false), 600); 
    }

    return () => clearTimeout(timer);
  }, [animateBorder]);

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
      <img
            src="/skillsets.png"
            alt="error"
            className={`fade-in ${animateBorder ? "visible" : ""}`}
            style={{ width: "10%", height: "10%", marginTop: "0%", alignSelf: 'center'}}
            />
        <span className='border'></span> {/* This is here for the animated border do not remove*/}
        {/* <h1 className='skillSetTitle'>Skillsets</h1> */}
        {showGraphs && (
          <div className={`graph-container ${fadeInGraphs ? 'visible' : ''}`}>
            <div className="rowGraph">
              <div className='chart' style={{ textAlign: "center" }}>
                <h3>Language Experience</h3>
                <LanguageBarChart />
                <h3>Technical Experience Map</h3>
                <SpiderChart />
              </div>
              <FlexTable />
            </div>
          </div>
        )}
        
        {/* <div className='rowGraph'>
          <div className='chart'>
            <h3 style={{textAlign: "center"}}>Tech Experience Map</h3>
            <SpiderChart />
          </div>
          <div className='chart'>
            <div style={{display: "flex", flexDirection: "column"}}>
              <h3 style={{textAlign: "center"}}>Leetcode Questions Answered</h3>
              <RadicalBarChartComponent />
            </div>
           <GraphChart />
          </div>
          
        </div> */}
        
        
      </div>
    </div>
  );
};

export default Skillset;
