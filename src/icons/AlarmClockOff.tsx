import { useState, useRef } from 'react';
import './AlarmClockOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function AlarmClockOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="alarm-clock-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`alarm-clock-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
    		<path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
    		<path d="m22 6-3-3" />
    		<path d="M6.26 18.67 4 21" />
    		<path d="m2 2 20 20" />
    		<path d="M4 4 2 6" />
    	</svg>
    </div>
  );
}
