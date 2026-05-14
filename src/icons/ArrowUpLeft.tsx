import { useState, useRef } from 'react';
import './ArrowUpLeft.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ArrowUpLeft({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="arrow-up-left" role="img" onMouseEnter={handleMouseEnter}>
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
    		<path d="M7 17V7h10" className={`${isAnimating ? 'head' : ''}`} />
    		<path d="M12 12 L7 7" className={`${isAnimating ? 'head' : ''}`} />
    		<path d="M17 17 L12 12" />
    	</svg>
    </div>
  );
}
