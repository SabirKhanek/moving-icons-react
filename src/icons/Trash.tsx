import { useState } from 'react';
import './Trash.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Trash({
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
    	aria-label="trash"
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
    		<g className={`${isAnimating ? 'is-animated' : ''}`}>
    			<path d="M3 6h18" />
    			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    		</g>
    		<path d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8" className={`${isAnimating ? 'animate-path' : ''}`} />
    	</svg>
    </div>
  );
}
