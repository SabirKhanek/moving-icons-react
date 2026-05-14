import { useState } from 'react';
import './RotateCcwKey.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function RotateCcwKey({
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
    	aria-label="rotate-ccw-key"
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
    		className={`rotate-ccw-key-icon${isAnimating ? ' animate' : ''}`} >
    		<g className={`arrow${isAnimating ? ' animate' : ''}`} >
    			<path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
    			<path d="M3 3v5h5" />
    		</g>
    		<g className={`key${isAnimating ? ' animate' : ''}`} >
    			<path d="m14.5 9.5 1 1" />
    			<path d="m15.5 8.5-4 4" />
    			<circle cx="10" cy="14" r="2" />
    		</g>
    	</svg>
    </div>
  );
}
