import { useState, useRef } from 'react';
import './MonitorOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MonitorOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="monitor-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`monitor-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
    		<path d="M22 15V5a2 2 0 0 0-2-2H9" />
    		<path d="M8 21h8" />
    		<path d="M12 17v4" />
    		<path d="m2 2 20 20" />
    	</svg>
    </div>
  );
}
