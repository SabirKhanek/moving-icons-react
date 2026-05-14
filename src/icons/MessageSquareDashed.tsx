import { useState, useRef } from 'react';
import './MessageSquareDashed.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MessageSquareDashed({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`}
    	aria-label="message-square-dashed"
    	role="img"
    	onMouseEnter={handleMouseEnter}
    >
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
    		<g className="message-square-dashed-group">
    			<path d="M5 3a2 2 0 0 0-2 2" className="message-square-dashed-path1" />
    			<path d="M9 3h1" className="message-square-dashed-path2" />
    			<path d="M14 3h1" className="message-square-dashed-path3" />
    			<path d="M19 3a2 2 0 0 1 2 2" className="message-square-dashed-path4" />
    			<path d="M21 9v1" className="message-square-dashed-path5" />
    			<path d="M21 14v1a2 2 0 0 1-2 2" className="message-square-dashed-path6" />
    			<path d="M14 17h1" className="message-square-dashed-path7" />
    			<path d="M10 17H7l-4 4v-7" className="message-square-dashed-path8" />
    			<path d="M3 9v1" className="message-square-dashed-path9" />
    		</g>
    	</svg>
    </div>
  );
}
