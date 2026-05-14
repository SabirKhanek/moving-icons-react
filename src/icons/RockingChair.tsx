import { useState, useRef } from 'react';
import './RockingChair.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function RockingChair({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 2400);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="rocking chair" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`rocking-chair-icon${isAnimating ? ' animate' : ''}`} >
    		<polyline points="3.5 2 6.5 12.5 18 12.5" />
    		<line x1="9.5" x2="5.5" y1="12.5" y2="20" />
    		<line x1="15" x2="18.5" y1="12.5" y2="20" />
    		<path d="M2.75 18a13 13 0 0 0 18.5 0" />
    	</svg>
    </div>
  );
}
