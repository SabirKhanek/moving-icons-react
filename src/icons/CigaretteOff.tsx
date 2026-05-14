import { useState, useRef } from 'react';
import './CigaretteOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CigaretteOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="cigarette-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`cigarette-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
    		<path d="M18 8c0-2.5-2-2.5-2-5" />
    		<path d="m2 2 20 20" />
    		<path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
    		<path d="M22 8c0-2.5-2-2.5-2-5" />
    		<path d="M7 12v4" />
    	</svg>
    </div>
  );
}
