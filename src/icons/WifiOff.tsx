import { useState, useRef } from 'react';
import './WifiOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function WifiOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="wifi-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`wifi-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M12 20h.01" />
    		<path d="M8.5 16.429a5 5 0 0 1 7 0" />
    		<path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
    		<path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
    		<path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
    		<path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
    		<path d="m2 2 20 20" />
    	</svg>
    </div>
  );
}
