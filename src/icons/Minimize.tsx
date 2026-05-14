import { useState } from 'react';
import './Minimize.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Minimize({
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
    	aria-label="minimize"
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
    		<path d="M8 3v3a2 2 0 0 1-2 2H3" className={`${isAnimating ? 'top-left' : ''}`} />
    		<path d="M21 8h-3a2 2 0 0 1-2-2V3" className={`${isAnimating ? 'top-right' : ''}`} />
    		<path d="M3 16h3a2 2 0 0 1 2 2v3" className={`${isAnimating ? 'bottom-left' : ''}`} />
    		<path d="M16 21v-3a2 2 0 0 1 2-2h3" className={`${isAnimating ? 'bottom-right' : ''}`} />
    	</svg>
    </div>
  );
}
