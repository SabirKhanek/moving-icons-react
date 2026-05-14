import { useState } from 'react';
import './BetweenVerticalStart.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BetweenVerticalStart({
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
    	aria-label="between-vertical-start"
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
    		<rect width="7" height="13" x="3" y="8" rx="1" className={`rect-left${isAnimating ? ' animate' : ''}`}  />
    		<path d="m15 2-3 3-3-3" className={`arrow${isAnimating ? ' animate' : ''}`}  />
    		<rect width="7" height="13" x="14" y="8" rx="1" className={`rect-right${isAnimating ? ' animate' : ''}`}  />
    	</svg>
    </div>
  );
}
