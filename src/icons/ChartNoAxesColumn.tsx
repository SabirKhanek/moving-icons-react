import { useState, useRef } from 'react';
import './ChartNoAxesColumn.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ChartNoAxesColumn({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="chart-no-axes-column" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`chart-no-axes-column-icon${isAnimating ? ' animate' : ''}`} >
    		<line x1="18" y1="20" x2="18" y2="10" className="column column-2" />
    		<line x1="12" y1="20" x2="12" y2="4" className="column column-1" />
    		<line x1="6" y1="20" x2="6" y2="14" className="column column-0" />
    	</svg>
    </div>
  );
}
