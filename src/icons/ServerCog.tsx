import { useState } from 'react';
import './ServerCog.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ServerCog({
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
    	aria-label="server-cog"
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
    		<path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
    		<path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
    		<path d="M6 6h.01" />
    		<path d="M6 18h.01" />
    		<g className={`cog-group${isAnimating ? ' animate' : ''}`} >
    			<circle cx="12" cy="12" r="3" />
    			<path d="m15.7 13.4-.9-.3" />
    			<path d="m9.2 10.9-.9-.3" />
    			<path d="m10.6 15.7.3-.9" />
    			<path d="m13.6 15.7-.4-1" />
    			<path d="m10.8 9.3-.4-1" />
    			<path d="m8.3 13.6 1-.4" />
    			<path d="m14.7 10.8 1-.4" />
    			<path d="m13.4 8.3-.3.9" />
    		</g>
    	</svg>
    </div>
  );
}
