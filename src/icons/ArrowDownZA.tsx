import { useState } from 'react';
import './ArrowDownZA.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ArrowDownZA({
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
    	aria-label="arrow-down-z-a"
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
    	>
    		<path d="m3 16 4 4 4-4" />
    		<path d="M7 20V4" />
    		<path className={`swap-group-up${isAnimating ? ' animate' : ''}`} d="M15 4h5l-5 6h5" />
    		<g className={`swap-group-down${isAnimating ? ' animate' : ''}`} >
    			<path d="M20 18h-5" />
    			<path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
    		</g>
    	</svg>
    </div>
  );
}
