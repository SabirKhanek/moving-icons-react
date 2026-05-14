import { useState, useRef } from 'react';
import './Tornado.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Tornado({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 3300);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="tornado" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`${isAnimating ? 'animate' : ''}`}
    	>
    		<path d="M21 4H3" className="line line-1" />
    		<path d="M18 8H6" className="line line-2" />
    		<path d="M19 12H9" className="line line-3" />
    		<path d="M16 16h-6" className="line line-4" />
    		<path d="M11 20H9" className="line line-5" />
    	</svg>
    </div>
  );
}
