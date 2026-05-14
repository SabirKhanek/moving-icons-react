import { useState } from 'react';
import './Expand.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Expand({
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
    	aria-label="expand"
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
    		<path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" className={`corner top-right${isAnimating ? ' animate' : ''}`} />
    		<path d="M3 16.2V21m0 0h4.8M3 21l6-6" className={`corner bottom-left${isAnimating ? ' animate' : ''}`} />
    		<path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" className={`corner top-left${isAnimating ? ' animate' : ''}`} />
    		<path d="M3 7.8V3m0 0h4.8M3 3l6 6" className={`corner bottom-right${isAnimating ? ' animate' : ''}`} />
    	</svg>
    </div>
  );
}
