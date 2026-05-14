import { useState, useRef } from 'react';
import './LogOut.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function LogOut({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} onMouseEnter={handleMouseEnter} aria-label="log-out" role="img">
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
    		<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    		<polyline points="16 17 21 12 16 7" className={`${isAnimating ? 'animate' : ''}`} />
    		<line x1="21" x2="9" y1="12" y2="12" className={`${isAnimating ? 'animate' : ''}`} />
    	</svg>
    </div>
  );
}
