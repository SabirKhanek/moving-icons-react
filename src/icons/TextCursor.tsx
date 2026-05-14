import { useState } from 'react';
import './TextCursor.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function TextCursor({
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
    	aria-label="text-cursor"
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
    		className={`text-cursor-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
    		<path d="M7 22h1a4 4 0 0 0 4-4v-1" />
    		<path d="M7 2h1a4 4 0 0 1 4 4v1" />
    	</svg>
    </div>
  );
}
