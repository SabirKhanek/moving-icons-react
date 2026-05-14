import { useState } from 'react';
import './CalendarCog.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CalendarCog({
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
    	aria-label="calendar-settings"
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
    		className="calendar-cog-icon"
    	>
    		<path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    		<path d="M16 2v4" />
    		<path d="M3 10h18" />
    		<path d="M8 2v4" />
    		<g className={`cog-group${isAnimating ? ' animate' : ''}`} >
    			<path d="m15.2 16.9-.9-.4" />
    			<path d="m15.2 19.1-.9.4" />
    			<path d="m16.9 15.2-.4-.9" />
    			<path d="m16.9 20.8-.4.9" />
    			<path d="m19.5 14.3-.4.9" />
    			<path d="m19.5 21.7-.4-.9" />
    			<path d="m21.7 16.5-.9.4" />
    			<path d="m21.7 19.5-.9-.4" />
    			<circle cx="18" cy="18" r="3" />
    		</g>
    	</svg>
    </div>
  );
}
