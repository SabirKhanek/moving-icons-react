import { useState } from 'react';
import './MonitorUp.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MonitorUp({
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
    	onMouseEnter={handleMouseEnter}
    	onMouseLeave={handleMouseLeave}
    	aria-label="monitor-up"
    	role="img"
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
    	>
    		<g className={`${isAnimating ? 'animate' : ''}`}>
    			<path d="m9 10 3-3 3 3" />
    			<path d="M12 13V7" />
    		</g>
    		<rect width="20" height="14" x="2" y="3" rx="2" />
    		<path d="M12 17v4" />
    		<path d="M8 21h8" />
    	</svg>
    </div>
  );
}
