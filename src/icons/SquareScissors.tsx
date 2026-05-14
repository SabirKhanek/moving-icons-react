import { useState, useRef } from 'react';
import './SquareScissors.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function SquareScissors({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="square-scissors" role="img" onMouseEnter={handleMouseEnter}>
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
    		<rect width="20" height="20" x="2" y="2" rx="2" />
    		<g className="blade-top">
    			<circle cx="8" cy="8" r="2" />
    			<path d="M9.414 9.414 12 12" />
    			<path d="M14.8 14.8 18 18" />
    		</g>
    
    		<g className="blade-bottom">
    			<circle cx="8" cy="16" r="2" />
    			<path d="m18 6-8.586 8.586" />
    		</g>
    	</svg>
    </div>
  );
}
