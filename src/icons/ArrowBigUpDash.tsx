import { useState, useRef } from 'react';
import './ArrowBigUpDash.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ArrowBigUpDash({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 200);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="arrow-big-up-dash" role="img" onMouseEnter={handleMouseEnter}>
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
    		<path className={`${isAnimating ? 'animate-dash' : ''}`} d="M9 19h6" />
    		<path className={`${isAnimating ? 'animate-arrow' : ''}`} d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
    	</svg>
    </div>
  );
}
