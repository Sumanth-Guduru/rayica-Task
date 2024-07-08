import React, { useState, useEffect } from 'react';


const CircularProgress = ({ size, strokeWidth, percentage }) => {
  const [offset, setOffset] = useState(0);

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-blue-500"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="#28282A"
          fill="transparent"
        />
        <circle
          className="text-blue-500"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          transform={`rotate(-90 ${center} ${center})`}
        />
        
      </svg>
    </div>
  );
};

export default CircularProgress;
