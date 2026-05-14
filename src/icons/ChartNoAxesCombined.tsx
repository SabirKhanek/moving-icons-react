import { useState, useRef } from 'react';
import './ChartNoAxesCombined.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ChartNoAxesCombined({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="chart-no-axes-combined"
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
    		className={`chart-no-axes-combined-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M4 18v3" className="column column-0" />
    		<path d="M8 14v7" className="column column-1" />
    		<path d="M12 16v5" className="column column-2" />
    		<path d="M16 14v7" className="column column-3" />
    		<path d="M20 10v11" className="column column-4" />
    		<path
    			d="M2 15l6.647-6.646a.5.5 0 0 1 .707 0L12.646 11.646a.5.5 0 0 0 .707 0L22 3"
    			className="line"
    		/>
    	</svg>
    </div>
  );
}
