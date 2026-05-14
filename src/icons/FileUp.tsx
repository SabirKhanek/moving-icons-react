import { useState } from 'react';
import './FileUp.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function FileUp({
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
    	onMouseEnter={handleMouseEnter}
    	onMouseLeave={handleMouseLeave}
    	aria-label="file-up"
    	role="img"
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
    		<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    		<path d="M14 2v4a2 2 0 0 0 2 2h4" />
    		<g className={`${isAnimating ? 'animate' : ''}`}>
    			<path d="M12 12v6" />
    			<path d="m15 15-3-3-3 3" />
    		</g>
    	</svg>
    </div>
  );
}
