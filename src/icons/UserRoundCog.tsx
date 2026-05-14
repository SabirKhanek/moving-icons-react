import { useState } from 'react';
import './UserRoundCog.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function UserRoundCog({
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
    	aria-label="user-round-cog"
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
    		<path d="M2 21a8 8 0 0 1 10.434-7.62" />
    		<circle cx="10" cy="8" r="5" />
    		<g className={`cog-group${isAnimating ? ' animate' : ''}`} >
    			<circle cx="18" cy="18" r="3" />
    			<path d="m19.5 14.3-.4.9" />
    			<path d="m16.9 20.8-.4.9" />
    			<path d="m21.7 19.5-.9-.4" />
    			<path d="m15.2 16.9-.9-.4" />
    			<path d="m21.7 16.5-.9.4" />
    			<path d="m15.2 19.1-.9.4" />
    			<path d="m19.5 21.7-.4-.9" />
    			<path d="m16.9 15.2-.4-.9" />
    		</g>
    	</svg>
    </div>
  );
}
