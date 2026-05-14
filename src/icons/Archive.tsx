import { useState } from 'react';
import './Archive.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Archive({
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
    	aria-label="archive"
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
    		<rect width="20" height="5" x="2" y="3" rx="1" className={`${isAnimating ? 'animate-rect' : ''}`} />
    		<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" className={`${isAnimating ? 'animate-path' : ''}`} />
    		<path d="M10 12h4" className={`${isAnimating ? 'animate-path' : ''}`} />
    	</svg>
    </div>
  );
}
