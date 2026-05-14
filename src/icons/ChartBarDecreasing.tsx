import { useState, useRef } from 'react';
import './ChartBarDecreasing.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ChartBarDecreasing({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    timerRef.current = setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="chart-bar-decreasing" role="img" onMouseEnter={handleMouseEnter}>
    	<svg
    		xmlns="http://www.w3.org/2000/svg"
    		width={size}
    		height={size}
    		viewBox="0 0 24 24"
    		fill="none"
    		stroke={color}
    		strokeWidth={strokeWidth}
    		strokeLinecap="round"
    		strokeLinejoin="round"
    		className={`chart-bar-decreasing-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M3 3v16a2 2 0 0 0 2 2h16" className="frame" />
    		<path d="M7 11h8" className="bar bar-1" />
    		<path d="M7 16h3" className="bar bar-2" />
    		<path d="M7 6h12" className="bar bar-0" />
    	</svg>
    </div>
  );
}
