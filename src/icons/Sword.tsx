import { useState, useRef } from 'react';
import './Sword.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Sword({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="sword" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`sword-icon${isAnimating ? ' animate' : ''}`} >
    		<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    		<line x1="13" y1="19" x2="19" y2="13" />
    		<line x1="16" y1="16" x2="20" y2="20" />
    		<line x1="19" y1="21" x2="21" y2="19" />
    	</svg>
    </div>
  );
}
