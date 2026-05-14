import { useState, useRef } from 'react';
import './Battery.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Battery({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="battery" role="img" onMouseEnter={handleMouseEnter}>
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
    		<rect width="16" height="10" x="2" y="7" rx="2" ry="2" className="battery" />
    		<line x1="22" x2="22" y1="11" y2="13" className="battery" />
    	</svg>
    </div>
  );
}
