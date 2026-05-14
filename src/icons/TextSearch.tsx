import { useState, useRef } from 'react';
import './TextSearch.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function TextSearch({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="text-search" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`text-search-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M21 5H3" className="line top" />
    		<g className="text-group">
    			<path d="M10 12H3" className="line middle" />
    			<path d="M10 19H3" className="line bottom" />
    		</g>
    
    		<g className="magnifier">
    			<circle cx="17" cy="15" r="3" />
    			<path d="m21 19-1.9-1.9" />
    		</g>
    	</svg>
    </div>
  );
}
