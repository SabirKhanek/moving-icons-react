import { useState } from 'react';
import './Shrink.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Shrink({
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
    	aria-label="shrink"
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
    		<path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" className={`${isAnimating ? 'animate3' : ''}`} />
    		<path d="M9 19.8V15m0 0H4.2M9 15l-6 6" className={`${isAnimating ? 'animate2' : ''}`} />
    		<path d="M15 4.2V9m0 0h4.8M15 9l6-6" className={`${isAnimating ? 'animate1' : ''}`} />
    		<path d="M9 4.2V9m0 0H4.2M9 9 3 3" className={`${isAnimating ? 'animate0' : ''}`} />
    	</svg>
    </div>
  );
}
