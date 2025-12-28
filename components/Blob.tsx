
import React from 'react';

interface BlobProps {
  color: string;
  className?: string;
  id?: string;
}

export const Blob: React.FC<BlobProps> = ({ color, className = "", id }) => {
  return (
    <svg 
      id={id}
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`blob-animation ${className}`}
    >
      <path 
        fill={color} 
        d="M45.7,-57.8C59.6,-48.5,71.5,-34.5,76.5,-18.4C81.5,-2.2,79.5,16,71.6,31.5C63.7,46.9,49.8,59.5,33.9,67.3C18,75.1,0.1,78.2,-17.1,74.1C-34.3,70,-50.8,58.8,-62,43.5C-73.2,28.2,-79.1,8.9,-77.1,-10C-75.1,-28.9,-65.2,-47.3,-49.6,-56.1C-34,-64.9,-17,-64.1,0.1,-64.2C17.2,-64.3,31.8,-67.2,45.7,-57.8Z" 
        transform="translate(100 100)" 
      />
    </svg>
  );
};
