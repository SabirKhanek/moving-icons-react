import { useState, useRef } from 'react';
import './BookHeadphones.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BookHeadphones({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="book-headphones" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`book-headphones-icon${isAnimating ? ' animate' : ''}`} >
    		<path
    			d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    		/>
    		<path d="M8 12v-2a4 4 0 0 1 8 0v2" />
    		<circle cx="15" cy="12" r="1" />
    		<circle cx="9" cy="12" r="1" />
    	</svg>
    </div>
  );
}
