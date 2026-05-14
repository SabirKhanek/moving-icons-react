import { useState, useRef } from 'react';
import './UserRoundX.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function UserRoundX({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="user-round-x" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`user-round-x-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M2 21a8 8 0 0 1 11.873-7" className="user-round-path" />
    		<circle cx="10" cy="8" r="5" className="user-round-circle" />
    		<path d="m22 17-5 5" className="diagonal-1" />
    		<path d="m17 17 5 5" className="diagonal-2" />
    	</svg>
    </div>
  );
}
