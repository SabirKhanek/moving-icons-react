import { useState, useRef } from 'react';
import './CircleArrowOutDownLeft.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CircleArrowOutDownLeft({
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
    	aria-label="circle-arrow-out-down-left"
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
    		<path d="M2 12a10 10 0 1 1 10 10" />
    		<g className={`arrow${isAnimating ? ' animate' : ''}`} >
    			<path d="m2 22 10-10" />
    			<path d="M8 22H2v-6" />
    		</g>
    	</svg>
    </div>
  );
}
