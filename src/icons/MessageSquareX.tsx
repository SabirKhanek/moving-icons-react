import { useState, useRef } from 'react';
import './MessageSquareX.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MessageSquareX({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 800);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="message-square-x" role="img" onMouseEnter={handleMouseEnter}>
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
    		className="message-square-x-icon"
    	>
    		<g className={`message-square-x-group${isAnimating ? ' animate' : ''}`} >
    			<path
    				d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
    			/>
    			<path d="m14.5 8.5-5 5" className="diagonal-1" />
    			<path d="m9.5 8.5 5 5" className="diagonal-2" />
    		</g>
    	</svg>
    </div>
  );
}
