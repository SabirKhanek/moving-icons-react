import { useState, useRef } from 'react';
import './TouchpadOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function TouchpadOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="touchpad-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`touchpad-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" />
    		<path d="M2 14h12" />
    		<path d="M22 14h-2" />
    		<path d="M12 20v-6" />
    		<path d="m2 2 20 20" />
    		<path d="M22 16V6a2 2 0 0 0-2-2H10" />
    	</svg>
    </div>
  );
}
