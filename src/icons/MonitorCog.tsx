import { useState } from 'react';
import './MonitorCog.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MonitorCog({
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
    	aria-label="monitor-cog"
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
    		<path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
    		<path d="M8 21h8" />
    		<path d="M12 17v4" />
    		<g className={`cog-group${isAnimating ? ' animate' : ''}`} >
    			<path d="m15.2 4.9-.9-.4" />
    			<path d="m15.2 7.1-.9.4" />
    			<path d="m16.9 3.2-.4-.9" />
    			<path d="m16.9 8.8-.4.9" />
    			<path d="m19.5 2.3-.4.9" />
    			<path d="m19.5 9.7-.4-.9" />
    			<path d="m21.7 4.5-.9.4" />
    			<path d="m21.7 7.5-.9-.4" />
    			<circle cx="18" cy="6" r="3" />
    		</g>
    	</svg>
    </div>
  );
}
