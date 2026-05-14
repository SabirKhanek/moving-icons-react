import { useState } from 'react';
import './Maximize2.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Maximize2({
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
    	aria-label="maximize-2"
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
    		<polyline points="15 3 21 3 21 9" className={`${isAnimating ? 'top-right' : ''}`} />
    		<polyline points="9 21 3 21 3 15" className={`${isAnimating ? 'bottom-left' : ''}`} />
    		<line x1="21" x2="14" y1="3" y2="10" className={`${isAnimating ? 'top-right' : ''}`} />
    		<line x1="3" x2="10" y1="21" y2="14" className={`${isAnimating ? 'bottom-left' : ''}`} />
    	</svg>
    </div>
  );
}
