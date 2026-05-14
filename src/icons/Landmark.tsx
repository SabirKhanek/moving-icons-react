import { useState, useRef } from 'react';
import './Landmark.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function Landmark({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 750);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="landmark" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`landmark-icon${isAnimating ? ' animate' : ''}`} >
    		<line x1="3" x2="21" y1="22" y2="22" className="floor" />
    		<line x1="6" x2="6" y1="18" y2="11" className="column-1" />
    		<line x1="10" x2="10" y1="18" y2="11" className="column-2" />
    		<line x1="14" x2="14" y1="18" y2="11" className="column-3" />
    		<line x1="18" x2="18" y1="18" y2="11" className="column-4" />
    		<polygon points="12 2 20 7 4 7" className="roof" />
    	</svg>
    </div>
  );
}
