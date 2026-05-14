import { useState } from 'react';
import './RefreshCcwDot.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function RefreshCcwDot({
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
    	aria-label="refresh-ccw-dot"
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
    		className={`refresh-ccw-dot-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M3 2v6h6" />
    		<path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
    		<path d="M21 22v-6h-6" />
    		<path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    		<circle cx="12" cy="12" r="1" />
    	</svg>
    </div>
  );
}
