import { useState, useRef } from 'react';
import './BookDashed.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BookDashed({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="book-dashed" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`book-dashed-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M12 17h1.5" />
    		<path d="M12 22h1.5" />
    		<path d="M12 2h1.5" />
    		<path d="M17.5 22H19a1 1 0 0 0 1-1" />
    		<path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
    		<path d="M20 14v3h-2.5" />
    		<path d="M20 8.5V10" />
    		<path d="M4 10V8.5" />
    		<path d="M4 19.5V14" />
    		<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
    		<path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
    	</svg>
    </div>
  );
}
