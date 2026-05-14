import { useState, useRef } from 'react';
import './PointerOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function PointerOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="pointer-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`pointer-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" />
    		<path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" />
    		<path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" />
    		<path
    			d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"
    		/>
    		<path d="M6 6v8" />
    		<path d="m2 2 20 20" />
    	</svg>
    </div>
  );
}
