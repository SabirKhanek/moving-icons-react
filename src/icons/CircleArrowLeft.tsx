import { useState, useRef } from 'react';
import './CircleArrowLeft.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CircleArrowLeft({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="circle-arrow-left" role="img" onMouseEnter={handleMouseEnter}>
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
    		<circle cx="12" cy="12" r="10" />
    		<path d="M16 12H12" />
    		<path d="M12 12H8" className={`${isAnimating ? 'head' : ''}`} />
    		<path d="m12 8-4 4 4 4" className={`${isAnimating ? 'head' : ''}`} />
    	</svg>
    </div>
  );
}
