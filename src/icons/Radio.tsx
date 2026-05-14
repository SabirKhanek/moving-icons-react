import { useState, useRef } from 'react';
import './Radio.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Radio({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="radio" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`radio-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" className="radio-level radio-line-3" />
    		<path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" className="radio-level radio-line-2" />
    		<circle cx="12" cy="12" r="2" className="radio-level radio-line-1" />
    		<path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" className="radio-level radio-line-2" />
    		<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" className="radio-level radio-line-3" />
    	</svg>
    </div>
  );
}
