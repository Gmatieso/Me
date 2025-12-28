
import React from 'react';

interface HighlightTextProps {
  children: React.ReactNode;
  color: string;
  className?: string;
  textColor?: string;
}

export const HighlightText: React.FC<HighlightTextProps> = ({ 
  children, 
  color, 
  className = "",
  textColor = "text-white"
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className={`relative z-10 px-2 py-0.5 ${textColor} font-bold`}>
        {children}
      </span>
      <div 
        className="absolute inset-0 z-0 transform -skew-x-2"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};
