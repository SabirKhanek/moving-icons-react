import { useState, useRef } from 'react';
import './ChartNoAxesColumnDecreasing.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ChartNoAxesColumnDecreasing({
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
    	aria-label="chart-no-axes-column-decreasing"
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
    		className={`chart-no-axes-column-decreasing-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M12 20V10" className="column column-1" />
    		<path d="M18 20v-4" className="column column-2" />
    		<path d="M6 20V4" className="column column-0" />
    	</svg>
    </div>
  );
}
