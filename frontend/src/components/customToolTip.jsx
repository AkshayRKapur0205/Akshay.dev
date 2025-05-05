// CustomToolTip.js
import React from 'react';

const CustomToolTip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #888"
      }}>
        <p><strong>{label}</strong></p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.stroke }}>{entry.name}: {entry.value}</p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomToolTip;