import { useState } from 'react';
import './Minimize2.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Minimize2({
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
    	aria-label="minimize-2"
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
    		<polyline points="4 14 10 14 10 20" className={`${isAnimating ? 'bottom-left' : ''}`} />
    		<polyline points="20 10 14 10 14 4" className={`${isAnimating ? 'top-right' : ''}`} />
    		<line x1="14" x2="21" y1="10" y2="3" className={`${isAnimating ? 'top-right' : ''}`} />
    		<line x1="3" x2="10" y1="21" y2="14" className={`${isAnimating ? 'bottom-left' : ''}`} />
    	</svg>
    </div>
  );
}
