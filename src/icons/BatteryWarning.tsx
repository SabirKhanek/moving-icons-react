import { useState, useRef } from 'react';
import './BatteryWarning.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BatteryWarning({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="battery-warning" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`battery-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M10 17h.01" className="battery-warning" />
    		<path d="M10 7v6" className="battery-warning" />
    		<path d="M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
    		<path d="M22 11v2" />
    		<path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    	</svg>
    </div>
  );
}
