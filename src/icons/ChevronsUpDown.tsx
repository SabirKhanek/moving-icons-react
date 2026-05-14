import { useState, useRef } from 'react';
import './ChevronsUpDown.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ChevronsUpDown({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="chevrons-up-down" role="img" onMouseEnter={handleMouseEnter}>
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
    		className="chevrons-up-down-icon"
    	>
    		<path d="m7 15 5 5 5-5" className={`${isAnimating ? 'chevron-down' : ''}`} />
    		<path d="m7 9 5-5 5 5" className={`${isAnimating ? 'chevron-up' : ''}`} />
    	</svg>
    </div>
  );
}
