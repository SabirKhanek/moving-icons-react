import { useState, useRef } from 'react';
import './AlarmClockCheck.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function AlarmClockCheck({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="alarm-clock-check" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`alarm-clock-check-icon${isAnimating ? ' animate' : ''}`} >
    		<circle cx="12" cy="13" r="8" />
    		<path d="M5 3 2 6" />
    		<path d="m22 6-3-3" />
    		<path d="M6.38 18.7 4 21" />
    		<path d="M17.64 18.67 20 21" />
    		<path d="m9 13 2 2 4-4" className="check-path" />
    	</svg>
    </div>
  );
}
