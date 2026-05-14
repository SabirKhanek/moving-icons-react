import { useState } from 'react';
import './ChartPie.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ChartPie({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);

  const handleMouseEnter = () => setIsAnimating(true);
  const handleMouseLeave = () => setIsAnimating(false);

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="chart-pie"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    	onMouseLeave={handleMouseLeave}
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
    		className={`chart-pie-icon${isAnimating ? ' animate' : ''}`} >
    		<path
    			d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
    			className="pie-slice"
    		/>
    		<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    	</svg>
    </div>
  );
}
