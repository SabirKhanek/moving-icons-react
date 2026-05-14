import { useState, useRef } from 'react';
import './ArrowLeftRight.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ArrowLeftRight({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="arrow-left-right" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`${isAnimating ? 'animate' : ''}`}
    	>
    		<path d="M8 3L4 7l4 4" className={`left-arrow${isAnimating ? ' animate' : ''}`} />
    		<path d="M4 7h16" className={`left-arrow${isAnimating ? ' animate' : ''}`} />
    		<path d="M16 21l4-4-4-4" className={`right-arrow${isAnimating ? ' animate' : ''}`} />
    		<path d="M20 17H4" className={`right-arrow${isAnimating ? ' animate' : ''}`} />
    	</svg>
    </div>
  );
}
