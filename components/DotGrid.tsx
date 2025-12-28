
import React from 'react';

interface DotGridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({ rows = 4, cols = 4, className = "" }) => {
  return (
    <div className={`grid gap-2 ${className}`} style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
      ))}
    </div>
  );
};
