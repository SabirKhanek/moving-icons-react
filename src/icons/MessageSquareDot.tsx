import { useState, useRef } from 'react';
import './MessageSquareDot.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MessageSquareDot({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="message-square-dot" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`${isAnimating ? 'animate' : ''}`}
    	>
    		<g className="message-square-dot-group">
    			<path
    				d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"
    				className="message-square-dot-path"
    			/>
    			<circle cx="18" cy="6" r="3" className="message-square-dot-circle" />
    		</g>
    	</svg>
    </div>
  );
}
