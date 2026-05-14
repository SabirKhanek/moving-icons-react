import { useState } from 'react';
import './UserCog.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function UserCog({
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
    	aria-label="user-cog"
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
    		<g className={`cog-group${isAnimating ? ' animate' : ''}`} >
    			<circle cx="18" cy="15" r="3" />
    			<path d="m21.7 16.4-.9-.3" />
    			<path d="m15.2 13.9-.9-.3" />
    			<path d="m16.6 18.7.3-.9" />
    			<path d="m19.1 12.2.3-.9" />
    			<path d="m19.6 18.7-.4-1" />
    			<path d="m16.8 12.3-.4-1" />
    			<path d="m14.3 16.6 1-.4" />
    			<path d="m20.7 13.8 1-.4" />
    		</g>
    		<circle cx="9" cy="7" r="4" />
    		<path d="M10 15H6a4 4 0 0 0-4 4v2" />
    	</svg>
    </div>
  );
}
