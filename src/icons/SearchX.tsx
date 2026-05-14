import { useState, useRef } from 'react';
import './SearchX.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function SearchX({
  color = 'currentColor',
  size = 24,
  strokeWidth = 2,
  animate = false,
  className = '',
}: IconProps) {
  const [isAnimating, setIsAnimating] = useState(animate);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    timerRef.current = setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="search-x" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`search-x-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="m13.5 8.5-5 5" className="diagonal-1" />
    		<path d="m8.5 8.5 5 5" className="diagonal-2" />
    		<circle cx="11" cy="11" r="8" />
    		<path d="m21 21-4.3-4.3" />
    	</svg>
    </div>
  );
}
