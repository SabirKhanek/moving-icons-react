import { useState } from 'react';
import './BetweenHorizontalStart.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BetweenHorizontalStart({
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
    	aria-label="between-horizontal-start"
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
    		<rect width="13" height="7" x="8" y="3" rx="1" className={`rect-top${isAnimating ? ' animate' : ''}`}  />
    		<path d="m2 9 3 3-3 3" className={`arrow${isAnimating ? ' animate' : ''}`}  />
    		<rect width="13" height="7" x="8" y="14" rx="1" className={`rect-bottom${isAnimating ? ' animate' : ''}`}  />
    	</svg>
    </div>
  );
}
