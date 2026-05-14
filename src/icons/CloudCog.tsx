import { useState } from 'react';
import './CloudCog.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CloudCog({
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
    	aria-label="cloud-cog"
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
    		<path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
    		<g className={`cog-group${isAnimating ? ' animate' : ''}`} >
    			<circle cx="12" cy="17" r="3" />
    			<path d="m15.7 18.4-.9-.3" />
    			<path d="m9.2 15.9-.9-.3" />
    			<path d="m10.6 20.7.3-.9" />
    			<path d="m13.1 14.2.3-.9" />
    			<path d="m13.6 20.7-.4-1" />
    			<path d="m10.8 14.3-.4-1" />
    			<path d="m8.3 18.6 1-.4" />
    			<path d="m14.7 15.8 1-.4" />
    		</g>
    	</svg>
    </div>
  );
}
