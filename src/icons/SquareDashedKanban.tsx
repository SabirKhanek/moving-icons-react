import { useState, useRef } from 'react';
import './SquareDashedKanban.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function SquareDashedKanban({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="square-dashed-kanban" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`square-dashed-kanban-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M8 7v7" className="column column-0" />
    		<path d="M12 7v4" className="column column-1" />
    		<path d="M16 7v9" className="column column-2" />
    		<path d="M5 3a2 2 0 0 0-2 2" />
    		<path d="M9 3h1" />
    		<path d="M14 3h1" />
    		<path d="M19 3a2 2 0 0 1 2 2" />
    		<path d="M21 9v1" />
    		<path d="M21 14v1" />
    		<path d="M21 19a2 2 0 0 1-2 2" />
    		<path d="M14 21h1" />
    		<path d="M9 21h1" />
    		<path d="M5 21a2 2 0 0 1-2-2" />
    		<path d="M3 14v1" />
    		<path d="M3 9v1" />
    	</svg>
    </div>
  );
}
