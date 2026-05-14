import { useState, useRef } from 'react';
import './CaptionsOff.css';

interface IconProps {
  color?: string;
  size?: number;
  strokeWidth?: number;
  animate?: boolean;
  className?: string;
}

export default function CaptionsOff({
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
    <div className={`moving-icon${className ? ' ' + className : ''}`} aria-label="captions-off" role="img" onMouseEnter={handleMouseEnter}>
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
    		className={`captions-off${isAnimating ? ' animate' : ''}`} >
    		<path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
    		<path d="M17 11h-.5" />
    		<path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
    		<path d="m2 2 20 20" />
    		<path d="M7 11h4" />
    		<path d="M7 15h2.5" />
    	</svg>
    </div>
  );
}
