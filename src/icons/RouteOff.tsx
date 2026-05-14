import { useState, useRef } from 'react';
import './RouteOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function RouteOff({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="route-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`route-off${isAnimating ? ' animate' : ''}`} >
    		<circle cx="6" cy="19" r="3" />
    		<path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
    		<path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
    		<path d="m2 2 20 20" />
    		<path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
    		<path d="M15 5h-4.3" />
    		<circle cx="18" cy="5" r="3" />
    	</svg>
    </div>
  );
}
