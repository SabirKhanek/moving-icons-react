import { useState } from 'react';
import './ArrowDown10.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ArrowDown10({
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
    	aria-label="arrow-down-1-0"
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
    		<g className={`swap-group-up${isAnimating ? ' animate' : ''}`} >
    			<path d="M17 10V4h-2" />
    			<path d="M15 10h4" />
    		</g>
    		<rect className={`swap-group-down${isAnimating ? ' animate' : ''}`} x="15" y="14" width="4" height="6" ry="2" />
    	</svg>
    </div>
  );
}
