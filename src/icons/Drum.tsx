import { useState } from 'react';
import './Drum.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Drum({
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
    	aria-label="drum"
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
    		className={`drum-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="m2 2 8 8" className="drumstick-1" />
    		<path d="m22 2-8 8" className="drumstick-2" />
    		<ellipse cx="12" cy="9" rx="10" ry="5" />
    		<path d="M7 13.4v7.9" />
    		<path d="M12 14v8" />
    		<path d="M17 13.4v7.9" />
    		<path d="M2 9v8a10 5 0 0 0 20 0V9" />
    	</svg>
    </div>
  );
}
