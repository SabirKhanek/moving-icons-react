import { useState, useRef } from 'react';
import './Radar.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Radar({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="radar" role="img" onMouseEnter={handleMouseEnter}>
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
    	>
    		<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
    		<path d="M4 6h.01" />
    		<path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
    		<path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
    		<path d="M12 18h.01" />
    		<path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
    		<circle cx="12" cy="12" r="2" />
    		<path d="m13.41 10.59 5.66-5.66" className={`radar-icon${isAnimating ? ' animate' : ''}`} />
    	</svg>
    </div>
  );
}
