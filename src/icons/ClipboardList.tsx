import { useState, useRef } from 'react';
import './ClipboardList.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function ClipboardList({
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
    timerRef.current = setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="clipboard-list" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`clipboard-list-icon${isAnimating ? ' animate' : ''}`} >
    		<rect width="8" height="4" x="8" y="2" rx="1" ry="1" className="clip" />
    		<path
    			d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    			className="board"
    		/>
    		<path d="M12 11h4" className="list-item-1 list-item" />
    		<path d="M12 16h4" className="list-item-2 list-item" />
    		<path d="M8 11h.01" className="bullet bullet-1" />
    		<path d="M8 16h.01" className="bullet bullet-2" />
    	</svg>
    </div>
  );
}
