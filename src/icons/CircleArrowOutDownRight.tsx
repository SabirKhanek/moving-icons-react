import { useState, useRef } from 'react';
import './CircleArrowOutDownRight.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CircleArrowOutDownRight({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="circle-arrow-out-down-right"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    >
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
    		<path d="M12 22a10 10 0 1 1 10-10" />
    		<g className={`arrow${isAnimating ? ' animate' : ''}`} >
    			<path d="M22 22 12 12" />
    			<path d="M22 16v6h-6" />
    		</g>
    	</svg>
    </div>
  );
}
