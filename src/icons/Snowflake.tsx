import { useState, useRef } from 'react';
import './Snowflake.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Snowflake({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="snowflake" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`snowflake-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="m10 20-1.25-2.5L6 18" />
    		<path d="M10 4 8.75 6.5 6 6" />
    		<path d="m14 20 1.25-2.5L18 18" />
    		<path d="m14 4 1.25 2.5L18 6" />
    		<path d="m17 21-3-6h-4" />
    		<path d="m17 3-3 6 1.5 3" />
    		<path d="M2 12h6.5L10 9" />
    		<path d="m20 10-1.5 2 1.5 2" />
    		<path d="M22 12h-6.5L14 15" />
    		<path d="m4 10 1.5 2L4 14" />
    		<path d="m7 21 3-6-1.5-3" />
    		<path d="m7 3 3 6h4" />
    	</svg>
    </div>
  );
}
