import { useState, useRef } from 'react';
import './RadioTower.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function RadioTower({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="radio-tower" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`radio-tower-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" className="radio-level radio-line-3" />
    		<path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" className="radio-level radio-line-2" />
    		<circle cx="12" cy="9" r="2" className="radio-level radio-line-1" />
    		<path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" className="radio-level radio-line-2" />
    		<path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" className="radio-level radio-line-3" />
    		<path d="M9.5 18h5" className="tower-base" />
    		<path d="m8 22 4-11 4 11" className="tower-base" />
    	</svg>
    </div>
  );
}
