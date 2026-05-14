import { useState, useRef } from 'react';
import './FileChartColumn.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function FileChartColumn({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="file-chart-column" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`file-chart-column-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    		<path d="M14 2v4a2 2 0 0 0 2 2h4" />
    		<path d="M8 18v-1" className="column column-0" />
    		<path d="M12 18v-6" className="column column-1" />
    		<path d="M16 18v-3" className="column column-2" />
    	</svg>
    </div>
  );
}
