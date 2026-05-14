import { useState, useRef } from 'react';
import './ChartColumnIncreasing.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ChartColumnIncreasing({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="chart-column-increasing"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    >
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
    		className={`chart-column-increasing-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M13 17V9" className="column column-1" />
    		<path d="M18 17V5" className="column column-2" />
    		<path d="M3 3v16a2 2 0 0 0 2 2h16" className="frame" />
    		<path d="M8 17v-3" className="column column-0" />
    	</svg>
    </div>
  );
}
