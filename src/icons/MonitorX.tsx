import { useState, useRef } from 'react';
import './MonitorX.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function MonitorX({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="monitor-x" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`monitor-x-icon${isAnimating ? ' animate' : ''}`} >
    		<path d="M14.5 7.5l-5 5" className="diagonal-1" />
    		<path d="M9.5 7.5l5 5" className="diagonal-2" />
    		<rect width="20" height="14" x="2" y="3" rx="2" />
    		<path d="M12 17v4" />
    		<path d="M8 21h8" />
    	</svg>
    </div>
  );
}
