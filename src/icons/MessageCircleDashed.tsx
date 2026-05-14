import { useState, useRef } from 'react';
import './MessageCircleDashed.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MessageCircleDashed({
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
    	aria-label="message-circle-dashed"
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
    		<g className="message-circle-dashed-group">
    			<path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" className="message-circle-dashed-path1" />
    			<path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" className="message-circle-dashed-path2" />
    			<path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" className="message-circle-dashed-path3" />
    			<path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" className="message-circle-dashed-path4" />
    			<path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" className="message-circle-dashed-path5" />
    			<path d="M3.5 17.5 2 22l4.5-1.5" className="message-circle-dashed-path6" />
    			<path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" className="message-circle-dashed-path7" />
    			<path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" className="message-circle-dashed-path8" />
    		</g>
    	</svg>
    </div>
  );
}
