import { useState, useRef } from 'react';
import './Dice5.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Dice5({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="dice-5" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`dice-5-icon${isAnimating ? ' animate' : ''}`} >
    		<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    		<path d="M16 8h.01" />
    		<path d="M8 8h.01" />
    		<path d="M8 16h.01" />
    		<path d="M16 16h.01" />
    		<path d="M12 12h.01" />
    	</svg>
    </div>
  );
}
