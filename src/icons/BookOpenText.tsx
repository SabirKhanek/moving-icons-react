import { useState, useRef } from 'react';
import './BookOpenText.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function BookOpenText({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 1500);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="book-open-text" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`book-open-text-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M12 7v14" className="center-line" />
    		<path d="M16 12h2" className="text-line text-line-right-bottom" />
    		<path d="M16 8h2" className="text-line text-line-right-top" />
    		<path
    			d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
    			className="book-path"
    		/>
    		<path d="M6 12h2" className="text-line text-line-left-bottom" />
    		<path d="M6 8h2" className="text-line text-line-left-top" />
    	</svg>
    </div>
  );
}
